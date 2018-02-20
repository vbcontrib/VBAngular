Imports System.IO
Imports Microsoft.AspNetCore.Builder
Imports Microsoft.AspNetCore.Hosting
Imports Microsoft.AspNetCore.Http
Imports Microsoft.Extensions.Configuration
Imports Microsoft.Extensions.DependencyInjection
Imports Microsoft.Extensions.Logging
Imports Newtonsoft.Json.Serialization

Public Class Startup
    Public Sub New(ByVal env As IHostingEnvironment)
        Dim builder = (New ConfigurationBuilder()).SetBasePath(env.ContentRootPath).
            AddJsonFile("appsettings.json", optional:=False, reloadOnChange:=True).
            AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional:=True).AddEnvironmentVariables()
        Configuration = builder.Build()
    End Sub

    Public ReadOnly Property Configuration() As IConfigurationRoot

    ' This method gets called by the runtime. Use this method to add services to the container.
    Public Sub ConfigureServices(ByVal services As IServiceCollection)
        ' Add framework services.
        services.
            AddMvc().AddJsonOptions(
            Sub(v)
                v.SerializerSettings.ContractResolver = New CamelCasePropertyNamesContractResolver
            End Sub)
    End Sub

    ' This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    Public Sub Configure(ByVal app As IApplicationBuilder,
                         ByVal env As IHostingEnvironment,
                         ByVal loggerFactory As ILoggerFactory)

        loggerFactory.AddConsole(Configuration.GetSection("Logging"))
        loggerFactory.AddDebug()

        app.Use(Async Function(context As HttpContext, [next] As Func(Of Task)) As Task
                    Await [next]()
                    If context.Response.StatusCode = 404 AndAlso
                            Not Path.HasExtension(context.Request.Path.Value) AndAlso
                            Not context.Request.Path.Value.StartsWith("/api/") Then
                        context.Request.Path = "/ClientApp/dist/index.html"
                        Await [next]()
                    End If
                End Function).
        UseStaticFiles.
        UseMvc(Sub(cfg)
                   cfg.MapRoute("Default",
                                "{controller}/{action}/{id?}",
                                New With {.Controller = "App", .Action = "Index"})
               End Sub)

    End Sub
End Class
