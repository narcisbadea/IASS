using AutoMapper;
using IASS.BLL.Services.Interfaces;
using IASS.DAL.Repositories.Interfaces;

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
}
