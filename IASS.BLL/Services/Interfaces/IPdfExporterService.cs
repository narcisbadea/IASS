using IASS.BLL.DTOs;

namespace IASS.BLL.Services.Interfaces
{
    public interface IPdfExporterService
    {
        Task<byte[]> GeneratePdf(string userId);
        Task<ProfileForPdfExporterDto> GetDataForPdf(string userId);
        Task<ProfileForXmlDto> GetDataForxml(string userId);
    }
}