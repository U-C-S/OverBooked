using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OverbookedAPI.Data;
using OverbookedAPI.Data.Models;

namespace OverbookedAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarkController : ControllerBase
    {
        private readonly OverbookedDbContext _context;

        public BookmarkController(OverbookedDbContext context)
        {
            _context = context;
        }


        [HttpPost("createdir")]
        public async Task<ActionResult<Directory>> CreateDir([FromQuery] string dir )
        {
            var dirx = new Directory(dir);
            _context.Directoriex.Add(dirx);
            await _context.SaveChangesAsync();

            return Ok("Directory created");
        }

        [HttpGet("getdirs")]
        public async Task<ActionResult<Directory>> GetDirs()
        {
            var dir = _context.Directoriex.ToList();
            return Ok(dir);
        }
    }
}
