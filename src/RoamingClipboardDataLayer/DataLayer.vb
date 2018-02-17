Imports System.Diagnostics.Tracing
Imports Microsoft.EntityFrameworkCore

Public Class RoamingClipboardContext
    Inherits DbContext

    Public Property Categories As DbSet(Of Category)
    Public Property Links As DbSet(Of Link)

    Protected Overrides Sub OnConfiguring(optionsBuilder As DbContextOptionsBuilder)
        'With other NuGets, we can use SqLite at this point.
        optionsBuilder.UseSqlServer("Server=(localdb)\mssqllocaldb;Database=RoamingClipboard;Trusted_Connection=True;")
    End Sub

    'Should we need the SQL Server to assign default values - here is how to do it.
    'Protected Overrides Sub OnModelCreating(modelBuilder As ModelBuilder)
    '    modelBuilder.Entity(Of Category).
    '        Property(Function(catItem) catItem.DateLastUsed).
    '        HasDefaultValueSql("getdate()") ' For a const, use just UseDefaultValue.
    'End Sub

End Class
