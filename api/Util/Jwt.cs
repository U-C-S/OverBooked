using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Util;

public static class Jwt
{
    private static readonly string SECRET = "supermanwhymanthisisoutoflaneanditsgone";
    private static readonly string ISSUER = "overbooked";
    private static readonly int EXPIRE_DAYS = 14;

    public static Object? Decode(string? token)
    {
        var validatedResult = Validate(token);

        if (validatedResult.IsValid)
            return validatedResult.Claims["userId"];
        else
            return null;
    }

    private static TokenValidationResult Validate(string? token)
    {
        var key = Encoding.UTF8.GetBytes(SECRET);

        var validatedResult = new JwtSecurityTokenHandler().ValidateTokenAsync(token, new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            ValidateIssuer = true,
            ValidateAudience = false,
            ValidIssuer = ISSUER,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidAlgorithms = new[] { SecurityAlgorithms.HmacSha256 },
            ClockSkew = TimeSpan.FromSeconds(100),
        });

        return validatedResult.Result;
    }

    public static string Encode(string userId)
    {
        var key = Encoding.UTF8.GetBytes(SECRET);

        var claims = new[] {
            new Claim("userId", userId)
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
}