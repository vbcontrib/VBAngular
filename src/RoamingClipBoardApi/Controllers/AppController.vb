Imports Microsoft.AspNetCore.Mvc

Public Class AppController
    Inherits Controller

    Public Function Index() As IActionResult
        Dim v = File("ClientApp/dist/index.html", "text/html")
        Return v
    End Function

End Class
