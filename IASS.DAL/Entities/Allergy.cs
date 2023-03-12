namespace IASS.DAL.Entities;

public class Allergy
{
    public string Id { get; set; } = default!;
    public string Severity { get; set; } =  default!;
    public AllergyCategory Category { get; set; }
    public User User { get; set; }
    public string? Description { get; set; }
}
