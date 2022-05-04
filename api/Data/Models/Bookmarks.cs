public class Bookmark
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string Url { get; set; }
  public DateTime CreatedAt { get; set; }

  public Directory ParentDir { get; set; }
}

public class Directory
{
  public int Id { get; set; }
  public string Name { get; set; }
  public DateTime CreatedAt { get; set; }

  public virtual ICollection<Directory>? SubDirectories { get; set; }
  public virtual ICollection<Bookmark>? Bookmarks { get; set; }
  public int ParentId { get; set; }
  public Directory? ParentDir { get; set; }
}

// Seems not possible to have a array of foriegn keys
// Try creating a new tables for folders in folders and bookmarks in folders
