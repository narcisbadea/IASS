namespace IASS.DAL.Entities;

public class Doctor
{
    public string Id { get; set; }
    public User User { get; set; }
    public string RegisterCode { get; set; }
}
