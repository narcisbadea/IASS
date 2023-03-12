using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.DAL.Entities;

public class DoctorPatient
{
    public string Id { get; set; }
    public User Patient { get; set; }
    public User Doctor { get; set; }
}
