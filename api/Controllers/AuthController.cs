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

    public AuthController(OverbookedDbContext context)
    {
        _context = context;
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
            return Ok(Jwt.Encode(x.ToString()));
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
        await _context.SaveChangesAsync();
        return Ok(Jwt.Encode(x.Id.ToString()));
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