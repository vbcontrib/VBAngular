Imports System.ComponentModel.DataAnnotations
Imports System.ComponentModel.DataAnnotations.Schema

Public Class Link

    Const ABBRIVIATE_TO_CHARACTERS = 27

    Private myUrlString As String

    <Key>
    Public Property IdLink As Guid
    Public Property Category As Category
    Public Property BestBefore As Date?

    'No Url schould be longer than 2048 characters.
    <Column(TypeName:="nvarchar(2048)")>
    Public Property UrlString As String
        Get
            Return myUrlString
        End Get
        Set(value As String)
            myUrlString = value
            If value.Length > ABBRIVIATE_TO_CHARACTERS Then
                UrlStringAbbreviated = value.Substring(0, ABBRIVIATE_TO_CHARACTERS) & "..."
            Else
                UrlStringAbbreviated = value
            End If
        End Set
    End Property
    Public Property Description As String

    Public Property DateCreated As Date
    Public Property DateLastEdited As Date

    'Not a field in the database, but we use it to transfer content to database
    <NotMapped>
    Public Property UrlStringAbbreviated As String

End Class