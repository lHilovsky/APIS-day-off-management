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
    public class shiftsController : ApiController
    {
        private RestAppGelHilContext db = new RestAppGelHilContext();

        // GET: api/shifts
        public IQueryable<shifts> Getshifts()
        {
            return db.shifts;
        }

        // GET: api/shifts/5
        [ResponseType(typeof(shifts))]
        public IHttpActionResult Getshifts(int id)
        {
            shifts shifts = db.shifts.Find(id);
            if (shifts == null)
            {
                return NotFound();
            }

            return Ok(shifts);
        }

        // PUT: api/shifts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putshifts(int id, shifts shifts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != shifts.ID)
            {
                return BadRequest();
            }

            db.Entry(shifts).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!shiftsExists(id))
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

        // POST: api/shifts
        [ResponseType(typeof(shifts))]
        public IHttpActionResult Postshifts(shifts shifts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.shifts.Add(shifts);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = shifts.ID }, shifts);
        }

        // DELETE: api/shifts/5
        [ResponseType(typeof(shifts))]
        public IHttpActionResult Deleteshifts(int id)
        {
            shifts shifts = db.shifts.Find(id);
            if (shifts == null)
            {
                return NotFound();
            }

            db.shifts.Remove(shifts);
            db.SaveChanges();

            return Ok(shifts);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool shiftsExists(int id)
        {
            return db.shifts.Count(e => e.ID == id) > 0;
        }
    }
}