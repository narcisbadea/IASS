using IASS.DAL.Entities;

namespace IASS.BLL.DTOs;

public class AllergyForUserDto
{
    public string Id { get; set; }
    public string Severity { get; set; }
    public AllergyCategory Category { get; set; }
    public string Description { get; set; }
}
