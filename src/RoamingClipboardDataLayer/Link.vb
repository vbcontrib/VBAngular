Imports System.ComponentModel.DataAnnotations
Imports System.ComponentModel.DataAnnotations.Schema

Public Class Link

    <Key>
    Public Property IdLink As Guid
    Public Property Category As Category
    Public Property BestBefore As TimeSpan?

    'No Url schould be longer than 2048 characters.
    <Column(TypeName:="nvarchar(2048)")>
    Public Property UrlString As String
    Public Property Description As String

    Public Property DateCreated As DateTimeOffset
    Public Property DateLastEdited As DateTimeOffset

End Class