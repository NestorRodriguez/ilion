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

        public List<tipo_identificacion> Consulta_ListIdentificacion()
        {

            List<tipo_identificacion> LisRest = new List<tipo_identificacion>();
            tipo_identificacion ObjError = new tipo_identificacion();

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

            List<tipo_identificacion> LisRets = new List<tipo_identificacion>();
            tipo_identificacion ObjError = new tipo_identificacion();

            try
            {

                if (obj.id_ident.Equals(""))
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
                else
                {
                    ObjError.Error = "El numero de id no existe";
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
    }
}
