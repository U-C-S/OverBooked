using System.ComponentModel.DataAnnotations;
using OverbookedAPI.Data.Models;

namespace OverbookedAPI.Data.Models;

public class Collection {
  [Key]
  public int Id { get; set; }
  public string Name { get; set; }
  public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
  public Profile profile { get; set; }
}

public class Bookmark
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Url { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public Profile profile { get; set; }
    public Collection collection { get; set; }
}