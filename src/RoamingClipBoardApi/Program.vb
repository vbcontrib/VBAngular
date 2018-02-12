Imports System
Imports System.IO
Imports Microsoft.AspNetCore
Imports Microsoft.AspNetCore.Hosting

Module Program
    Sub Main(args As String())
        BuildWebHost(args).Run
    End Sub

    Public Function BuildWebHost(args As String()) As IWebHost
        Return WebHost.CreateDefaultBuilder(args).
               UseStartup(Of Startup).
               UseApplicationInsights.
               Build
    End Function
End Module
