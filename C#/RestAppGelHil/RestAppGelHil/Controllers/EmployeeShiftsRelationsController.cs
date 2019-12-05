using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using RestAppGelHil.Models;

namespace RestAppGelHil.Controllers
{
    public class EmployeeShiftsRelationsController : ApiController
    {
        private RestAppGelHilContext db = new RestAppGelHilContext();

        // GET: api/EmployeeShiftsRelations
        public IQueryable<EmployeeShiftsRelations> GetEmployeeShiftsRelations()
        {
            return db.EmployeeShiftsRelations;
        }

        // GET: EmployeeShiftsRelations/5
        //[ResponseType(typeof(EmployeeShiftsRelations))]
        //public IHttpActionResult GetByShiftID(int shift_ID)
        //{
        //    //shifts shifts = db.shifts.SqlQuery(String.Format("Select * from dbo.shifts where work_date='{0}'"), entryDate.ToString("dd-MM-yyyy")).FirstOrDefault<shifts>();
        //    shifts shifts = db.shifts.SqlQuery("Select * from dbo.shifts where work_date='" + entryDate.ToString("dd-MM-yyyy") + "'").FirstOrDefault<shifts>();

        //    return Ok(shifts);
        //}

        // GET: api/EmployeeShiftsRelations/5
        [ResponseType(typeof(EmployeeShiftsRelations))]
        public IHttpActionResult GetEmployeeShiftsRelations(int id)
        {
            EmployeeShiftsRelations employeeShiftsRelations = db.EmployeeShiftsRelations.Find(id);
            if (employeeShiftsRelations == null)
            {
                return NotFound();
            }

            return Ok(employeeShiftsRelations);
        }

        // PUT: api/EmployeeShiftsRelations/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployeeShiftsRelations(int id, EmployeeShiftsRelations employeeShiftsRelations)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employeeShiftsRelations.ID)
            {
                return BadRequest();
            }

            db.Entry(employeeShiftsRelations).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeShiftsRelationsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/EmployeeShiftsRelations
        [ResponseType(typeof(EmployeeShiftsRelations))]
        public IHttpActionResult PostEmployeeShiftsRelations(EmployeeShiftsRelations employeeShiftsRelations)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EmployeeShiftsRelations.Add(employeeShiftsRelations);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = employeeShiftsRelations.ID }, employeeShiftsRelations);
        }

        // DELETE: api/EmployeeShiftsRelations/5
        [ResponseType(typeof(EmployeeShiftsRelations))]
        public IHttpActionResult DeleteEmployeeShiftsRelations(int id)
        {
            EmployeeShiftsRelations employeeShiftsRelations = db.EmployeeShiftsRelations.Find(id);
            if (employeeShiftsRelations == null)
            {
                return NotFound();
            }

            db.EmployeeShiftsRelations.Remove(employeeShiftsRelations);
            db.SaveChanges();

            return Ok(employeeShiftsRelations);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeShiftsRelationsExists(int id)
        {
            return db.EmployeeShiftsRelations.Count(e => e.ID == id) > 0;
        }
    }
}