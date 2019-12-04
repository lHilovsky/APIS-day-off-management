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