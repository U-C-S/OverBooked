using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace Util;

public static class Jwt {
      public static Object? decode(string? token)
    {
        var key = Encoding.ASCII.GetBytes("superman");

        var validatedResult = new JwtSecurityTokenHandler().ValidateTokenAsync(token, new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false,
            // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
            ClockSkew = TimeSpan.FromSeconds(100)
        }).Result;

        if (validatedResult.IsValid) 
          return validatedResult.Claims["userId"];
        else
          return null;
    }

    public static string encode(string userId)
    {
        var key = Encoding.ASCII.GetBytes("superman");

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Claims = new Dictionary<string,object>() {
				{ "userId", userId }
			},
            Expires = DateTime.UtcNow.AddDays(14),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var tokenHandler = new JwtSecurityTokenHandler();
		var l = tokenHandler.CreateToken(tokenDescriptor);
        var token = tokenHandler.WriteToken(l);
        return token;
    }
}