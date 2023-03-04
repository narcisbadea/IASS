using IASS.BLL.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IASS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IAuthService _authService;

        public UserController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpGet("logged-userid")]
        [Authorize]
        public async Task<ActionResult<string>> GetUserId()
        {
            var result = await _authService.GetLoggedUserId();
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }
    }
}
