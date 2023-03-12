using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.DAL.Entities;

public class UserSearchRequest : SearchRequest
{
    public string? Name { get; set; }
    public List<int?> Age { get; set; } = new List<int?>();
}
