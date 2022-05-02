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
            var authHeaderValueCharArray = authHeader.FirstOrDefault().ToCharArray();
            var authHeaderValueString = new string(authHeaderValueCharArray, 0, authHeaderValueCharArray.Length);
            var userId = int.Parse(authHeaderValueString);
            context.Items["UserId"] = userId;
            Debug.WriteLine(userId);
        }
        else
        {
            context.Response.StatusCode = 401;
        }

        await next(context);
    }
}
