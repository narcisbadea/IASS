using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.BLL.DTOs;

public class AllergyToPostDto
{
    public string Severity { get; set; }
    public string? Description { get; set; }
    public string CategoryId { get; set; }
}
