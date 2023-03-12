using IASS.DAL.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.BLL.DTOs;

public class XRayForUserDto
{
    public string Id { get; set; }
    public XRayType Type { get; set; }
    public string Description { get; set; }
}
