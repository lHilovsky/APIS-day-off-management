using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RestAppGelHil.Models
{
    public class RestAppGelHilContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public RestAppGelHilContext() : base("name=RestAppGelHilContext")
        {
        }

        public System.Data.Entity.DbSet<RestAppGelHil.Models.employees> employees { get; set; }

        public System.Data.Entity.DbSet<RestAppGelHil.Models.dayoffs> dayoffs { get; set; }

        public System.Data.Entity.DbSet<RestAppGelHil.Models.EmployeeDayoffsRelations> EmployeeDayoffRelations { get; set; }

        public System.Data.Entity.DbSet<RestAppGelHil.Models.EmployeeShiftsRelations> EmployeeShiftsRelations { get; set; }

        public System.Data.Entity.DbSet<RestAppGelHil.Models.shifts> shifts { get; set; }

        public System.Data.Entity.DbSet<RestAppGelHil.Models.users> users { get; set; }
    }
}
