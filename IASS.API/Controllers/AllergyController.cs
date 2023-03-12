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
    public async Task<ActionResult<string>> PostAllergyToUser(AllergyToPostDto allergy, string userId)
    {
        await _allergyService.PostAllergyForUser(allergy, userId);
        return Ok("Allergy added!");
    }

    [HttpPut]
    [Authorize]
    public async Task<ActionResult<string>> PutAllergyToUser(AllergyToPostDto allergy,string userId, string allergyId)
    {
        await _allergyService.PutAllergyForUser(allergy, userId, allergyId);
        return Ok("Allergy added!");
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<IEnumerable<AllergyForUserDto>>> GetAllergyFromUser(string userId)
    {
        return Ok(await _allergyService.GetAllergyForUser(userId));
    }

    [HttpDelete]
    [Authorize]
    public async Task<ActionResult<string>> DeleteAllergyById(string allergyId)
    {
        await _allergyService.DeleteAllergyById(allergyId);
        return Ok("Deleted with success!");
    }
}
