using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace WsRestConsultaWebAsamblea
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Remueve el resultado en xml y solo se visualiza en Json
            var json = config.Formatters.JsonFormatter;
            json.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            config.EnableCors();
            //Web API routes
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
