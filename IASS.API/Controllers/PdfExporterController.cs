using DinkToPdf;
using DinkToPdf.Contracts;
using IASS.BLL.DTOs;
using IASS.BLL.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Xml.Serialization;

namespace IASS.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PdfExporterController : ControllerBase
{

    private readonly IConverter _converter;
    private readonly IPdfExporterService _pdfexporterservice;

    public PdfExporterController(IConverter converter, IPdfExporterService pdfexporterservice)
    {
        _converter = converter;
        _pdfexporterservice = pdfexporterservice;
    }

    [HttpGet("generate-xml")]
    public async Task<IActionResult> GenerateXml(string userId)
    {
        var profile = await _pdfexporterservice.GetDataForxml(userId);
        var xmlData = ToXml(profile);
        var fileName = $"{profile.Patient.FirstName}_{profile.Patient.LastName}.xml";
        Response.ContentType = "application/xml";
        Response.Headers.Add("Content-Disposition", $"attachment; filename={fileName}");
        return File(Encoding.UTF8.GetBytes(xmlData), Response.ContentType, fileName);
    }

    private string ToXml(ProfileForXmlDto data)
    {
        var serializer = new XmlSerializer(typeof(ProfileForXmlDto));
        using (var stringWriter = new StringWriter())
        {
            serializer.Serialize(stringWriter, data);
            return stringWriter.ToString();
        }
    }


    [HttpGet("GeneratePDF")]
    public async Task<ActionResult<IFormFile>> GeneratePDF(string userId)
    {
        var profile = await _pdfexporterservice.GetDataForPdf(userId);
        var xraysTable = $@"<table style='border-collapse: collapse; width: 100%;'>
                            <thead style='background-color: #f2f2f2;'>
                                <tr>
                                    <th style='border: 1px solid #ddd; padding: 8px;'>Type</th>
                                    <th style='border: 1px solid #ddd; padding: 8px;'>Image</th>
                                    <th style='border: 1px solid #ddd; padding: 8px;'>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {string.Join("", profile.Xrays.Select(x => $@"
                                <tr style='border: 1px solid #ddd;'>
                                    <td style='border: 1px solid #ddd; padding: 8px;'>{x.Type.Name}</td>
                                    <td style='border: 1px solid #ddd; padding: 8px; text-align: center;'>
                                        <img style=""max-width: 300px; max-height: 300px;"" src='data:image/png;base64,{Convert.ToBase64String(x.Data)}' />
                                    </td>
                                    <td style='border: 1px solid #ddd; padding: 8px;'>{x.Description ?? "-"}</td>
                                </tr>
                                "))}
                            </tbody>
                        </table>";

        var allergiesTable = $@"<table style='border-collapse: collapse; width: 100%;'>
                            <thead style='background-color: #f2f2f2;'>
                                <tr>
                                    <th style='border: 1px solid #ddd; padding: 8px;'>Severity</th>
                                    <th style='border: 1px solid #ddd; padding: 8px;'>Category</th>
                                    <th style='border: 1px solid #ddd; padding: 8px;'>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {string.Join("", profile.Allergies.Select(a => $@"
                                <tr style='border: 1px solid #ddd;'>
                                    <td style='border: 1px solid #ddd; padding: 8px;'>{a.Severity}</td>
                                    <td style='border: 1px solid #ddd; padding: 8px;'>{a.Category.Name}</td>
                                    <td style='border: 1px solid #ddd; padding: 8px;'>{a.Description ?? "-"}</td>
                                </tr>
                                "))}
                            </tbody>
                        </table>";
        var html = $@"<html>
                     <body>
                      <h1>{profile.Patient.FirstName}
                            {profile.Patient.LastName}</h1>
                      <p> Age: {profile.Patient.Age}</p>
                      <p> Telephone: {profile.Patient.Telephone}</p>
                      <p> Address: {profile.Patient.Address}</p>
                      <p> CNP: {profile.Patient.CNP}</p>
                      <br><br>
                      <h2>Allergies</h2>
                       {allergiesTable}
                      <h2>X-Rays</h2>
                       {xraysTable}
                    </body>
                    </html> ";
        GlobalSettings globalSettings = new GlobalSettings();
        globalSettings.ColorMode = ColorMode.Color;
        globalSettings.Orientation = Orientation.Portrait;
        globalSettings.PaperSize = PaperKind.A4;
        globalSettings.Margins = new MarginSettings { Top = 25, Bottom = 25 };
        ObjectSettings objectSettings = new ObjectSettings();
        objectSettings.PagesCount = true;
        objectSettings.HtmlContent = html;
        WebSettings webSettings = new WebSettings();
        webSettings.DefaultEncoding = "utf-8";
        HeaderSettings headerSettings = new HeaderSettings();
        headerSettings.FontSize = 15;
        headerSettings.FontName = "Ariel";
        headerSettings.Right = "Page [page] of [toPage]";
        headerSettings.Line = true;
        FooterSettings footerSettings = new FooterSettings();
        footerSettings.FontSize = 12;
        footerSettings.FontName = "Ariel";
        footerSettings.Center = "CONFIDENTIAL MEDICAL RECORDS CONFIDENTIAL";
        footerSettings.Line = true;
        objectSettings.HeaderSettings = headerSettings;
        objectSettings.FooterSettings = footerSettings;
        objectSettings.WebSettings = webSettings;
        HtmlToPdfDocument htmlToPdfDocument = new HtmlToPdfDocument()
        {
            GlobalSettings = globalSettings,
            Objects = { objectSettings },
        };

        var pdfFile = _converter.Convert(htmlToPdfDocument); ;
        return File(pdfFile,"application/octet-stream", profile.Patient.FirstName+"_"+profile.Patient.LastName+".pdf");
    }
}
