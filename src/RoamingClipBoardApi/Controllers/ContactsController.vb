Imports System.Net
Imports System.Net.Http
Imports Microsoft.AspNetCore.Authorization
Imports Microsoft.AspNetCore.Mvc
Imports Microsoft.EntityFrameworkCore
Imports RoamingClipboardDataLayer

<Route("api/[controller]")>
Public Class EntriesController
    Inherits Controller

    ' GET api/entries
    <HttpGet>
    Public Async Function [Get]() As Task(Of IEnumerable(Of Link))

        Dim oc As New RoamingClipboardContext

        Dim entries = Await (From item In oc.Links
                             Order By item.Category.CategoryName).ToListAsync.ConfigureAwait(False)

        Return Await Task.FromResult(entries)
    End Function

    ' GET api/entries/guid
    <HttpGet("{id}")>
    Public Async Function [Get](ByVal id As Guid) As Task(Of Link)
        Return Await (New RoamingClipboardContext).Links.
                            Where(Function(item) item.IdLink = id).FirstOrDefaultAsync
    End Function

    ' GET api/entries/guid
    <HttpGet("{id}")>
    Public Async Function [Get](ByVal id As Integer) As Task(Of Integer)
        Return Await Task.FromResult(id)
    End Function


End Class
