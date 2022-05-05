using System.ComponentModel.DataAnnotations;

namespace OverbookedAPI.Data.Models;

public class Profile
{
    public Profile()
    {
        Id = new Random().Next();
        CreatedAt = DateTime.UtcNow;
    }

    [Key]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }

    public DateTime CreatedAt { get; set; }

    public int? RootDirId { get; set; }
    public Directory RootDir { get; set; }

    // public ICollection<Link>? QuickAdd { get; set; }

    // public int UserId { get; set; }

    // public User User { get; set; }
}
