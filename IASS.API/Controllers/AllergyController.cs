using IASS.BLL.DTOs;
using IASS.BLL.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IASS.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AllergyController : ControllerBase
{
    private readonly IAllergyService _allergyService;

    public AllergyController(IAllergyService allergyService)
    {
        _allergyService = allergyService;
    }

    [HttpPost]
    [Authorize]
    public async Task<ActionResult<string>> PostAllergyToUser(AllergyToPostDto allergy)
    {
        await _allergyService.PostAllergyForUser(allergy);
        return Ok("Allergy added!");
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<IEnumerable<AllergyForUserDto>>> GetAllergyFromUser()
    {
        return Ok(await _allergyService.GetAllergyForUser());
    }
}
