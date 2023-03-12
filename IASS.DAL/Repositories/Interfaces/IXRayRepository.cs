using IASS.DAL.Entities;

namespace IASS.DAL.Repositories.Implementation
{
    public interface IXRayRepository
    {
        Task DeleteXray(string xRay);
        Task<IEnumerable<XRay>> GetAllXrayByUserId(string userId);
        Task<byte[]> GetPhotoByXRayId(string xrayId);
        Task PostXray(XRay xRay);
    }
}