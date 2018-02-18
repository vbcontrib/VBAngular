Imports System.Net
Imports System.Net.Http
Imports Microsoft.AspNetCore.Authorization
Imports Microsoft.AspNetCore.Mvc
Imports Microsoft.EntityFrameworkCore
Imports RoamingClipboardDataLayer

<Route("api/[controller]")>
Public Class LinksController
    Inherits Controller

    Const GET_DEMO_DATA = True

    ' GET api/links
    <HttpGet>
    Public Async Function [Get]() As Task(Of IActionResult)

        Dim oc As New RoamingClipboardContext

        If GET_DEMO_DATA Then
            Return Await GetDemoDataAsync().ConfigureAwait(False)
        Else
            Dim links = Await (From item In oc.Links
                               Order By item.Category.CategoryName).ToListAsync.ConfigureAwait(False)

            Return Await Task.FromResult(New OkObjectResult(links))
        End If

    End Function

    ' GET api/links/guid
    <HttpGet("{id}")>
    Public Async Function [Get](ByVal id As Guid) As Task(Of Link)
        Return Await (New RoamingClipboardContext).Links.
                            Where(Function(item) item.IdLink = id).FirstOrDefaultAsync
    End Function

    ' GET api/links/guid
    <HttpGet("{id}")>
    Public Async Function [Get](ByVal id As Integer) As Task(Of Integer)
        Return Await Task.FromResult(id)
    End Function

    Public Shared Async Function GetDemoDataAsync() As Task(Of IActionResult)

        Dim carRelatedCategory = New Category With {.CategoryName = "Car related",
                                                    .IdCategory = Guid.NewGuid,
                                                    .DateLastAssignedTo = Date.Now}

        Dim classCompsRelatedCategory = New Category With {.CategoryName = "Classic Computers",
                                                           .IdCategory = Guid.NewGuid,
                                                           .DateLastAssignedTo = Date.Now}

        Dim returnList = {
        New Link With {.UrlString = "https://suchen.mobile.de/fahrzeuge/search.html?damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&maxPowerAsArray=PS&minPowerAsArray=PS&scopeId=C&transmissions=AUTOMATIC_GEAR",
                  .Description = "Search for classing Mercedes W123 280 SE",
                  .Category = carRelatedCategory,
                  .BestBefore = #2018-04-30#},
        New Link With {.UrlString = "https://suchen.mobile.de/fahrzeuge/details.html?id=252201547&damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&pageNumber=1&scopeId=C&transmissions=AUTOMATIC_GEAR&action=topOfPage&top=3:3&searchId=94d62f01-b49f-344c-6a46-d8126b301948",
                  .Description = "Classic Red Mercedes 280SE",
                  .Category = carRelatedCategory,
                  .BestBefore = #2018-04-30#},
        New Link With {.UrlString = "http://www.commodoreserver.com/CommodorePhotoDetails.asp?PID=66C201A9145B40ED859FE61662E6C8A8",
                  .Description = "VICE 128 Keyboard Map",
                  .Category = classCompsRelatedCategory,
                  .BestBefore = #2018-12-31#},
        New Link With {.UrlString = "http://commodore64.se/wiki/index.php/Commodore_128_assembly_programming",
                  .Description = "Commodore 128 assembly programming",
                  .Category = classCompsRelatedCategory,
                  .BestBefore = #2018-12-31#}
        }.ToList

        Return Await Task.FromResult(New OkObjectResult(returnList))

    End Function

End Class
