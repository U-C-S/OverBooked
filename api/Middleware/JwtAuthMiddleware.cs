using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using OverbookedAPI.Data;
using OverbookedAPI.Models;
using Util;

namespace OverbookedAPI.Middleware;

public class JwtAuthMiddleware : IMiddleware
{
  private readonly OverbookedDbContext dbContext;

  public JwtAuthMiddleware(OverbookedDbContext dbContext) {
        this.dbContext = dbContext;
     }

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        var authHeader = context.Request.Headers["Authorization"];
        bool invalid = true;

        if (authHeader.Count > 0)
        {
            var authHeaderValue = authHeader.FirstOrDefault();
            var currentUser = dbContext.Users.Find(Jwt.decode(authHeaderValue));
            Debug.WriteLine(authHeaderValue, currentUser);
            if (currentUser != null)
            {
                invalid = false;
                context.Items["currentUser"] = currentUser;
            }
        }

        if(invalid)
            await next(context);
        else
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsJsonAsync(new { message = "Unauthorized" });
        }
    }
}
