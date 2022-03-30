using System.ComponentModel.DataAnnotations;

namespace OverbookedAPI.Models;

public class Link
{
  public Guid Id { get; init; }

  [Required]
  public string Name { get; set; }

  [Required]
  public string Url { get; set; }

  public DateTime CreatedAt { get; init; }

  public Source Source = Source.Unknown;
}

public enum Source
{
  Browser,
  External,
  Unknown
}