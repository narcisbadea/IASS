using Microsoft.AspNetCore.Identity;

namespace IASS.DAL.Entities;

public class User : IdentityUser
{
    public int Age { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Telephone { get; set; }
    public string Address { get; set; }
    public string? CNP { get; set; }
    public byte[] Photo { get; set; }
    public string MedicalHistory { get; set; }
}

