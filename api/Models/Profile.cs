using System.ComponentModel.DataAnnotations;

namespace OverbookedAPI.Models;

public class Profile
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; }

    public DateTime CreatedAt { get; set; }

    public ICollection<Link>? QuickAdd { get; set; }
}
