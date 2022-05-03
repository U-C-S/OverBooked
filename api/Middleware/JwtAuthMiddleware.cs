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
        if (context.Request.Path.Value.Contains("/auth/"))
        {
            await next(context);
            return;
        }

        try
        {
            var authHeaderValue = authHeader.FirstOrDefault();
            var decodeId = Jwt.Decode(authHeaderValue)?.ToString();
            if (!string.IsNullOrEmpty(decodeId))
            {
                var Id = int.Parse(decodeId);
                var currentUser = dbContext.Profiles.Find(Id);
                Debug.WriteLine(authHeaderValue, currentUser);
                if (currentUser != null)
                {
                    context.Items["currentUser"] = currentUser;
                    await next(context);
                }

            }
            else
            {
                throw new Exception("Invalid token");
            }

        }
        catch (Exception)
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsJsonAsync(new { message = "Unauthorized" });
        }

    }
}
