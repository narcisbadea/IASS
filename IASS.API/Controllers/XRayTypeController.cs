using IASS.BLL.Services.Implementation;
using IASS.BLL.Services.Interfaces;
using IASS.DAL.DbContext;
using IASS.DAL.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IASS.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class XRayTypeController : ControllerBase
{
    private readonly IXRayTypeService _xRayTypeService;

    public XRayTypeController(IXRayTypeService xRayTypeService)
    {
        _xRayTypeService = xRayTypeService;
    }

    [HttpGet("all")]
    public async Task<ActionResult<IEnumerable<XRayType>>> GetAllXrayTypes()
    {
        return Ok(await _xRayTypeService.GetAllXrayTypes());
    }
}
