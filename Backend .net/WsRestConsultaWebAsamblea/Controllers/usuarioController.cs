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
    public class usuarioController : ApiController
    {
        usuario objhad = new usuario();
        consulta_usuario objeconsulta = new consulta_usuario();
        [HttpGet]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Get()
        {
           // objhad.id_rol = id_rol.ToString();
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("lista_usuario", objeconsulta.Consulta_usuario());
            return respuesta;
        }

        [HttpGet]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Get(string id_registro)
        {
            objhad.id_registro = id_registro;
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("lista_usuario_id", objeconsulta.Consulta_usuario_id(objhad));
            return respuesta;
        }

        [HttpPost]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Post(usuario obj)
        {
            
                usuario Objnew = new usuario();
                Objnew.nombre = obj.nombre;
                Objnew.email = obj.email;
                Objnew.id_ident = obj.id_ident;
                Objnew.num_ident = obj.num_ident;
                Objnew.contraseña = obj.contraseña;
                Objnew.id_rol = obj.id_rol;

            // objhad.id_rol = id_rol.ToString();
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Se agrego usuario", objeconsulta.postusuario(Objnew));
            return respuesta;
        }

        [HttpPut]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Put(usuario obj)
        {
            usuario Objnew = new usuario();
            Objnew.id_registro = obj.id_registro;
            Objnew.nombre = obj.nombre;
            Objnew.email = obj.email;
            Objnew.id_ident = obj.id_ident;
            Objnew.num_ident = obj.num_ident;
            Objnew.contraseña = obj.contraseña;
            Objnew.id_rol = obj.id_rol;
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Se actualizo usuario", objeconsulta.putusuario(Objnew));
            return respuesta;
        }

        [HttpDelete]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Delete(usuario obj)
        {
            usuario Objnew = new usuario();
            Objnew.id_registro = obj.id_registro;            
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Se elimino usuario", objeconsulta.deleteusuario(Objnew));
            return respuesta;
        }
    }
}
