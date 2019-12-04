using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WsRestConsultaWebAsamblea.Controllers
{
    public class HomeController : ApiController
    {
        [HttpGet]
        public Dictionary<string, object> index()
        {
            string ts = "";
            try
            {
                using (SqlConnection cn = new SqlConnection(ConfigurationManager.ConnectionStrings["ilion"].ConnectionString))
                {
                    cn.Open();

                    SqlCommand cmd = new SqlCommand(@"SELECT TOP 1 [id_registro]
                                                     ,[nombre]
                                                     ,[email]
                                                     ,[id_ident]
                                                     ,[num_ident]
                                                     ,[contraseña]
                                                     ,[id_rol]
                                                 FROM [dbo].[usuarios]", cn);
                    SqlDataReader dr = cmd.ExecuteReader();

                    if (dr.Read())
                    {
                        ts = Convert.ToString(dr["nombre"]);
                    }
                }
                return new Dictionary<string, object>() { 
                {"cad",ConfigurationManager.ConnectionStrings["ilion"].ConnectionString},
                {"cad2",Environment.GetEnvironmentVariable("APPINSIGHTS_INSTRUMENTATIONKEY", EnvironmentVariableTarget.Process)},
                {"cad3",ts}
            };
            }
            catch (Exception ex)
            {
                return new Dictionary<string, object>() { 
                {"cad",ex.Message}
            };
            }

        }
    }
}
