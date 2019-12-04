using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestAppGelHil.Models
{
    public class employees
    {
        public int ID { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public DateTime date_of_birth { get; set; }
        public bool gender { get; set; }
        public DateTime date_of_hire { get; set; }
        public string email { get; set; }
    }
}