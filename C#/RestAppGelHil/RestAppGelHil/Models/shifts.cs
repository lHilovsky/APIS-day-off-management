using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestAppGelHil.Models
{
    public class shifts
    {
        public int ID { get; set; }
        public DateTime work_date { get; set; }
        public decimal start_work_hour { get; set; }
        public decimal end_work_hour { get; set; }
    }
}