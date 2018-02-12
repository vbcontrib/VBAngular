Imports System.ComponentModel.DataAnnotations
Imports System.ComponentModel.DataAnnotations.Schema
Imports System.Diagnostics.Tracing
Imports Microsoft.EntityFrameworkCore

Public Class RoamingClipboardContext
    Inherits DbContext

    Public Property Categories As DbSet(Of Category)
    Public Property Entries As DbSet(Of Entry)

    Protected Overrides Sub OnConfiguring(optionsBuilder As DbContextOptionsBuilder)
        'With other NuGets, we can use SqLite at this point.
        optionsBuilder.UseSqlServer("Server=(localdb)\mssqllocaldb;Database=RoamingClipboard;Trusted_Connection=True;")
    End Sub
End Class

Public Class Category

    <Key>
    Public Property IdCategory As Guid

    <Column(TypeName:="nvarchar(200)")>
    Public Property CategoryName As String
    Public Property DateCreated As DateTimeOffset
    Public Property DateLastEdited As DateTimeOffset
End Class

Public Class Entry

    <Key>
    Public Property IdEntry As Guid
    Public Property Category As Category
    Public Property TimeValid As TimeSpan?
    Public Property Content As String

    Public Property DateCreated As DateTimeOffset
    Public Property DateLastEdited As DateTimeOffset

End Class