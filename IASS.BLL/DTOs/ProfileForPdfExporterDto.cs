using IASS.DAL.Entities;

namespace IASS.BLL.DTOs;

public class ProfileForPdfExporterDto
{
    public User Patient { get; set; }
    public IEnumerable<Allergy> Allergies { get; set; }
    public IEnumerable<XRay> Xrays { get; set; }
}
