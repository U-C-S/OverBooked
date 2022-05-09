using System.ComponentModel.DataAnnotations;
using OverbookedAPI.Data.Models;

public class Bookmark
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Url { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public int ParentDirId { get; set; }
    public Directory ParentDir { get; set; }
    public int OwnerId { get; set; }
    public Profile? Owner { get; set; }
}

public class Directory
{
    public Directory(string name)
    {
        Name = name;
        CreatedAt = DateTime.UtcNow;
    }
    public Directory()
    {
        CreatedAt = DateTime.UtcNow;
        IsRoot = true;
    }

    [Key]
    public int Id { get; set; }
    public string? Name { get; set; }
    public DateTime CreatedAt { get; set; }
    public bool IsRoot { get; set; } = false;

    // public List<Directory>? SubDirectories { get; set; }
    // public List<Bookmark>? Bookmarks { get; set; }
    public int OwnerId { get; set; }
    public Profile? Owner { get; set; }
}

// Seems not possible to have a array of foriegn keys
// Try creating a new tables for folders in folders and bookmarks in folders

public class DirInDir
{
    [Key]
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