Imports Microsoft.AspNetCore.Mvc
Imports Microsoft.EntityFrameworkCore
Imports RoamingClipboardDataLayer

<Route("api/[controller]")> Public Class LinksInfoController

    ' GET api/entries
    <HttpGet>
    Public Async Function [Get]() As Task(Of IActionResult)

        Dim returnList = {
        New LinkInfo With {.IdCategory = Guid.NewGuid(),
                  .Link = "https://suchen.mobile.de/fahrzeuge/search.html?damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&maxPowerAsArray=PS&minPowerAsArray=PS&scopeId=C&transmissions=AUTOMATIC_GEAR",
                  .Description = "Search for classing Mercedes W123 280 SE",
                  .CategoryName = "Car related",
                  .BestBefore = #2018-04-30#},
        New LinkInfo With {.IdCategory = Guid.NewGuid(),
                  .Link = "https://suchen.mobile.de/fahrzeuge/details.html?id=252201547&damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&pageNumber=1&scopeId=C&transmissions=AUTOMATIC_GEAR&action=topOfPage&top=3:3&searchId=94d62f01-b49f-344c-6a46-d8126b301948",
                  .Description = "Classic Red Mercedes 280SE",
                  .CategoryName = "Car related",
                  .BestBefore = #2018-04-30#},
        New LinkInfo With {.IdCategory = Guid.NewGuid(),
                  .Link = "http://www.commodoreserver.com/CommodorePhotoDetails.asp?PID=66C201A9145B40ED859FE61662E6C8A8",
                  .Description = "VICE 128 Keyboard Map",
                  .CategoryName = "Classic Computers",
                  .BestBefore = #2018-12-31#},
        New LinkInfo With {.IdCategory = Guid.NewGuid(),
                  .Link = "http://commodore64.se/wiki/index.php/Commodore_128_assembly_programming",
                  .Description = "Commodore 128 assembly programming",
                  .CategoryName = "Classic Computers",
                  .BestBefore = #2018-12-31#}
        }.ToList

        Return Await Task.FromResult(New OkObjectResult(returnList))

    End Function

End Class
