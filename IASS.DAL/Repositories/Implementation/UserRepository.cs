using IASS.DAL.DbContext;
using IASS.DAL.Entities;
using IASS.DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;
using System.Security.Cryptography;

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

    public async Task<string> GetDoctorCode(string userId)
    {
        var doctor = await _dbContext.Doctors.Include(u => u.User).FirstOrDefaultAsync(u => u.User.Id == userId);
        return doctor.RegisterCode;
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

    public async Task<Page<UserForTableDTO>> GetFilteredUserProfilesAsync(UserSearchRequest userSearchRequest, string doctorId)
    {
        var users = _dbContext.Users
            .AsNoTracking();

        users = ApplyUserFilterList(userSearchRequest, users);
        var doctorPatient = (await _dbContext.doctorPatients
            .Include(d => d.Doctor)
            .Include(p => p.Patient)
            .Where(d => d.Doctor.Id == doctorId)
            .ToListAsync())
            .Select(u => u.Patient);
        users = users.Where(u => doctorPatient.Contains(u));
        if (!string.IsNullOrWhiteSpace(userSearchRequest.Name))
        {
            users = users.Where(u => (u.FirstName != null && u.FirstName.Contains(userSearchRequest.Name))
            || u.LastName != null && u.LastName.Contains(userSearchRequest.Name));
        }


        var totalCount = await users.CountAsync();
        users = users.Skip(userSearchRequest.Skip)
                     .Take(userSearchRequest.Take);

        var result = await users.Select(u => new UserForTableDTO()
        {
            Id = u.Id,
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

    public async Task CreateDoctor(User user)
    {
        var doctor = new Doctor
        {
            Id = Guid.NewGuid().ToString(),
            RegisterCode = GenerateDoctorCode(),
            User = user
        };
        await _dbContext.Doctors.AddAsync(doctor);
        await _dbContext.SaveChangesAsync();
    }

    public async Task<Doctor?> FindDoctorAfterCode(string code)
    {
        return await _dbContext.Doctors.Include(d => d.User).FirstOrDefaultAsync(d => d.RegisterCode == code);
    }

    public async Task AddPatientToDoctor(User Doctor, User Patient)
    {
        var dp = new DoctorPatient
        {
            Id = Guid.NewGuid().ToString(),
            Doctor = Doctor,
            Patient = Patient
        };
        await _dbContext.doctorPatients.AddAsync(dp);
        await _dbContext.SaveChangesAsync();
    }

    private string GenerateDoctorCode()
    {
        // Generate 16 random bytes
        byte[] randomBytes = new byte[16];
        using (var rng = RandomNumberGenerator.Create())
        {
            rng.GetBytes(randomBytes);
        }

        // Convert the bytes to a base64-encoded string
        string code = Convert.ToBase64String(randomBytes);

        // Take the first 16 characters of the encoded string
        return code.Substring(0, 16);
    }

}
