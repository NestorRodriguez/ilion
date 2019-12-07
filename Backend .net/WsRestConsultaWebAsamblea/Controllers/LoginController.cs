using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WsRestConsultaWebAsamblea.EN.Tablas;
using WsRestConsultaWebAsamblea.LN.Consultas;

namespace WsRestConsultaWebAsamblea.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {

        usuario objhad = new usuario();
        consulta_usuario objeconsulta = new consulta_usuario();
       
        [HttpGet]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Get(string email,string contraseña)
        {
            objhad.contraseña = contraseña;
            objhad.email = email;
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Login_rol", objeconsulta.ConsultaLogin(objhad));
            return respuesta;
        }
    }
}
