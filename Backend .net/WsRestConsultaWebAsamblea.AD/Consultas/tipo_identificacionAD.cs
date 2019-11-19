using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WsRestConsultaWebAsamblea.AD.Servicios;
using WsRestConsultaWebAsamblea.EN.Tablas;

namespace WsRestConsultaWebAsamblea.AD.Consultas
{
    public class tipo_identificacionAD
    {

        WcfData wsc = new WsRestConsultaWebAsamblea.AD.Servicios.WcfData();

        public List<tipo_identificacion> ConsultaIdentificacion()
        {

            List<string[,]> liststring = new List<string[,]>();
            List<tipo_identificacion> listrest = new List<tipo_identificacion>();
            string[,,] Param = new string[0, 0, 0];
            liststring = wsc.LlenarLista(Param, "ConsultarTipo_identificacion", "ilion", "SP", "Sql");
            string[,] List_;
            for (int i = 0; i < liststring.Count; i++)
            {
                tipo_identificacion objrest = new tipo_identificacion();
                List_ = liststring[i];
                objrest.id_ident = List_[0, 1].ToString();
                objrest.nom_ident = List_[1, 1].ToString();
                listrest.Add(objrest);
            }
            return listrest;

        }

        public List<tipo_identificacion> ConsultaIdentificacionID(tipo_identificacion obj)
        {

            List<string[,]> liststring = new List<string[,]>();
            List<tipo_identificacion> listrest = new List<tipo_identificacion>();
            string[,,] Param = new string[1, 3, 1];

            Param[0, 0, 0] = obj.id_ident.ToString();
            Param[0, 1, 0] = "@id_ident";
            Param[0, 2, 0] = "varchar(40)";

            liststring = wsc.LlenarLista(Param, "ConsultarTipo_identificacion_id", "ilion", "SP", "Sql");
            string[,] List_;
            for (int i = 0; i < liststring.Count; i++)
            {
                tipo_identificacion objrest = new tipo_identificacion();
                List_ = liststring[i];
                objrest.id_ident = List_[0, 1].ToString();
                objrest.nom_ident = List_[1, 1].ToString();
                listrest.Add(objrest);
            }
            return listrest;

        }
    }
}
