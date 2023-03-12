using IASS.DAL.DbContext;
using IASS.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.DAL.Repositories.Implementation;

public class XRayRepository : IXRayRepository
{
    private readonly AppDbContext _appDbContext;

    public XRayRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    public async Task<IEnumerable<XRay>> GetAllXrayByUserId(string userId)
    {
        return await _appDbContext.xRays
            .Include(x => x.User)
            .Include(x => x.Type)
            .Where(x => x.User.Id == userId)
            .ToListAsync();
    }

    public async Task PostXray(XRay xRay)
    {
        await _appDbContext.xRays.AddAsync(xRay);
        await _appDbContext.SaveChangesAsync();
    }

    public async Task<byte[]> GetPhotoByXRayId(string xrayId)
    {
        return (await _appDbContext.xRays.FirstOrDefaultAsync(x => x.Id == xrayId)).Data;
    }

    public async Task DeleteXray(string xRay)
    {
        var xray = await _appDbContext.xRays.FirstOrDefaultAsync(x => x.Id == xRay);
        _appDbContext.xRays.Remove(xray);
        await _appDbContext.SaveChangesAsync();
    }
}
