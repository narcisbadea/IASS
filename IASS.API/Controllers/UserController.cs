using IASS.BLL.Services.Interfaces;
using IASS.DAL.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IASS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IUserService _userService;

        public UserController(IAuthService authService, IUserService userService)
        {
            _authService = authService;
            _userService = userService;
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

        [HttpGet("logged-user-name")]
        [Authorize]
        public async Task<ActionResult<string>> GetUserName()
        {
            return Ok(await _authService.GetLoggedUserName());
        }

        [HttpGet("profile-photo")]
        [Authorize]
        public async Task<ActionResult<IFormFile>> GetUserProfile()
        {
            var userId = await _authService.GetLoggedUserId();
            // retrieve byte[] data from the database based on the given id
            byte[] imageData = await _userService.GetUserPhoto(userId);

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

        [HttpPost("search")]
        public async Task<ActionResult<Page<UserForTableDTO>>> SearchUserProfiles(UserSearchRequest userSearchRequest)
        {
            return Ok(await _userService.SearchUserProfiles(userSearchRequest));
        }

        [HttpPost("medical-history")]
        [Authorize]
        public async Task<ActionResult<string>> SetMedicalHistory(string medicalHistory)
        {
            await _userService.SetUserMedicalHistory(medicalHistory);
            return Ok("Medical history seted!");
        }

        [HttpGet("medical-history")]
        [Authorize]
        public async Task<ActionResult<string>> GetMedicalHistory()
        {
            return Ok(await _userService.GetUserMedicalHistory());
        }

        [HttpDelete("medical-history")]
        [Authorize]
        public async Task<ActionResult<string>> DeleteMedicalHistory()
        {
            await _userService.DeleteUserMedicalHistory();
            return Ok();
        }
    }
}
