using IASS.DAL.Entities;

namespace IASS.DAL.Repositories.Interfaces
{
    public interface IAllergyCategoryRepository
    {
        Task<AllergyCategory?> GetAlergyCategoryById(string categoryId);
        Task<IEnumerable<AllergyCategory>> GetAllAlergyCategory();
    }
}