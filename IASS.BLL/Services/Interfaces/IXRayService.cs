using IASS.BLL.DTOs;

namespace IASS.BLL.Services.Interfaces
{
    public interface IXRayService
    {
        Task DeleteXray(string xRay);
        Task<IEnumerable<XRayForUserDto>> GetAllXrayByUserId(string userId);
        Task<byte[]> GetPhotoByXRayId(string xrayId);
        Task PostXray(XRayToPostDto xRay, string userId);
    }
}