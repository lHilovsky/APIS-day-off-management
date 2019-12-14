using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace RestAppGelHil
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            config.Routes.MapHttpRoute(
                "ShiftsApi",                                           // Route name
                "shifts/employee/{entryDate}",                            // URL with parameters
                new { controller = "shifts", action = "GetEmployeesOnShift" }  // Parameter defaults
            );

            config.Routes.MapHttpRoute(
                "DayoffsApi",                                           // Route name
                "dayoffs/pdfAll/{id}",                            // URL with parameters
                new { controller = "dayoffs", action = "GetDayoffsPDF" }  // Parameter defaults
            );
            config.Routes.MapHttpRoute(
                "DayoffsApiDate",                                           // Route name
                "dayoffs/pdfAll/{id}/{entryDate}",                            // URL with parameters
                new { controller = "dayoffs", action = "GetDayoffsPDF" }  // Parameter defaults
            );

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
