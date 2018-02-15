Imports Microsoft.AspNetCore.Mvc
Imports Microsoft.EntityFrameworkCore
Imports RoamingClipboardDataLayer

<Route("api/[controller]")>
Public Class CategoriesController
    Inherits Controller

    ' GET api/entries
    <HttpGet>
    Public Async Function [Get]() As Task(Of IEnumerable(Of Category))

        Dim returnList As New List(Of Category)
        returnList.Add(New Category With {.CategoryName = "Commodore 64",
                                          .IdCategory = Guid.NewGuid(),
                                          .DateCreated = Date.Now,
                                          .DateLastEdited = Date.Now})

        Return Await Task.FromResult(returnList)

    End Function


End Class
