using IASS.DAL.Entities;

namespace IASS.BLL.Services.Interfaces
{
    public interface IXRayTypeService
    {
        Task<IEnumerable<XRayType>> GetAllXrayTypes();
    }
}