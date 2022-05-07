using System.ComponentModel.DataAnnotations;

namespace OverbookedAPI.Data.Models;

public class Profile
{
    public Profile() {
        Name = String.Empty;
        Email = String.Empty;
        Password = String.Empty;
        RootDir = new();
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

    [DataType(DataType.DateTime)]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public int? RootDirId { get; set; }
    public Directory RootDir { get; set; }

    // public ICollection<Link>? QuickAdd { get; set; }

    // public int UserId { get; set; }

    // public User User { get; set; }
}
