using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WsRestConsultaWebAsamblea.AD.Servicios;
using WsRestConsultaWebAsamblea.EN.Tablas;

namespace WsRestConsultaWebAsamblea.AD.Consultas
{
    public class rolesAD
    {

        WcfData wsc = new WsRestConsultaWebAsamblea.AD.Servicios.WcfData();

        public List<roles> ConsultaRoles()
        {

            List<string[,]> listrol = new List<string[,]>();
            List<roles> listrol2 = new List<roles>();
            string[,,] Param = new string[0, 0, 0];
            listrol = wsc.LlenarLista(Param, "ConsultarRol", "ilion", "SP", "Sql");
            string[,] List_;
            for (int i = 0; i < listrol.Count; i++)
            {
                roles objrolad = new roles();
                List_ = listrol[i];
                objrolad.rol = List_[0, 1].ToString();
                objrolad.observaciones = List_[1, 1].ToString();
                listrol2.Add(objrolad);
            }
            return listrol2;

        }


        public List<roles> ConsultaRolesID(roles objrold)
        {

            List<string[,]> listrol = new List<string[,]>();
            List<roles> listrol2 = new List<roles>();
            string[,,] Param = new string[1, 3, 1];

            Param[0, 0, 0] = objrold.id_rol.ToString();
            Param[0, 1, 0] = "@id_rol";
            Param[0, 2, 0] = "varchar(40)";

            listrol = wsc.LlenarLista(Param, "ConsultarRolID", "ilion", "SP", "Sql");
            string[,] List_;
            for (int i = 0; i < listrol.Count; i++)
            {
                roles objrolad = new roles();
                List_ = listrol[i];
                objrolad.rol = List_[0, 1].ToString();
                objrolad.observaciones = List_[1, 1].ToString();
                listrol2.Add(objrolad);
            }
            return listrol2;

        }

    }
}
