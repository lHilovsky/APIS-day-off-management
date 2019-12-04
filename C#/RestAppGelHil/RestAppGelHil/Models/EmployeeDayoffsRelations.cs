using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RestAppGelHil.Models
{
    public class EmployeeDayoffsRelations
    {
        public int ID { get; set; }
        public int employee_ID { get; set; }
        public int dayoffs_ID { get; set; }
    }
}