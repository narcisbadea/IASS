using IASS.DAL.Entities;

namespace IASS.BLL.DTOs;

public class ProfileForXmlDto
{
    public User Patient { get; set; }
    public List<Allergy> Allergies { get; set; } = new List<Allergy>();
    public List<XRay> Xrays { get; set; } = new List<XRay>();
}
