using IASS.DAL.DbContext;
using IASS.DAL.Entities;
using IASS.DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.DAL.Repositories.Implementation;

public class AllergyRepository : IAllergyRepository
{
    private readonly AppDbContext _appDbContext;

    public AllergyRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }


    public async Task<IEnumerable<Allergy>> GetAllergyForUser(string userId)
    {
        return await _appDbContext.Allergies
            .Include(a => a.Category)
            .Include(a => a.User)
            .Where(u => u.User.Id == userId)
            .ToListAsync();
    }

    public async Task PostAllergyForUser(Allergy allergy)
    {
        await _appDbContext.AddAsync(allergy);
        await _appDbContext.SaveChangesAsync();
    }
}
