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
    public class RolesController : ApiController
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

        [HttpGet]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Get()
        {
            
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("lista_roles", objeconsulta.Consulta_Rol());
            return respuesta;
        }

        [HttpPost]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Post(roles obj)
        {

            roles Objnew = new roles();
            Objnew.rol = obj.rol;
            Objnew.observaciones = obj.observaciones;
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Se agrego rol", objeconsulta.postrol(Objnew));
            return respuesta;
        }

        [HttpPut]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Put(roles obj)
        {
            roles Objnew = new roles();
            Objnew.id_rol = obj.id_rol;
            Objnew.rol = obj.rol;
            Objnew.observaciones = obj.observaciones;
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Se actualizo rol", objeconsulta.putrol(Objnew));
            return respuesta;
        }

        [HttpDelete]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Delete(roles obj)
        {
            roles Objnew = new roles();
            Objnew.id_rol = obj.id_rol;
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Se elimino rol", objeconsulta.deleterol(Objnew));
            return respuesta;
        }

    }
}
