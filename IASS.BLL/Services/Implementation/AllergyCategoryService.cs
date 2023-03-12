using IASS.BLL.Services.Interfaces;
using IASS.DAL.Entities;
using IASS.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.BLL.Services.Implementation;

public class AllergyCategoryService : IAllergyCategoryService
{
    private readonly IAllergyCategoryRepository _allergyCategoryRepository;

    public AllergyCategoryService(IAllergyCategoryRepository allergyCategoryRepository)
    {
        _allergyCategoryRepository = allergyCategoryRepository;
    }

    public async Task<IEnumerable<AllergyCategory>> GetAllAllergyCategories()
    {
        return await _allergyCategoryRepository.GetAllAlergyCategory();
    }
}
