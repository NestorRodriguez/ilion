using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WsRestConsultaWebAsamblea.AD.Consultas;
using WsRestConsultaWebAsamblea.EN.Tablas;

namespace WsRestConsultaWebAsamblea.LN.Consultas
{
    public class Consulta_Identificacion
    {

        List<tipo_identificacion> LisRest = new List<tipo_identificacion>();
        tipo_identificacion ObjError = new tipo_identificacion();

        public List<tipo_identificacion> Consulta_ListIdentificacion()
        {

            try
            {

                tipo_identificacionAD ObjAD = new tipo_identificacionAD();

                LisRest = ObjAD.ConsultaIdentificacion();
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

        public List<tipo_identificacion> Consulta_Identificacion_id(tipo_identificacion obj)
        {

                      try
            {

                    tipo_identificacion Objrest = new tipo_identificacion();
                    Objrest.id_ident = obj.id_ident;
                    tipo_identificacionAD ObjAD = new tipo_identificacionAD();
                    LisRets = ObjAD.ConsultaIdentificacionID(Objrest);
                    if (LisRets.Count > 0)
                    {

                        return LisRets;
                    }
                    else
                    {
                        ObjError.Error = "No se encontraron registros";
                        LisRets.Add(ObjError);
                        return LisRets;
                    }
               
            }
            catch (Exception)
            {
                ObjError.Error = "Ocurrio un error al consultar los roles.";
                LisRets.Add(ObjError);
                return LisRets;
            }
        }

        public tipo_identificacion posttipo_identificacion(tipo_identificacion obj)
        {
            try
            {

                tipo_identificacion Objhap = new tipo_identificacion();
                Objhap.nom_ident = obj.nom_ident;

                tipo_identificacionAD ObjhadAD = new tipo_identificacionAD();
                bool resultado = ObjhadAD.posttipo_identificacion(Objhap);
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

        public tipo_identificacion puttipo_identificacion(tipo_identificacion obj)
        {
            try
            {

                tipo_identificacion Objhap = new tipo_identificacion();
                Objhap.id_ident = obj.id_ident;
                Objhap.nom_ident = obj.nom_ident;
                
                tipo_identificacionAD ObjhadAD = new tipo_identificacionAD();
                bool resultado = ObjhadAD.puttipo_identificacion(Objhap);
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

        public tipo_identificacion deletetipo_identificacion(tipo_identificacion obj)
        {
            try
            {

                tipo_identificacion Objhap = new tipo_identificacion();
                Objhap.id_ident = obj.id_ident;

                tipo_identificacionAD ObjhadAD = new tipo_identificacionAD();
                bool resultado = ObjhadAD.deletetipo_identificacion(Objhap);
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
