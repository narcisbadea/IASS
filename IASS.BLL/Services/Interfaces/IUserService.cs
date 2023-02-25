namespace IASS.BLL.Services.Interfaces
{
    public interface IUserService
    {
        Task<List<string>> GetUserRoles(string email);
    }
}