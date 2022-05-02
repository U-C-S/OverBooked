using System.ComponentModel.DataAnnotations;

namespace OverbookedAPI.Models;

// Use Profile for now, instead of User.
public class User
{
    [Key]
    public int UserId { get; init; }

    /*
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public Profile Profile { get; set; }
    */
}