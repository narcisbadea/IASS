using Microsoft.AspNetCore.Http;

namespace IASS.BLL.DTOs;

public class RegisterPatientUserDto
{
    public int Age { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Telephone { get; set; }
    public string Password { get; set; }
    public string Address { get; set; }
    public string CNP { get; set; }
    public IFormFile? Photo { get; set; }
    public string DoctorCode { get; set; }
}
