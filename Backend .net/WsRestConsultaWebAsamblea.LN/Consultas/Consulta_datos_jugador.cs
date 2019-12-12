using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WsRestConsultaWebAsamblea.AD.Consultas;
using WsRestConsultaWebAsamblea.EN.Tablas;

namespace WsRestConsultaWebAsamblea.LN.Consultas
{
    public class Consulta_datos_jugador
    {

        List<datos_jugador> LisRest = new List<datos_jugador>();
        datos_jugador ObjError = new datos_jugador();

        public List<datos_jugador> get_datos_jugador()
        {

            try
            {

                datos_jugadorAD ObjAD = new datos_jugadorAD();

                LisRest = ObjAD.get_datos_jugador();
                if (LisRest.Count > 0)
                {

                    return LisRest;
                }
                else
                {
                    ObjError.Error = "No se encontraron registros";
                    LisRest.Add(ObjError);
                    return LisRest;
                }

            }
            catch (Exception)
            {
                ObjError.Error = "Ocurrio un error al consultar los indentificacion.";
                LisRest.Add(ObjError);
                return LisRest;
            }
        }

        public List<datos_jugador> Consulta_datos_jugador_id(datos_jugador obj)
        {

            try
            {

                datos_jugador Objrest = new datos_jugador();
                Objrest.id_jugador = obj.id_jugador;
                datos_jugadorAD ObjAD = new datos_jugadorAD();
                LisRest = ObjAD.get_datos_jugador_id(Objrest);
                if (LisRest.Count > 0)
                {

                    return LisRest;
                }
                else
                {
                    ObjError.Error = "No se encontraron registros";
                    LisRest.Add(ObjError);
                    return LisRest;
                }

            }
            catch (Exception)
            {
                ObjError.Error = "Ocurrio un error al consultar los roles.";
                LisRest.Add(ObjError);
                return LisRest;
            }
        }

        public datos_jugador post_datos_jugador(datos_jugador obj)
        {
            try
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
                datos_jugadorAD ObjhadAD = new datos_jugadorAD();
                bool resultado = ObjhadAD.post_datos_jugador(Objhap);
                if (resultado == true)
                {
                    ObjError.Error = "Se agrego Exitosamente";
                    return ObjError;
                }
                else
                {
                    ObjError.Error = "No se agrego ";
                    return ObjError;
                }

            }
            catch (Exception ex)
            {
                ObjError.Error = "Error" + ex.Message;
                return ObjError;

            }
        }

        public datos_jugador put_datos_jugador(datos_jugador obj)
        {
            try
            {

                datos_jugador Objhap = new datos_jugador();
                Objhap.id_jugador = obj.id_jugador;
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

                datos_jugadorAD ObjhadAD = new datos_jugadorAD();
                bool resultado = ObjhadAD.put_datos_jugador(Objhap);
                if (resultado == true)
                {
                    ObjError.Error = "Se actualizo Exitosamente";
                    return ObjError;
                }
                else
                {
                    ObjError.Error = "No se actualizo ";
                    return ObjError;
                }

            }
            catch (Exception ex)
            {
                ObjError.Error = "Error" + ex.Message;
                return ObjError;

            }
        }

        public datos_jugador delete_datos_jugador(datos_jugador obj)
        {
            try
            {

                datos_jugador Objhap = new datos_jugador();
                Objhap.id_jugador = obj.id_jugador;

                datos_jugadorAD ObjhadAD = new datos_jugadorAD();
                bool resultado = ObjhadAD.delete_datos_jugador(Objhap);
                if (resultado == true)
                {
                    ObjError.Error = "Se elimino Exitosamente";
                    return ObjError;
                }
                else
                {
                    ObjError.Error = "No se elimino ";
                    return ObjError;
                }

            }
            catch (Exception ex)
            {
                ObjError.Error = "Error" + ex.Message;
                return ObjError;

            }
        }

    }
}
