using Microsoft.AspNetCore.Mvc;
using OverbookedAPI.Data;
using OverbookedAPI.Models;

namespace OverbookedAPI.Controllers;


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
        var x = _context.Users;
        var y = from a in x
                where logindata.Email == a.Email && logindata.Password == a.Password
                select a;
        if (y.Count() == 0)
        {
            return NotFound();
        }
        else
        {
            return Ok(y.First());
        }
    }

    [HttpPost("signup")]
    public async Task<ActionResult> Signup([FromBody] SignUpDTO signupdata)
    {
        User x = new User()
        {
            Email = signupdata.Email,
            Password = signupdata.Password,
            Name = signupdata.Name,
            Id = new(),
            // WHERE PROFILE
        };

        _context.Users.Add(x);
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetUser", new { id = x.Id }, x);
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