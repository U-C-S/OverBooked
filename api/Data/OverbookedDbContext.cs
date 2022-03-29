using Microsoft.EntityFrameworkCore;
using OverbookedAPI.Models;

namespace OverbookedAPI.Data;

public class OverbookedDbContext : DbContext
{
    public OverbookedDbContext(DbContextOptions<OverbookedDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Link> Links { get; set; }
    public DbSet<Profile> Profiles { get; set; }

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //    optionsBuilder.UseNpgsql("Host=my_host;Database=my_db;Username=my_user;Password=my_pw");
    //}
}


