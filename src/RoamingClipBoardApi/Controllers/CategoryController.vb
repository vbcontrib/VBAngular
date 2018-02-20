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

        Return Await GetCategories().ConfigureAwait(False)

    End Function

    ' GET api/categories
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
            oc.Categories.Add(category)
            'later:
            'Await oc.SaveChangesAsync.ConfigureAwait(False)

            Return New JsonResult(category.IDCategoryAsString) With {.StatusCode = 200}
        Catch ex As Exception
        End Try
        Return Await Task.FromResult(New BadRequestResult)

    End Function

    Public Shared Async Function GetCategories() As Task(Of IActionResult)
        Dim returnList = {
        New Category With {.IDCategory = Guid.NewGuid(),
                  .CategoryName = "Commodore 64",
                  .DateLastUsed = #2018-02-11#,
                  .DateCreated = Date.Now,
                  .DateLastEdited = Date.Now},
        New Category With {.IDCategory = Guid.NewGuid(),
                  .CategoryName = "Visual Basic",
                  .DateLastUsed = #2018-01-16#,
                  .DateCreated = Date.Now,
                  .DateLastEdited = Date.Now},
        New Category With {.IDCategory = Guid.NewGuid(),
                  .CategoryName = ".NET",
                  .DateLastUsed = #2017-02-16#,
                  .DateCreated = Date.Now,
                  .DateLastEdited = Date.Now},
        New Category With {.IDCategory = Guid.NewGuid(),
                  .CategoryName = "C#",
                  .DateLastUsed = #2017-12-24#,
                  .DateCreated = Date.Now,
                  .DateLastEdited = Date.Now}
        }.ToList

        Return Await Task.FromResult(New OkObjectResult(returnList))

    End Function




End Class
