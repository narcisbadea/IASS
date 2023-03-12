using IASS.DAL.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.BLL.DTOs;

public class XRayToPostDto
{
    public string TypeId { get; set; }
    public IFormFile Photo { get; set; }
    public string? Description { get; set; }
}
