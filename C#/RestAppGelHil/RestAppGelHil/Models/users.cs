using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestAppGelHil.Models
{
    public class users
    {
        public int ID { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public bool isManager { get; set; }
        public int change_request { get; set; }
        public int shift_change { get; set; }
        public int employee_ID { get; set; }
    }
}