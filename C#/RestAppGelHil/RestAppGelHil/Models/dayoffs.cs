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
        public bool confirmation { get; set; }
        public int shifts_ID { get; set; }
    }
}