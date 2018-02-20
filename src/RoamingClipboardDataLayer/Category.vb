Imports System.ComponentModel.DataAnnotations
Imports System.ComponentModel.DataAnnotations.Schema
Imports Newtonsoft.Json

Public Class Category

    Private myCategoryName As String

    'This is our primary key field. It will, when send to the Client, not directly 
    'used - instead we will use the IDCategoryAsString, so TypeScript can better
    'deal with it. In addition: We want this field to appear on top in the 
    'database definition, hence Order:=0.
    <Key, JsonIgnore, Column(Order:=0)>
    Public Property IDCategory As Guid

    'This does not reflect any field in the DB, but we will use this for going back and forth
    'between Client and WebAPI - under the Name of IDCategory.
    <NotMapped, JsonProperty(PropertyName:=NameOf(IDCategory))>
    Public Property IDCategoryAsString As String
        Get
            Return IDCategory.ToString
        End Get
        Set(value As String)
            If String.IsNullOrWhiteSpace(value) Then
                IDCategory = Guid.NewGuid
            Else
                IDCategory = New Guid(value)
            End If
        End Set
    End Property

    'This will create an nvarchar field in the database of length 200. This should
    'appear in the schema definition under the ID. Required makes it an NOT NULL column.
    <Column(TypeName:="nvarchar(200)", Order:=1), Required>
    Public Property CategoryName As String
        Get
            Return myCategoryName
        End Get
        Set(value As String)
            myCategoryName = value
        End Set
    End Property

    Public Property CategoryDescription As String

    Public Property Links As ICollection(Of Link)

    'This field is a Nullable of Date - so it CAN be null in the DB.
    <Column(Order:=2)>
    Public Property DateLastAssignedTo As Date?

    <Column(Order:=3)>
    Public Property DateCreated As Date

    <Column(Order:=4)>
    Public Property DateLastEdited As Date

    'Just as an Idea for later: This gets updated, so we'll learn about dead categories pretty quickly.
    <NotMapped>
    Public Property DateLastUsed As Date

    'Maybe this also for later?
    <NotMapped>
    Public Property ClickCount As Integer

    'Just for debug purposes.
    Public Overrides Function ToString() As String
        Return $"ID:            {IDCategory}" & vbCrLf &
               $"CategoryName:  {CategoryName}" & vbCrLf &
               $"DateLastAss...:{DateLastAssignedTo}"
    End Function

End Class
