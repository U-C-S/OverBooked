using Microsoft.EntityFrameworkCore;
using OverbookedAPI.Data.Models;

namespace OverbookedAPI.Data;

public class OverbookedDbContext : DbContext
{
    public OverbookedDbContext(DbContextOptions<OverbookedDbContext> options) : base(options) { }

    public DbSet<Profile> Profiles { get; set; }
    public DbSet<Bookmark> Bookmarkx { get; set; }
    public DbSet<Directory> Directoriex { get; set; }
    public DbSet<DirInDir> DirDirChild { get; set; }


    protected override void OnModelCreating(ModelBuilder rules){
        rules.Entity<Directory>();
    }
}


