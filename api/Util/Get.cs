using OverbookedAPI.Data;
using OverbookedAPI.Data.Models;

namespace Util;

public static class Get
{
    public static Profile? Profile(HttpContext context, OverbookedDbContext dbContext)
    {
        var userIdField = context.User.Claims.FirstOrDefault(c => c.Type == "userId");
        if (userIdField == null)
        {
            return null;
        }
        else
        {
            var id = int.Parse(userIdField.Value);
            return dbContext.Profiles.Find(id);
        }
    }
}