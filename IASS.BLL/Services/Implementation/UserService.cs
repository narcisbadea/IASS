using AutoMapper;
using IASS.BLL.DTOs;
using IASS.BLL.Services.Interfaces;
using IASS.DAL.Entities;
using IASS.DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;

namespace IASS.BLL.Services.Implementation;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public UserService(IUserRepository userRepository, IAuthService authService, IMapper mapper)
    {
        _userRepository = userRepository;
        _authService = authService;
        _mapper = mapper;
    }

    public async Task<List<string>> GetUserRoles(string email)
    {
        var result = await _userRepository.GetUserRoles(email);
        return result;
    }

    public async Task<byte[]> GetUserPhoto(string userId)
    {
        return await _userRepository.GetUserPhoto(userId);
    }

    public async Task<Page<UserForTableDTO>> SearchUserProfiles(UserSearchRequest userSearchRequest)
    {
        var doctorId = await _authService.GetLoggedUserId();
        return await _userRepository.GetFilteredUserProfilesAsync(userSearchRequest, doctorId);

    }

    public async Task SetUserMedicalHistory(string medicalHistory, string userId)
    {
        await _userRepository.SetUserMedicalHistory(userId, medicalHistory);
    }

    public async Task<string> GetUserMedicalHistory(string userId)
    {
        return await _userRepository.GetUserMedicalHistory(userId);
    }

    public async Task DeleteUserMedicalHistory(string userId)
    {
        await _userRepository.DeleteUserMedicalHistory(userId);
    }

    public async Task<PatientProfileDto> GetPatientProfileById(string userId)
    {
        return _mapper.Map<PatientProfileDto>(await _userRepository.GetUserById(userId));
    }
}
