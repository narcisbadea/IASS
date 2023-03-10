using IASS.BLL.DTOs;
using IASS.BLL.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

namespace IASS.API.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly IUserService _userService;

    public AuthController(IAuthService authService, IUserService userService)
    {
        _authService = authService;
        _userService = userService;
    }


    [HttpPost("register-doctor")]
    public async Task<ActionResult<string>> SignUpDoctor([FromForm] RegisterDoctorUserDto auth)
    {
        var result = await _authService.SignUpDoctor(auth);
        return Ok(result);
    }

    [HttpPost("register-patient")]
    public async Task<ActionResult<string>> SignUpPatient([FromForm] RegisterPatientUserDto auth)
    {
        var result = await _authService.SignUpPatient(auth);
        return Ok(result);
    }

    [HttpPost("login")]
    public async Task<ActionResult<string>> Login(LoginDTO request)
    {
        if (!await _authService.CheckPassword(request))
        {
            return BadRequest(new { Message = "Invalid password or user not found!" });
        }
        var token = await _authService.GenerateToken(request, request.rememberMe);
        var expires = request.rememberMe ? 240 : 30;
        var roles = await _userService.GetUserRoles(request.Email);
        var role = "User";
        if (roles.Contains("Admin"))
        {
            role = "Admin";
        }
        return Ok(new JwtSecurityTokenHandler().WriteToken(token).ToString());
    }

    [HttpGet("logged-username")]
    [Authorize]
    public ActionResult<string> GetUserName()
    {
        var result = _authService.GetLoggedUserName();
        if (result == null)
        {
            return NotFound();
        }
        return Ok(result);
    }
}
