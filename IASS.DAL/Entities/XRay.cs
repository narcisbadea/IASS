using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.DAL.Entities;

public class XRay
{
    public string Id { get; set; }
    public XRayType Type { get; set; }
    public byte[] Data { get; set; }
    public User User { get; set; }
    public string? Description { get; set; }
}
