using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OverbookedAPI.Data;

namespace OverbookedAPI.Controllers;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class ProfilesController : ControllerBase
{
    private readonly OverbookedDbContext _context;

    public ProfilesController(OverbookedDbContext context)
    {
        _context = context;
    }

    [HttpGet("getprofilename")]
    public ActionResult<String> GetProfileName()
    {
        var lol = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "userId").Value;
        var user = _context.Profiles.Find(int.Parse(lol));

        return Ok(user.Name);
    }

    /*
    // GET: api/Profiles
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Profile>>> GetProfiles()
    {
        return await _context.Profiles.ToListAsync();
    }

    // GET: api/Profiles/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Profile>> GetProfile(int id)
    {
        var profile = await _context.Profiles.FindAsync(id);

        if (profile == null)
        {
            return NotFound();
        }

        return profile;
    }

    // PUT: api/Profiles/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutProfile(Guid id, Profile profile)
    {
        if (id != profile.Id)
        {
            return BadRequest();
        }

        _context.Entry(profile).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ProfileExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/Profiles
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Profile>> PostProfile(Profile profile)
    {
        _context.Profiles.Add(profile);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetProfile", new { id = profile.Id }, profile);
    }

    // DELETE: api/Profiles/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProfile(Guid id)
    {
        var profile = await _context.Profiles.FindAsync(id);
        if (profile == null)
        {
            return NotFound();
        }

        _context.Profiles.Remove(profile);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ProfileExists(Guid id)
    {
        return _context.Profiles.Any(e => e.Id == id);
    }

    */
}
