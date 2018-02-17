Imports System.ComponentModel.DataAnnotations
Imports System.ComponentModel.DataAnnotations.Schema

Public Class Category

    <Key>
    Public Property IdCategory As Guid

    <Column(TypeName:="nvarchar(200)")>
    Public Property CategoryName As String
    Public Property Links As ICollection(Of Link)
    Public Property DateLastAssignedTo As DateTimeOffset
    Public Property DateCreated As DateTimeOffset
    Public Property DateLastEdited As DateTimeOffset

    'Just as an Idea for later: This gets updated, so we'll learn about dead categories pretty quickly.
    <NotMapped>
    Public Property DateLastUsed As DateTimeOffset

    'Maybe this also?
    <NotMapped>
    Public Property ClickCount As Integer

End Class
