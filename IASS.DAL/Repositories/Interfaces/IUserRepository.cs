using IASS.DAL.Entities;

namespace IASS.DAL.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task AddPatientToDoctor(User Doctor, User Patient);
        Task CreateDoctor(User user);
        Task<string> CreateUserAsync(User user);
        Task DeleteUserAsync(User user);
        Task DeleteUserMedicalHistory(string userId);
        Task<Doctor?> FindDoctorAfterCode(string code);
        Task<string> GetDoctorCode(string userId);
        Task<Page<UserForTableDTO>> GetFilteredUserProfilesAsync(UserSearchRequest userSearchRequest, string doctorId);
        Task<User> GetUserById(string userId);
        Task<User> GetUserByName(string name);
        Task<string> GetUserMedicalHistory(string userId);
        Task<byte[]> GetUserPhoto(string userId);
        Task<List<string>> GetUserRoles(string email);
        Task SetUserMedicalHistory(string userId, string medicalHistory);
    }
}