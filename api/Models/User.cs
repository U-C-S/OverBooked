using System.ComponentModel.DataAnnotations;

namespace OverbookedAPI.Models;

public class User
{
    [Key]
    public Guid Id { get; init; }

    [Required]
    public string Name { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }

    [Required]
    public Profile Profile { get; set; }
}