Imports System.Net
Imports System.Net.Http
Imports Microsoft.AspNetCore.Authorization
Imports Microsoft.AspNetCore.Mvc
Imports Microsoft.EntityFrameworkCore
Imports RoamingClipboardDataLayer

<Route("api/[controller]")>
Public Class LinksController
    Inherits Controller

    ' GET api/categories
    <HttpGet>
    Public Async Function [Get]() As Task(Of IActionResult)

        Dim context As New RoamingClipboardContext
        Try
            Dim resultList = Await (From LinkItem In context.Links.Include(Function(link) link.Category)
                                    Order By LinkItem.DateCreated Descending).
                                    ToListAsync.
                                    ConfigureAwait(False)
            Return New OkObjectResult(resultList)

        Catch ex As Exception
            If Debugger.IsAttached Then
                Debugger.Break()
            End If
        End Try

        Return Await Task.FromResult(New BadRequestResult)


    End Function

    ' POST api/categories
    <HttpPost>
    Public Async Function Post(<FromBody> link As Link) As Task(Of IActionResult)

        If Not ModelState.IsValid Then
            If Debugger.IsAttached Then
                Debugger.Break()
            End If
        Else
            Debug.Print(link?.ToString)
        End If

        Try
            Dim oc As New RoamingClipboardContext
            link.DateCreated = Date.Now
            link.DateLastEdited = Date.Now
            oc.Links.Add(link)
            Await oc.SaveChangesAsync.ConfigureAwait(False)

            Return New JsonResult(link.IDLinkAsString) With {.StatusCode = 200}
        Catch ex As Exception
        End Try
        Return Await Task.FromResult(New BadRequestResult)

    End Function

End Class
