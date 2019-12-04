using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestAppGelHil.Models
{
    public class dayoffs
    {
        public int ID { get; set; }
        public string reason { get; set; }
        public string additional_description { get; set; }
        public bool confirmation { get; set; }
        public DateTime start_date { get; set; }
        public DateTime end_date { get; set; }
        public int shifts_ID { get; set; }
    }
}