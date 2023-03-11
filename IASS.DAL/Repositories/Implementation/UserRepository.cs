using IASS.DAL.DbContext;
using IASS.DAL.Entities;
using IASS.DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;


namespace IASS.DAL.Repositories.Implementation;

public class UserRepository : IUserRepository
{
    private readonly AppDbContext _dbContext;
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<Role> _roleManager;

    public UserRepository(AppDbContext dbContext, UserManager<User> userManager, RoleManager<Role> roleManager)
    {
        _dbContext = dbContext;
        _userManager = userManager;
        _roleManager = roleManager;
    }


    public async Task<string> CreateUserAsync(User user)
    {
        await _dbContext.Users.AddAsync(user);

        await _dbContext.SaveChangesAsync();

        return user.Id;
    }

    public async Task DeleteUserAsync(User user)
    {
        _dbContext.Users.Remove(user);
        await _dbContext.SaveChangesAsync();
    }

    public async Task<User> GetUserById(string userId)
    {
        var result = await _userManager.FindByIdAsync(userId);
        return result;
    }

    public async Task<User> GetUserByName(string name)
    {
        var result = await _userManager.FindByNameAsync(name);
        return result;
    }

    public async Task<List<string>> GetUserRoles(string email)
    {
        var user = await _dbContext.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
        var result = await _userManager.GetRolesAsync(user);
        return result.ToList();
    }

    public async Task<byte[]> GetUserPhoto(string userId)
    {
        var user = await _dbContext.Users.Where(u => u.Id == userId).FirstOrDefaultAsync();
        return user.Photo;
    }

    public async Task<Page<UserForTableDTO>> GetFilteredUserProfilesAsync(UserSearchRequest userSearchRequest)
    {
        var users = _dbContext.Users
            .AsNoTracking();

        users = ApplyUserFilterList(userSearchRequest, users);

        var totalCount = await users.CountAsync();
        if (!string.IsNullOrWhiteSpace(userSearchRequest.Name))
        {
            users = users.Where(u => (u.FirstName != null && u.FirstName.Contains(userSearchRequest.Name))
            || u.LastName != null && u.LastName.Contains(userSearchRequest.Name));
        }
        users = users.Skip(userSearchRequest.Skip)
                     .Take(userSearchRequest.Take);

        var result = await users.Select(u => new UserForTableDTO()
        {
            UserName = u.FirstName + " " + u.LastName,
            Age = u.Age,
            Contact = u.Telephone,
            Address = u.Address
        }).ToListAsync();

        return new Page<UserForTableDTO>
        {
            TotalCount = totalCount,
            Items = result
        };
    }

    private IQueryable<User> ApplyUserFilterList(UserSearchRequest filter, IQueryable<User> users)
    {
        if(filter.Age.Count>0)
            users = users.Where(u => filter.Age.Contains(u.Age));
        return users;
    }

    public async Task SetUserMedicalHistory(string userId, string medicalHistory)
    {
        var user = await GetUserById(userId);
        user.MedicalHistory = medicalHistory;
        await _dbContext.SaveChangesAsync();
    }

    public async Task<string> GetUserMedicalHistory(string userId) => (await GetUserById(userId)).MedicalHistory;
    public async Task DeleteUserMedicalHistory(string userId)
    {
        var user = await GetUserById(userId);
        user.MedicalHistory = string.Empty;
        await _dbContext.SaveChangesAsync();
    }

}
