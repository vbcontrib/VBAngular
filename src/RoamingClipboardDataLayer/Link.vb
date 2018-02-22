Imports System.ComponentModel.DataAnnotations
Imports System.ComponentModel.DataAnnotations.Schema
Imports Newtonsoft.Json

Public Class Link

    Const ABBRIVIATE_TO_CHARACTERS = 27

    Private myUrlString As String
    Private myUrlStringAbbreviated As String

    'This is our primary key field. It will, when send to the Client, not directly 
    'used - instead we will use the IDLinkString, so TypeScript can better
    'deal with it. In addition: We want this field to appear on top in the 
    'database definition, hence Order:=0.
    <Key, JsonIgnore, Column(Order:=0)>
    Public Property IDLink As Guid

    'This does not reflect any field in the DB, but we will use this for going back and forth
    'between Client and WebAPI - under the Name of IDLink.
    <NotMapped, JsonProperty(PropertyName:=NameOf(IDLink))>
    Public Property IDLinkAsString As String
        Get
            Return IDLink.ToString
        End Get
        Set(value As String)
            If String.IsNullOrWhiteSpace(value) Then
                IDLink = Guid.NewGuid
            Else
                IDLink = New Guid(value)
            End If
        End Set
    End Property

    <Column(Order:=1)>
    Public Property Category As Category

    <Column(Order:=2)>
    Public Property BestBefore As Date?

    'No Url schould be longer than 2048 characters.
    <Column(TypeName:="nvarchar(2048)", Order:=3)>
    Public Property UrlString As String
        Get
            Return myUrlString
        End Get
        Set(value As String)
            myUrlString = value
            If value.Length > ABBRIVIATE_TO_CHARACTERS Then
                myUrlStringAbbreviated = value.Substring(0, ABBRIVIATE_TO_CHARACTERS) & "..."
            Else
                myUrlStringAbbreviated = value
            End If
        End Set
    End Property

    'Not a field in the database, but we use it to transfer content to database
    <NotMapped>
    Public Property UrlStringAbbreviated As String
        Get
            Return myUrlStringAbbreviated
        End Get
        'Only UrlString can set this property, otherwise it get's overwritten in the serialization process, 
        'since it is also returned from the Angular Client.
        Set(value As String)
        End Set
    End Property

    <Column(Order:=4)>
    Public Property Description As String

    <Column(Order:=5)>
    Public Property DateCreated As Date

    <Column(Order:=6)>
    Public Property DateLastEdited As Date

    Public Overrides Function ToString() As String
        Return $"{Category?.CategoryName}: {UrlStringAbbreviated}"
    End Function
End Class