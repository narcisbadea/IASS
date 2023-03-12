using IASS.BLL.DTOs;
using IASS.DAL.Entities;
using Microsoft.AspNetCore.Http;

namespace IASS.BLL.Services.Interfaces
{
    public interface IUserService
    {
        Task DeleteUserMedicalHistory(string userId);
        Task<PatientProfileDto> GetPatientProfileById(string userId);
        Task<string> GetUserMedicalHistory(string userId);
        Task<byte[]> GetUserPhoto(string userId);
        Task<List<string>> GetUserRoles(string email);
        Task<Page<UserForTableDTO>> SearchUserProfiles(UserSearchRequest userSearchRequest);
        Task SetUserMedicalHistory(string medicalHistory, string userId);
    }
}