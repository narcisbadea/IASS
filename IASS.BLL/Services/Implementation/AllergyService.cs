using AutoMapper;
using IASS.BLL.DTOs;
using IASS.BLL.Services.Interfaces;
using IASS.DAL.Entities;
using IASS.DAL.Repositories.Interfaces;

namespace IASS.BLL.Services.Implementation;

public class AllergyService : IAllergyService
{
    private readonly IAllergyRepository _allergyRepository;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;
    private readonly IAllergyCategoryRepository _allergyCategoryRepository;
    private readonly IUserRepository _userRepository;

    public AllergyService(IAllergyRepository allergyRepository, IAuthService authService, IMapper mapper, IAllergyCategoryRepository allergyCategoryRepository, IUserRepository userService)
    {
        _allergyRepository = allergyRepository;
        _authService = authService;
        _mapper = mapper;
        _allergyCategoryRepository = allergyCategoryRepository;
        _userRepository = userService;
    }


    public async Task<IEnumerable<AllergyForUserDto>> GetAllergyForUser(string userId)
    {
        var allergies = await _allergyRepository.GetAllergyForUser(userId);
        return _mapper.Map<List<AllergyForUserDto>>(allergies);
    }

    public async Task PutAllergyForUser(AllergyToPostDto allergy,string userId, string allergyId)
    {
        var category = await _allergyCategoryRepository.GetAlergyCategoryById(allergy.CategoryId);
        var user = await _userRepository.GetUserById(userId);
        var allergyToUpdate = new Allergy
        {
            Category = category,
            Description = allergy.Description,
            Id = allergyId,
            Severity = allergy.Severity,
            User = user
        };
        await _allergyRepository.PutAllergy(allergyToUpdate);
    }

    public async Task PostAllergyForUser(AllergyToPostDto allergy, string userId)
    {
        var user = await _userRepository.GetUserById(userId);
        var category = await _allergyCategoryRepository.GetAlergyCategoryById(allergy.CategoryId);
        var al = new Allergy
        {
            Category = category,
            Description = allergy.Description,
            Id = Guid.NewGuid().ToString(),
            Severity = allergy.Severity,
            User = user
        };
        await _allergyRepository.PostAllergyForUser(al);
    }

    public async Task DeleteAllergyById(string allergyId)
    {
        await _allergyRepository.DeleteAllergyById(allergyId);
    }
}
