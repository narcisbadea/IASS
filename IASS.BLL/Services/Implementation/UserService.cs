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
        return await _userRepository.GetFilteredUserProfilesAsync(userSearchRequest);

    }

    public async Task SetUserMedicalHistory(string medicalHistory)
    {
        var userId = await _authService.GetLoggedUserId();
        await _userRepository.SetUserMedicalHistory(userId, medicalHistory);
    }

    public async Task<string> GetUserMedicalHistory()
    {
        var userId = await _authService.GetLoggedUserId();
        return await _userRepository.GetUserMedicalHistory(userId);
    }

    public async Task DeleteUserMedicalHistory()
    {
        var userId = await _authService.GetLoggedUserId();
        await _userRepository.DeleteUserMedicalHistory(userId);
    }
}
