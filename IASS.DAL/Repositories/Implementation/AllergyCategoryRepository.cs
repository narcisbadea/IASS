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

public class AllergyCategoryRepository : IAllergyCategoryRepository
{
    private readonly AppDbContext _appDbContext;

    public AllergyCategoryRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }


    public async Task<IEnumerable<AllergyCategory>> GetAllAlergyCategory()
    {
        return await _appDbContext.AllergyCategories.ToListAsync();
    }

    public async Task<AllergyCategory?> GetAlergyCategoryById(string categoryId)
    {
        return await _appDbContext.AllergyCategories
            .Where(a => a.Id == categoryId)
            .FirstOrDefaultAsync();
    }


}
