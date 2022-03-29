using System;
using System.Collections.Generic;

namespace OverbookedAPI.Models;

public class Profile
{
    public int Id { get; set; }
    public User User { get; set; }
    public string Name { get; set; }
    public DateTime CreatedAt { get; set; }

    public ICollection<Link>? QuickAdd { get; set; }
}
