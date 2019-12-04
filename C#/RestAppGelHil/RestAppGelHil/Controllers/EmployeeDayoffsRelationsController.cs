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
    public class EmployeeDayoffsRelationsController : ApiController
    {
        private RestAppGelHilContext db = new RestAppGelHilContext();

        // GET: api/EmployeeDayoffsRelations
        public IQueryable<EmployeeDayoffsRelations> GetEmployeeDayoffRelations()
        {
            return db.EmployeeDayoffRelations;
        }

        // GET: api/EmployeeDayoffsRelations/5
        [ResponseType(typeof(EmployeeDayoffsRelations))]
        public IHttpActionResult GetEmployeeDayoffsRelations(int id)
        {
            EmployeeDayoffsRelations employeeDayoffsRelations = db.EmployeeDayoffRelations.Find(id);
            if (employeeDayoffsRelations == null)
            {
                return NotFound();
            }

            return Ok(employeeDayoffsRelations);
        }

        // PUT: api/EmployeeDayoffsRelations/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployeeDayoffsRelations(int id, EmployeeDayoffsRelations employeeDayoffsRelations)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employeeDayoffsRelations.ID)
            {
                return BadRequest();
            }

            db.Entry(employeeDayoffsRelations).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeDayoffsRelationsExists(id))
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

        // POST: api/EmployeeDayoffsRelations
        [ResponseType(typeof(EmployeeDayoffsRelations))]
        public IHttpActionResult PostEmployeeDayoffsRelations(EmployeeDayoffsRelations employeeDayoffsRelations)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EmployeeDayoffRelations.Add(employeeDayoffsRelations);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = employeeDayoffsRelations.ID }, employeeDayoffsRelations);
        }

        // DELETE: api/EmployeeDayoffsRelations/5
        [ResponseType(typeof(EmployeeDayoffsRelations))]
        public IHttpActionResult DeleteEmployeeDayoffsRelations(int id)
        {
            EmployeeDayoffsRelations employeeDayoffsRelations = db.EmployeeDayoffRelations.Find(id);
            if (employeeDayoffsRelations == null)
            {
                return NotFound();
            }

            db.EmployeeDayoffRelations.Remove(employeeDayoffsRelations);
            db.SaveChanges();

            return Ok(employeeDayoffsRelations);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeDayoffsRelationsExists(int id)
        {
            return db.EmployeeDayoffRelations.Count(e => e.ID == id) > 0;
        }
    }
}