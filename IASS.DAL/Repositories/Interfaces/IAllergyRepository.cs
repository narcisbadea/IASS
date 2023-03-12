using IASS.DAL.Entities;

namespace IASS.DAL.Repositories.Interfaces
{
    public interface IAllergyRepository
    {
        Task DeleteAllergyById(string allergyId);
        Task<IEnumerable<Allergy>> GetAllergyForUser(string userId);
        Task PostAllergyForUser(Allergy allergy);
        Task PutAllergy(Allergy allergy);
    }
}