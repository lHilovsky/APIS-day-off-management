using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RestAppGelHil.Models
{
    public class EmployeeShiftsRelations
    {
        public int ID { get; set; }
        public int employee_ID { get; set; }
        public int shifts_ID { get; set; }
    }
}