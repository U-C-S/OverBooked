using System.Diagnostics;

namespace OverbookedAPI.Middleware;


public class AuthCheckMiddleware : IMiddleware
{

    public AuthCheckMiddleware() { }

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        var authHeader = context.Request.Headers["Authorization"];

        if (authHeader.Count > 0)
        {
            var authHeaderValue = authHeader.FirstOrDefault();
            context.Items["UserId"] = authHeaderValue;
            Debug.WriteLine(authHeaderValue);
            await next(context);
        }
        else
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsJsonAsync(new { message = "Unauthorized" });
        }

    }
}
