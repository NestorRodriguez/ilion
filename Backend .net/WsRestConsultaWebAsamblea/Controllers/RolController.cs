using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WsRestConsultaWebAsamblea.EN.Tablas;
using WsRestConsultaWebAsamblea.LN.Consultas;

namespace WsRestConsultaWebAsamblea.Controllers
{
    public class RolController : ApiController
    {
        roles objhad = new roles();
        ConsultaRol objeconsulta = new ConsultaRol();
        [HttpGet]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Get(int id_rol)
        {
            objhad.id_rol = id_rol.ToString();
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("lista_roles", objeconsulta.Consulta_Rol_id(objhad));
            return respuesta;
        }
    }
}