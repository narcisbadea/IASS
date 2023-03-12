using IASS.BLL.DTOs;

namespace IASS.BLL.Services.Interfaces
{
    public interface IAllergyService
    {
        Task DeleteAllergyById(string allergyId);
        Task<IEnumerable<AllergyForUserDto>> GetAllergyForUser(string userId);
        Task PostAllergyForUser(AllergyToPostDto allergy, string userId);
        Task PutAllergyForUser(AllergyToPostDto allergy, string userId, string allergyId);
    }
}