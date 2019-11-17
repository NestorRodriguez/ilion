using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WsRestConsultaWebAsamblea.EN.Tablas;
using WsRestConsultaWebAsamblea.LN.Consultas;

namespace WsRestConsultaWebAsamblea.Controllers
{
    public class RolesController : Controller
    {
        roles objhad = new roles();
        ConsultaRol objeconsulta = new ConsultaRol();
        [HttpGet]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Get()
        {
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("lista_roles", objeconsulta.Consulta_Rol());
            return respuesta;
        }

    }
}
