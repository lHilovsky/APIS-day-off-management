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
    public class dayoffsController : ApiController
    {
        private RestAppGelHilContext db = new RestAppGelHilContext();

        // GET: api/dayoffs
        public IQueryable<dayoffs> Getdayoffs()
        {
            return db.dayoffs;
        }
        // GET: api/dayoffs/5
        [ResponseType(typeof(dayoffs))]
        public IHttpActionResult Getdayoffs(int id)
        {
            dayoffs dayoffs = db.dayoffs.Find(id);
            if (dayoffs == null)
            {
                return NotFound();
            }

            return Ok(dayoffs);
        }

        // GET: dayoffs/pdfAll/5
        [ResponseType(typeof(employees))]
        public IHttpActionResult GetDayoffsPDF(int id)
        {
            var dayoffs = db.employees.SqlQuery("SELECT employees.ID, dayoffs.reason AS email, shifts.work_date AS date_of_birth, employees.name, employees.surname, employees.gender, employees.date_of_hire FROM users JOIN employees ON employees.ID = users.employee_ID JOIN EmployeeDayoffsRelations ON employees.ID = EmployeeDayoffsRelations.employee_ID JOIN dayoffs ON EmployeeDayoffsRelations.dayoffs_ID = dayoffs.ID JOIN shifts ON dayoffs.shifts_ID = shifts.ID WHERE users.ID = " + id).ToList();
            return Ok(dayoffs);
        }

        // GET: dayoffs/pdfAll/5/2019-12-05
        [ResponseType(typeof(employees))]
        public IHttpActionResult GetDayoffsPDF(int id, DateTime entryDate)
        {
            System.Diagnostics.Debug.WriteLine("SELECT e.ID, d.reason AS email, s.work_date AS date_of_birth, e.name, e.surname, e.gender, e.date_of_hire FROM users u JOIN employees e ON e.ID = u.employee_ID JOIN EmployeeDayoffsRelations ed ON e.ID = ed.employee_ID JOIN dayoffs d ON ed.dayoffs_ID = d.ID JOIN shifts s ON d.shifts_ID = s.ID WHERE u.ID = " + id + " AND YEAR(s.work_date) = " + entryDate.ToString("yyyy") + " AND MONTH(s.work_date) = " + entryDate.ToString("MM"));
            var dayoffs = db.employees.SqlQuery("SELECT d.ID, d.reason AS email, s.work_date AS date_of_birth, e.name, e.surname, e.gender, e.date_of_hire FROM users u JOIN employees e ON e.ID = u.employee_ID JOIN EmployeeDayoffsRelations ed ON e.ID = ed.employee_ID JOIN dayoffs d ON ed.dayoffs_ID = d.ID JOIN shifts s ON d.shifts_ID = s.ID WHERE u.ID = " + id + " AND YEAR(s.work_date) = " + entryDate.ToString("yyyy") + " AND MONTH(s.work_date) = " + entryDate.ToString("MM") + "ORDER BY s.work_date").ToList();
            return Ok(dayoffs);
        }

        // PUT: api/dayoffs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putdayoffs(int id, dayoffs dayoffs)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != dayoffs.ID)
            {
                return BadRequest();
            }

            db.Entry(dayoffs).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!dayoffsExists(id))
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

        // POST: api/dayoffs
        [ResponseType(typeof(dayoffs))]
        public IHttpActionResult Postdayoffs(dayoffs dayoffs)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.dayoffs.Add(dayoffs);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = dayoffs.ID }, dayoffs);
        }

        // DELETE: api/dayoffs/5
        [ResponseType(typeof(dayoffs))]
        public IHttpActionResult Deletedayoffs(int id)
        {
            dayoffs dayoffs = db.dayoffs.Find(id);
            if (dayoffs == null)
            {
                return NotFound();
            }

            db.dayoffs.Remove(dayoffs);
            db.SaveChanges();

            return Ok(dayoffs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool dayoffsExists(int id)
        {
            return db.dayoffs.Count(e => e.ID == id) > 0;
        }
    }
}