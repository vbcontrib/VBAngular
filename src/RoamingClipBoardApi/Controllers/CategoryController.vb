Imports System.Runtime.Serialization
Imports Microsoft.AspNetCore.Mvc
Imports Microsoft.EntityFrameworkCore
Imports RoamingClipboardDataLayer

<Route("api/[controller]")>
Public Class CategoriesController
    Inherits Controller

    ' GET api/categories
    <HttpGet>
    Public Async Function [Get]() As Task(Of IActionResult)

        Dim context As New RoamingClipboardContext
        Dim resultList = Await (From categoryItem In context.Categories
                                Order By categoryItem.DateLastAssignedTo Descending).
                                    ToListAsync.
                                    ConfigureAwait(False)

        Return New OkObjectResult(resultList)

    End Function

    ' POST api/categories
    <HttpPost>
    Public Async Function Post(<FromBody> category As Category) As Task(Of IActionResult)

        If Not ModelState.IsValid Then
            If Debugger.IsAttached Then
                Debugger.Break()
            End If
        Else
            Debug.Print(category?.ToString)
        End If

        Try
            Dim oc As New RoamingClipboardContext
            category.DateCreated = Date.Now
            category.DateLastEdited = Date.Now
            category.DateLastAssignedTo = Date.Now
            oc.Categories.Add(category)
            Await oc.SaveChangesAsync.ConfigureAwait(False)

            Return New JsonResult(category.IDCategoryAsString) With {.StatusCode = 200}
        Catch ex As Exception
        End Try
        Return Await Task.FromResult(New BadRequestResult)

    End Function

End Class
