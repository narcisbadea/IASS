using IASS.BLL.DTOs;
using IASS.BLL.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;

namespace IASS.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class XRayController : ControllerBase
{
    private readonly IXRayService _xRayService;

    public XRayController(IXRayService xRayService)
    {
        _xRayService = xRayService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<IEnumerable<XRayForUserDto>>> GetAllXrayForUser(string userId)
    {
        var xrays = await _xRayService.GetAllXrayByUserId(userId);
        return Ok(xrays);
    }

    [HttpPost]
    [Authorize]
    public async Task<ActionResult<IEnumerable<XRayForUserDto>>> PostXrayForUser([FromForm] XRayToPostDto xray, [FromQuery] string userId)
    {
        await _xRayService.PostXray(xray, userId);
        return Ok();
    }

    [HttpDelete]
    [Authorize]
    public async Task<ActionResult<string>> DeleteXrayById(string xrayId)
    {
        await _xRayService.DeleteXray(xrayId);
        return Ok();
    }

    [HttpGet("photo")]
    [Authorize]
    public async Task<ActionResult<IEnumerable<XRayForUserDto>>> GetXrayPhotoById(string xRayId)
    {
        var imageData = await _xRayService.GetPhotoByXRayId(xRayId);
        if (imageData == null)
        {
            return NotFound();
        }

        // create a memory stream from the byte array
        var stream = new MemoryStream(imageData);

        // set the content type based on the image file extension
        string contentType = "image/jpeg"; // or "image/png", "image/gif", etc.

        // set the file name (optional)
        string fileName = "image.jpeg";

        return File(stream, contentType, fileName);
    }
}
