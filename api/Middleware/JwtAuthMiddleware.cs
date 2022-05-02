using OverbookedAPI.Data;
using System.Diagnostics;
using Util;

namespace OverbookedAPI.Middleware;

public class JwtAuthMiddleware : IMiddleware
{
    private readonly OverbookedDbContext dbContext;

    public JwtAuthMiddleware(OverbookedDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        var authHeader = context.Request.Headers["Authorization"];
        bool invalid = true;

        if (authHeader.Count > 0)
        {
            var authHeaderValue = authHeader.FirstOrDefault();
            var currentUser = dbContext.Profiles.Find(int.Parse(Jwt.decode(authHeaderValue).ToString()));
            Debug.WriteLine(authHeaderValue, currentUser);
            if (currentUser != null)
            {
                invalid = false;
                context.Items["currentUser"] = currentUser;
            }
        }

        if (!invalid)
            await next(context);
        else
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsJsonAsync(new { message = "Unauthorized" });
        }
    }
}
