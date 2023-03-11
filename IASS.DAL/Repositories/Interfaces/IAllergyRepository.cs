using IASS.DAL.Entities;

namespace IASS.DAL.Repositories.Interfaces
{
    public interface IAllergyRepository
    {
        Task<IEnumerable<Allergy>> GetAllergyForUser(string userId);
        Task PostAllergyForUser(Allergy allergy);
    }
}