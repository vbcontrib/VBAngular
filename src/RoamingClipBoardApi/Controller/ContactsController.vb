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
    Public Async Function [Get]() As Task(Of IEnumerable(Of Entry))

        Dim oc As New RoamingClipboardContext

        Dim entries = Await (From item In oc.Entries
                             Order By item.Category.CategoryName).ToListAsync.ConfigureAwait(False)

        Return Await Task.FromResult(entries)
    End Function

    ' GET api/entry/guid
    <HttpGet("{id}")>
    Public Async Function [Get](ByVal id As Guid) As Task(Of Entry)
        Return Await (New RoamingClipboardContext).Entries.
                            Where(Function(item) item.IdEntry = id).FirstOrDefaultAsync
    End Function

End Class
