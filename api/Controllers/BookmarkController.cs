using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OverbookedAPI.Data;
using OverbookedAPI.Data.Models;

namespace OverbookedAPI.Controllers
{
    [Authorize]
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
        public async Task<ActionResult<Directory>> CreateDir([FromQuery] string dir)
        {
            var dirx = new Directory(dir);
            _context.Directoriex.Add(dirx);
            await _context.SaveChangesAsync();

            return Ok("Directory created");
        }

        [HttpGet("getdirs")]
        public async Task<ActionResult<Directory>> GetDirs()
        {
            var dir = await _context.Directoriex.ToListAsync();
            return Ok(dir);
        }

        [HttpPost("createbookmark")]
        public async Task<ActionResult<Bookmark>> CreateBookmark([FromQuery] string name, [FromQuery] string url, [FromQuery] string? dir)
        {
            var dirx = await _context.Directoriex.FirstOrDefaultAsync(x => x.Name == dir); //create a directory to store bookmarks quickly (name - Faststore, its a premitive directory)
            if (dirx == null)
            {
                return NotFound("Directory not found");
            }
            var bookmark = new Bookmark()
            {
                Name = name,
                Url = url,
                ParentDir = dirx
            };
            _context.Bookmarkx.Add(bookmark);
            await _context.SaveChangesAsync();
            return Ok("Bookmark created");
        }
    }
}
