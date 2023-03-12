﻿using Microsoft.AspNetCore.Http;

namespace IASS.BLL.DTOs;

public class RegisterDoctorUserDto
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Telephone { get; set; }
    public string Password { get; set; }
    public IFormFile? Photo { get; set; }
}
