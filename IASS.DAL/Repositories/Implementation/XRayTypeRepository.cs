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

public class XRayTypeRepository : IXRayTypeRepository
{
    private readonly AppDbContext _appDbContext;

    public XRayTypeRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    public async Task<IEnumerable<XRayType>> GetAllXrayTypes()
    {
        return await _appDbContext.XRayTypes.ToListAsync();
    }

    public async Task<XRayType> GetXRayById(string xtypeId)
    {
        return await _appDbContext.XRayTypes.FirstOrDefaultAsync(x => x.Id == xtypeId);
    }
}
