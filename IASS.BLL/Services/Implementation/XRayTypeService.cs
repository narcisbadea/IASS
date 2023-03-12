using IASS.BLL.Services.Interfaces;
using IASS.DAL.DbContext;
using IASS.DAL.Entities;
using IASS.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.BLL.Services.Implementation;

public class XRayTypeService : IXRayTypeService
{
    private readonly IXRayTypeRepository _xRayRepository;

    public XRayTypeService(IXRayTypeRepository xRayRepository)
    {
        _xRayRepository = xRayRepository;
    }

    public async Task<IEnumerable<XRayType>> GetAllXrayTypes()
    {
        return await _xRayRepository.GetAllXrayTypes();
    }
}
