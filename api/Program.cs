using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using OverbookedAPI.Data;
using Util;

var builder = WebApplication.CreateBuilder(args);

{
    var services = builder.Services;

    services.AddDbContext<OverbookedDbContext>(opts =>
    {
        var connectionString = builder.Configuration.GetValue<string>("DatabaseConnectionString");
        if (connectionString == null)
        {
            throw new Exception("No Connection String");
        }
        else
        {
            opts.UseNpgsql(connectionString);
        }
    });

    // services.AddTransient<JwtAuthMiddleware>();
    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(Jwt.Config());
    services.AddControllers();
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen();
}

var app = builder.Build();

{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
        app.UseDeveloperExceptionPage();
    }

    using (var scope = app.Services.CreateScope())
    {
        var services = scope.ServiceProvider;
        var context = services.GetRequiredService<OverbookedDbContext>();
        context.Database.EnsureCreated();
    }

    // app.UseMiddleware<JwtAuthMiddleware>();

    app.UseHttpsRedirection();

    app.UseAuthentication();

    app.UseAuthorization();

    app.MapControllers();
}

app.Run();
