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
    public class employeesController : ApiController
    {
        private RestAppGelHilContext db = new RestAppGelHilContext();

        //GET: api/employees
        public IQueryable<employees> Getemployees()
        {
            return db.employees;
        }

        //GET: api/employees/5
        [ResponseType(typeof(employees))]
        public IHttpActionResult Getemployees(int id)
        {
            employees employees = db.employees.Find(id);
            if (employees == null)
            {
                return NotFound();
            }

            return Ok(employees);
        }

        // PUT: api/employees/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putemployees(int id, employees employees)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employees.ID)
            {
                return BadRequest();
            }

            db.Entry(employees).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!employeesExists(id))
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

        // POST: api/employees
        [ResponseType(typeof(employees))]
        public IHttpActionResult Postemployees(employees employees)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.employees.Add(employees);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = employees.ID }, employees);
        }

        // DELETE: api/employees/5
        [ResponseType(typeof(employees))]
        public IHttpActionResult Deleteemployees(int id)
        {
            employees employees = db.employees.Find(id);
            if (employees == null)
            {
                return NotFound();
            }

            db.employees.Remove(employees);
            db.SaveChanges();

            return Ok(employees);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool employeesExists(int id)
        {
            return db.employees.Count(e => e.ID == id) > 0;
        }
    }
}