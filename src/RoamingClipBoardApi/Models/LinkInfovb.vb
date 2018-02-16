Public Class LinkInfo

    Private myLink As String

    Public Property IdCategory As Guid
    Public Property Link As String
        Get
            Return myLink
        End Get
        Set(value As String)
            myLink = value
            If value.Length > 27 Then
                LinkAbbreviated = Link.Substring(0, 27) & "..."
            Else
                LinkAbbreviated = value
            End If
        End Set
    End Property
    Public Property LinkAbbreviated As String
    Public Property Description As String
    Public Property CategoryName As String
    Public Property BestBefore As DateTime
End Class
