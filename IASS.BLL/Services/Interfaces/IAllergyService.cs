using IASS.BLL.DTOs;

namespace IASS.BLL.Services.Interfaces
{
    public interface IAllergyService
    {
        Task<IEnumerable<AllergyForUserDto>> GetAllergyForUser();
        Task PostAllergyForUser(AllergyToPostDto allergy);
    }
}