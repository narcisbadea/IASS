using IASS.DAL.Entities;

namespace IASS.DAL.Repositories.Interfaces
{
    public interface IXRayTypeRepository
    {
        Task<IEnumerable<XRayType>> GetAllXrayTypes();
        Task<XRayType> GetXRayById(string xtypeId);
    }
}