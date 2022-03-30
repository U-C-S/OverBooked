using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OverbookedAPI.Data;
using OverbookedAPI.Models;

namespace OverbookedAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LinksController : ControllerBase
    {
        private readonly OverbookedDbContext _context;

        public LinksController(OverbookedDbContext context)
        {
            _context = context;
        }

        // GET: api/Links
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Link>>> GetLinks()
        {
            return await _context.Links.ToListAsync();
        }

        // GET: api/Links/5
        // [HttpGet("{id}")]
        // public async Task<ActionResult<Link>> GetLink(int id)
        // {
        //     var link = await _context.Links.FindAsync(id);

        //     if (link == null)
        //     {
        //         return NotFound();
        //     }

        //     return link;
        // }

        // PUT: api/Links/5
        // [HttpPut("{id}")]
        // public async Task<IActionResult> PutLink(int id, Link link)
        // {
        //     if (id != link.Id)
        //     {
        //         return BadRequest();
        //     }

        //     _context.Entry(link).State = EntityState.Modified;

        //     try
        //     {
        //         await _context.SaveChangesAsync();
        //     }
        //     catch (DbUpdateConcurrencyException)
        //     {
        //         if (!LinkExists(id))
        //         {
        //             return NotFound();
        //         }
        //         else
        //         {
        //             throw;
        //         }
        //     }

        //     return NoContent();
        // }

        // POST: api/Links
        [HttpPost]
        public async Task<ActionResult<Link>> PostLink(Link link)
        {
            _context.Links.Add(link);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLink", new { id = link.Id }, link);
        }

        // DELETE: api/Links/5
        // [HttpDelete("{id}")]
        // public async Task<IActionResult> DeleteLink(int id)
        // {
        //     var link = await _context.Links.FindAsync(id);
        //     if (link == null)
        //     {
        //         return NotFound();
        //     }

        //     _context.Links.Remove(link);
        //     await _context.SaveChangesAsync();

        //     return NoContent();
        // }

        // private bool LinkExists(int id)
        // {
        //     return _context.Links.Any(e => e.Id == id);
        // }
    }
}
