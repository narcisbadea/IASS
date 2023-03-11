using IASS.DAL.Entities;
using Microsoft.AspNetCore.Http;

namespace IASS.BLL.Services.Interfaces
{
    public interface IUserService
    {
        Task DeleteUserMedicalHistory();
        Task<string> GetUserMedicalHistory();
        Task<byte[]> GetUserPhoto(string userId);
        Task<List<string>> GetUserRoles(string email);
        Task<Page<UserForTableDTO>> SearchUserProfiles(UserSearchRequest userSearchRequest);
        Task SetUserMedicalHistory(string medicalHistory);
    }
}