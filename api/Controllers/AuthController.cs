using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OverbookedAPI.Data;
using OverbookedAPI.Data.Models;
using Util;

namespace OverbookedAPI.Controllers;

[AllowAnonymous]
[Route("[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly OverbookedDbContext _context;
    private readonly IConfiguration _config;

    public AuthController(OverbookedDbContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
    }

    [HttpPost("login")]
    public ActionResult Login([FromBody] LoginDTO logindata)
    {
        var profilelist = from profile in _context.Profiles
                          where logindata.Email == profile.Email && logindata.Password == profile.Password
                          select profile;
        if (profilelist.Count() == 0)
        {
            return NotFound();
        }
        else
        {
            var x = profilelist.First().Id;
            var jwt = Jwt.Encode(x.ToString(), _config.GetValue<string>("JWT_SECRET"));
            return Ok(jwt);
        }
    }

    [HttpPost("signup")]
    public async Task<ActionResult> Signup([FromBody] SignUpDTO signupdata)
    {
        Profile x = new()
        {
            Name = signupdata.Name,
            Email = signupdata.Email,
            Password = signupdata.Password,
        };
        _context.Profiles.Add(x);
        _context.Collections.Add(new Collection
        {
            Name = "Uncategorized",
            profile = x,
            Type = CollectionType.Uncategorized,
        });
        _context.Collections.Add(new Collection
        {
            Name = "Archive",
            profile = x,
            Type = CollectionType.Archive,
        });

        await _context.SaveChangesAsync();
        var jwt = Jwt.Encode(x.Id.ToString(),_config.GetValue<string>("JWT_SECRET"));
        return Ok(jwt);
    }

    [HttpPost("github")]
    public ActionResult GithubAuth()
    {
        return BadRequest();
    }

}

public class LoginDTO
{
    public string Email { get; set; }
    public string Password { get; set; }
}

public class SignUpDTO
{
    public string Email { get; set; }
    public string Password { get; set; }
    public string Name { get; set; }

}