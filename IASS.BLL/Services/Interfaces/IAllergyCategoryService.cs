using IASS.DAL.Entities;

namespace IASS.BLL.Services.Interfaces
{
    public interface IAllergyCategoryService
    {
        Task<IEnumerable<AllergyCategory>> GetAllAllergyCategories();
    }
}