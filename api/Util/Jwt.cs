using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Util;

public static class Jwt
{
    private static readonly string ISSUER = "overbooked";
    private static readonly int EXPIRE_DAYS = 14;

    public static Object? Decode(string? token, string SECRET)
    {
        var validatedResult = new JwtSecurityTokenHandler()
            .ValidateTokenAsync(token, TokenValidation(SECRET))
            .Result;

        if (validatedResult.IsValid)
            return validatedResult.Claims["userId"];
        else
            return null;
    }

    private static TokenValidationParameters TokenValidation(string SECRET)
    {
        var key = Encoding.UTF8.GetBytes(SECRET);

        return new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            ValidateIssuer = true,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidIssuer = ISSUER,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidAlgorithms = new[] { SecurityAlgorithms.HmacSha256 },
            ClockSkew = TimeSpan.FromSeconds(100),
        };
    }

    public static string Encode(string userId, string SECRET)
    {
        var key = Encoding.UTF8.GetBytes(SECRET);

        var claims = new[] {
            new Claim("userId", userId),
            new Claim("iat", DateTime.UtcNow.ToString()),
        };

        var securityToken = new JwtSecurityToken(
            ISSUER,
            null,
            claims,
            null,
            DateTime.UtcNow.AddDays(EXPIRE_DAYS),
            new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
        );

        return new JwtSecurityTokenHandler().WriteToken(securityToken);
    }

    public static Action<JwtBearerOptions> Config(string SECRET)
    {
        return options => options.TokenValidationParameters = TokenValidation(SECRET);
    }
}