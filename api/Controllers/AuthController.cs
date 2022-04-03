using Microsoft.AspNetCore.Mvc;
using OverbookedAPI.Data;

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
    public ActionResult Login()
    {
        return Ok();
    }

    [HttpPost("github")]
    public ActionResult GithubAuth()
    {
        return BadRequest();
    }
}
