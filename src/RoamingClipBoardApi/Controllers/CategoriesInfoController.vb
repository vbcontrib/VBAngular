Imports Microsoft.AspNetCore.Mvc
Imports Microsoft.EntityFrameworkCore
Imports RoamingClipboardDataLayer

<Route("api/[controller]")> Public Class CategoriesInfoController

    ' GET api/entries
    <HttpGet>
    Public Async Function [Get]() As Task(Of IActionResult)

        Dim returnList = {
        New With {.IdCategory = Guid.NewGuid(),
                  .CategoryName = "Commodore 64",
                  .DateLastUsed = #2018-02-11#,
                  .LinkCount = 7,
                  .DateCreated = Date.Now,
                  .DateLastEdited = Date.Now},
        New With {.IdCategory = Guid.NewGuid(),
                  .CategoryName = "Visual Basic",
                  .DateLastUsed = #2018-01-16#,
                  .LinkCount = 11,
                  .DateCreated = Date.Now,
                  .DateLastEdited = Date.Now},
        New With {.IdCategory = Guid.NewGuid(),
                  .CategoryName = ".NET",
                  .DateLastUsed = #2017-02-16#,
                  .LinkCount = 5,
                  .DateCreated = Date.Now,
                  .DateLastEdited = Date.Now},
        New With {.IdCategory = Guid.NewGuid(),
                  .CategoryName = "C#",
                  .DateLastUsed = #2017-12-24#,
                  .LinkCount = 2,
                  .DateCreated = Date.Now,
                  .DateLastEdited = Date.Now}
        }.ToList

        Return Await Task.FromResult(New OkObjectResult(returnList))

    End Function

End Class
