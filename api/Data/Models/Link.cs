using System.ComponentModel.DataAnnotations;

namespace OverbookedAPI.Data.Models;

public class Link
{
    [Key]
    public Guid Id { get; init; }

    [Required]
    public string? Name { get; set; }

    [Required]
    public string? Url { get; set; }

    public DateTime CreatedAt { get; init; }

    public Source Source = Source.Unknown;
}

public enum Source
{
    Browser,
    External,
    Unknown
}