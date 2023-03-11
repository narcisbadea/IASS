namespace IASS.DAL.Entities;
public class Page<T>
{
    public int TotalCount { get; set; }
    public List<T> Items { get; set; } = new List<T>();
}

