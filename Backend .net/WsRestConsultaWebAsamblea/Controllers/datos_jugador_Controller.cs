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
    public class datos_jugador_Controller : ApiController
    {
        datos_jugador objhad = new datos_jugador();
        Consulta_datos_jugador objeconsulta = new Consulta_datos_jugador();
        [HttpGet]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Get()
        {
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Get_datos_jugaro", objeconsulta.get_datos_jugador());
            return respuesta;
        }

        [HttpGet]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Get(string id_jugador)
        {
            objhad.id_jugador = id_jugador;
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Get_datos_jugador_id", objeconsulta.Consulta_datos_jugador_id(objhad));
            return respuesta;
        }

        [HttpPost]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Post(datos_jugador obj)
        {
            
               datos_jugador Objhap = new datos_jugador();

                Objhap.nombre_jugaro = obj.nombre_jugaro;
                Objhap.fecha_nacimiento = obj.fecha_nacimiento;
                Objhap.lugar = obj.lugar;
                Objhap.documento_identidad = obj.documento_identidad;
                Objhap.tipo_documento = obj.tipo_documento;
                Objhap.genero = obj.genero;
                Objhap.direccion_residencia = obj.direccion_residencia;
                Objhap.barrio = obj.barrio;
                Objhap.telefono = obj.telefono;
                Objhap.celular = obj.celular;
                Objhap.email = obj.email;
                Objhap.whatsapp = obj.whatsapp;
                Objhap.edad = obj.edad;
                Objhap.peso = obj.peso;
                Objhap.estatura = obj.estatura;
                Objhap.talla = obj.talla;
                Objhap.rh = obj.rh;
                Objhap.pie_habil = obj.pie_habil;
                Objhap.institucion = obj.institucion;
                Objhap.grado = obj.grado;
                Objhap.eps = obj.eps;
                Objhap.prepagada = obj.prepagada;
                Objhap.sisben = obj.sisben;
                Objhap.otra_clinica = obj.otra_clinica;
                Objhap.pregunta1 = obj.pregunta1;
                Objhap.pregunta2 = obj.pregunta2;
                Objhap.pregunta3 = obj.pregunta3;
                Objhap.id_registro = obj.id_registro;

            // objhad.id_rol = id_rol.ToString();
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Post_datos_jugador", objeconsulta.post_datos_jugador(Objhap));
            return respuesta;
        }

        [HttpPut]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Put(datos_jugador obj)
        {
           datos_jugador Objhap = new datos_jugador();

                Objhap.nombre_jugaro = obj.nombre_jugaro;
                Objhap.fecha_nacimiento = obj.fecha_nacimiento;
                Objhap.lugar = obj.lugar;
                Objhap.documento_identidad = obj.documento_identidad;
                Objhap.tipo_documento = obj.tipo_documento;
                Objhap.genero = obj.genero;
                Objhap.direccion_residencia = obj.direccion_residencia;
                Objhap.barrio = obj.barrio;
                Objhap.telefono = obj.telefono;
                Objhap.celular = obj.celular;
                Objhap.email = obj.email;
                Objhap.whatsapp = obj.whatsapp;
                Objhap.edad = obj.edad;
                Objhap.peso = obj.peso;
                Objhap.estatura = obj.estatura;
                Objhap.talla = obj.talla;
                Objhap.rh = obj.rh;
                Objhap.pie_habil = obj.pie_habil;
                Objhap.institucion = obj.institucion;
                Objhap.grado = obj.grado;
                Objhap.eps = obj.eps;
                Objhap.prepagada = obj.prepagada;
                Objhap.sisben = obj.sisben;
                Objhap.otra_clinica = obj.otra_clinica;
                Objhap.pregunta1 = obj.pregunta1;
                Objhap.pregunta2 = obj.pregunta2;
                Objhap.pregunta3 = obj.pregunta3;
                Objhap.id_registro = obj.id_registro;
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Put_datos_jugador", objeconsulta.put_datos_jugador(Objhap));
            return respuesta;
        }

        [HttpDelete]
        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Delete(datos_jugador obj)
        {
            datos_jugador Objnew = new datos_jugador();
            Objnew.id_jugador = obj.id_jugador;            
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new LN.Modelo.Respuesta();
            respuesta.contenido.Add("Delete_jugador", objeconsulta.delete_datos_jugador(Objnew));
            return respuesta;
        }
    
    }
}
