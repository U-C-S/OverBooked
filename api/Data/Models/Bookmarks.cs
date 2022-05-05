public class Bookmark
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string Url { get; set; }
  public DateTime CreatedAt { get; set; }

  public int ParentDirId { get; set; }
  public Directory ParentDir { get; set; }
}

public class Directory
{
  public Directory(string name) {
    Name = name;
    Id = new Random().Next();
    CreatedAt = DateTime.UtcNow;
  }
  
  public int Id { get; set; }
  public string Name { get; set; }
  public DateTime CreatedAt { get; set; }

  public List<Directory>? SubDirectories { get; set; }
  public List<Bookmark>? Bookmarks { get; set; }
  // public int ParentId { get; set; }
  // public Directory? ParentDir { get; set; }
}

// Seems not possible to have a array of foriegn keys
// Try creating a new tables for folders in folders and bookmarks in folders

public class DirInDir
{
  public int Id { get; set; }
  public int ParentDirId { get; set; }
  public Directory ParentDir { get; set; }
  public int ChildDirId { get; set; }
  public Directory ChildDir { get; set; }
}

// public class BookmarkInDir
// {
//   public int Id { get; set; }
//   public int BookmarkId { get; set; }
//   public Bookmark Bookmark { get; set; }
//   public Directory ParentDir { get; set; }
// }