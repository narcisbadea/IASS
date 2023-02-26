using Microsoft.AspNetCore.Identity;

namespace IASS.DAL.Entities;

public class User : IdentityUser
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string CNP { get; set; }
}

