Imports Microsoft.AspNetCore.Mvc
Imports Microsoft.EntityFrameworkCore
Imports RoamingClipboardDataLayer

<Route("api/[controller]")>
Public Class SampleDataController
    Inherits Controller

    ' get api/sampleData
    <HttpGet>
    Public Async Function CreateDemoData() As Task(Of IActionResult)

        Dim context = New RoamingClipboardContext

        'Not sure if we want this...
        Try
            Await context.Database.ExecuteSqlCommandAsync(
                "DELETE FROM [Links]")
            Await context.Database.ExecuteSqlCommandAsync(
                "DELETE FROM [Categories]")
        Catch ex As Exception
            If Debugger.IsAttached Then
                Debugger.Break()
            End If
        End Try

        Dim classicComputerLinks = New Category With {
            .IDCategory = New Guid("C1A889D7-24BF-4D9F-9F34-906BC69C447C"),
            .CategoryName = "Classic Computers",
            .CategoryDescription = "Everything around the classic Commodore Computers",
            .DateLastAssignedTo = Date.Now,
            .DateCreated = Date.Now,
            .DateLastEdited = Date.Now}

        Dim vbLinks = New Category With {
            .IDCategory = New Guid("C2A889D7-24BF-4D9F-9F34-906BC69C447C"),
            .CategoryName = "Visual Basic",
            .CategoryDescription = "About Visual Basic .NET",
            .DateLastAssignedTo = #2018-01-16#,
            .DateCreated = Date.Now,
            .DateLastEdited = Date.Now}

        Dim netLinks = New Category With {
            .IDCategory = New Guid("C3A889D7-24BF-4D9F-9F34-906BC69C447C"),
            .CategoryName = ".NET",
            .CategoryDescription = "Links about the Framework .NET and .NET Core",
            .DateLastAssignedTo = #2017-12-16#,
            .DateCreated = Date.Now,
            .DateLastEdited = Date.Now}

        Dim csLinks = New Category With {
            .IDCategory = New Guid("C4A889D7-24BF-4D9F-9F34-906BC69C447C"),
            .CategoryName = "C#",
            .CategoryDescription = "Things about CSharp.",
            .DateLastAssignedTo = #2017-12-24#,
            .DateCreated = Date.Now,
            .DateLastEdited = Date.Now}

        Dim carLinks = New Category With {
            .IDCategory = New Guid("C5A889D7-24BF-4D9F-9F34-906BC69C447C"),
            .CategoryName = "Classic Car",
            .CategoryDescription = "Links to Classic Cars and Classic car searches in German Mobile.De",
            .DateLastAssignedTo = #2017-12-24#,
            .DateCreated = Date.Now,
            .DateLastEdited = Date.Now}


        context.Categories.AddRange({classicComputerLinks,
                                     vbLinks,
                                     netLinks,
                                     csLinks})

        context.Links.Add(
            New Link With {
                .IDLink = New Guid("A1A889D7-24BF-4D9F-9F34-906BC69C447C"),
                .UrlString = "https://suchen.mobile.de/fahrzeuge/search.html?damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&maxPowerAsArray=PS&minPowerAsArray=PS&scopeId=C&transmissions=AUTOMATIC_GEAR",
                .Description = "Search for classing Mercedes W123 280 SE",
                .Category = carLinks,
                .BestBefore = Nothing,
                .DateCreated = Date.Now,
                .DateLastEdited = Date.Now})

        context.Links.Add(
            New Link With {
                .IDLink = New Guid("A2A889D7-24BF-4D9F-9F34-906BC69C447C"),
                .UrlString = "https://suchen.mobile.de/fahrzeuge/details.html?id=252201547&damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&pageNumber=1&scopeId=C&transmissions=AUTOMATIC_GEAR&action=topOfPage&top=3:3&searchId=94d62f01-b49f-344c-6a46-d8126b301948",
                .Description = "Classic Red Mercedes 280SE",
                .Category = carLinks,
                .BestBefore = #2018-05-30#,
                .DateCreated = Date.Now,
                .DateLastEdited = Date.Now})

        context.Links.Add(
            New Link With {
                .IDLink = New Guid("A3A889D7-24BF-4D9F-9F34-906BC69C447C"),
                .UrlString = "http://www.commodoreserver.com/CommodorePhotoDetails.asp?PID=66C201A9145B40ED859FE61662E6C8A8",
                .Description = "VICE 128 Keyboard Map",
                .Category = classicComputerLinks,
                .BestBefore = Nothing,
                .DateCreated = Date.Now,
                .DateLastEdited = Date.Now})

        context.Links.Add(
            New Link With {
                .IDLink = New Guid("A4A889D7-24BF-4D9F-9F34-906BC69C447C"),
                .UrlString = "http://commodore64.se/wiki/index.php/Commodore_128_assembly_programming",
                .Description = "Commodore 128 assembly programming",
                .Category = classicComputerLinks,
                .BestBefore = Nothing,
                .DateCreated = Date.Now,
                .DateLastEdited = Date.Now})

        Try
            Await context.SaveChangesAsync
            Return New OkResult
        Catch ex As Exception
            If Debugger.IsAttached Then
                Debugger.Break()
            End If
            Return New BadRequestResult
        End Try

    End Function



End Class
