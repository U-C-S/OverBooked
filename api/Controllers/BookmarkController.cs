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

        // create a collection
        [HttpPost("createcollection")]
        public ActionResult<Collection> CreateCollection(string name)
        {
            var user = Util.Get.Profile(HttpContext, _context);
            if (user == null)
            {
                return BadRequest("User not found");
            }
            var collection = new Collection
            {
                Name = name,
                profile = user
            };
            _context.Collections.Add(collection);
            _context.SaveChanges();
            return collection;
        }

        // create a bookmark
        [HttpPost("createbookmark")]
        public async Task<ActionResult<Bookmark>> CreateBookmark(string name, string url, string? collection)
        {
            var profile = Util.Get.Profile(HttpContext, _context);
            if (profile == null)
            {
                return BadRequest("User or collection not found");
            }
            Collection? coll;
            if (collection == null)
            {
                coll = await _context.Collections.FirstAsync(c => c.Name == "Uncategorized" && c.profile.Id == profile.Id);
            }
            else{
                coll = await _context.Collections.FirstAsync(c => c.Name == collection && c.profile.Id == profile.Id);
                if (coll == null)
                    coll = await _context.Collections.FirstAsync(c => c.Name == "Uncategorized" && c.profile.Id == profile.Id);
            }
            var bookmark = new Bookmark
            {
                Name = name,
                Url = url,
                profile = profile,
                collection = coll
            };
            _context.Bookmarks.Add(bookmark);
            _context.SaveChanges();
            return bookmark;
        }

        // get all collections
        [HttpGet("getcollections")]
        public ActionResult<IEnumerable<Collection>> GetCollections()
        {
            var user = Util.Get.Profile(HttpContext, _context);
            if (user == null)
            {
                return BadRequest("User not found");
            }
            return _context.Collections.Where(c => c.profile.Id == user.Id).ToList();
        }

        // [HttpPost("createdir")]
        // public async Task<ActionResult<Directory>> CreateDir([FromQuery] string dir)
        // {
        //     var dirx = new Directory(dir);
        //     _context.Directoriex.Add(dirx);
        //     await _context.SaveChangesAsync();

        //     return Ok("Directory created");
        // }

        // [HttpGet("getdirs")]
        // public async Task<ActionResult<Directory>> GetDirs()
        // {
        //     var dir = await _context.Directoriex.ToListAsync();
        //     return Ok(dir);
        // }

        // [HttpGet("getcurrentdirs")]
        // public ActionResult<IQueryable<Directory>> GetCurrentDirs([FromQuery] string currentdir)
        // {
        //     var currentUser = Util.Get.Profile(HttpContext, _context)?.Id;
        //     var directories = _context.DirDirChild
        //                             .Where(d => d.ParentDir.Name == currentdir && d.ParentDir.OwnerId == currentUser)
        //                             .Select(d => d.ChildDir);
        //     return Ok(directories);
        // }
    }
}
