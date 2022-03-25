
namespace OverbookedAPI.Models;

public class Link
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string Url { get; set; }
  public DateTime CreatedAt { get; set; }
  public Source Source { get; set; }
}

public enum Source
{
  Browser,
  External,
  Unknown
}