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

    public AllergyService(IAllergyRepository allergyRepository, IAuthService authService, IMapper mapper, IAllergyCategoryRepository allergyCategoryRepository)
    {
        _allergyRepository = allergyRepository;
        _authService = authService;
        _mapper = mapper;
        _allergyCategoryRepository = allergyCategoryRepository;
    }


    public async Task<IEnumerable<AllergyForUserDto>> GetAllergyForUser()
    {
        var user = await _authService.GetLoggedUserId();
        var allergies = await _allergyRepository.GetAllergyForUser(user);
        var dto = _mapper.Map<List<AllergyForUserDto>>(allergies);
        return dto;
    }

    public async Task PostAllergyForUser(AllergyToPostDto allergy)
    {
        var user = await _authService.GetLoggedUser();
        var category = await _allergyCategoryRepository.GetAlergyCategoryById(allergy.CategoryId);
        var al = new Allergy
        {
            Category = category,
            Description = allergy.Description,
            Id = Guid.NewGuid().ToString(),
            Name = allergy.Name,
            User = user
        };
        await _allergyRepository.PostAllergyForUser(al);
    }
}
