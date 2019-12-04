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
                objrolad.id_rol = List_[0, 1].ToString();
                objrolad.rol = List_[1, 1].ToString();
                objrolad.observaciones = List_[2, 1].ToString();
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
                objrolad.id_rol = List_[0, 1].ToString();
                objrolad.rol = List_[1, 1].ToString();
                objrolad.observaciones = List_[2, 1].ToString();
                listrol2.Add(objrolad);
            }
            return listrol2;

        }

        public bool postrol(roles obj)
        {

            bool confirmacion = false;
            string[, ,] Param = new string[2, 3, 1];


            Param[0, 0, 0] = obj.rol;
            Param[0, 1, 0] = "@rol";
            Param[0, 2, 0] = "varchar(40)";

            Param[1, 0, 0] = obj.observaciones;
            Param[1, 1, 0] = "@observaciones";
            Param[1, 2, 0] = "varchar(40)";
          

            try
            {
                string resul = wsc.Ejecutar(Param, "OPE_AgregarRol", "ilion");

                if (resul.Equals("1"))
                {
                    confirmacion = true;
                }

            }
            catch (Exception e)
            {
                Console.Write(e.Message + "Error ");
                confirmacion = false;
            }

            return confirmacion;


        }

        public bool putrol(roles obj)
        {

            bool confirmacion = false;
            string[, ,] Param = new string[3, 3, 1];
            Param[0, 0, 0] = obj.id_rol;
            Param[0, 1, 0] = "@id_rol";
            Param[0, 2, 0] = "nvarchar(40)";

            Param[1, 0, 0] = obj.rol;
            Param[1, 1, 0] = "@rol";
            Param[1, 2, 0] = "nvarchar(40)";

            Param[2, 0, 0] = obj.observaciones;
            Param[2, 1, 0] = "@observaciones";
            Param[2, 2, 0] = "nvarchar(40)";

            try
            {
                string resul = wsc.Ejecutar(Param, "OPE_ActualizarRol", "ilion");

                if (resul.Equals("1"))
                {
                    confirmacion = true;
                }

            }
            catch (Exception e)
            {
                Console.Write(e.Message + "Error ");
                confirmacion = false;
            }

            return confirmacion;


        }

        public bool deleterol(roles obj)
        {

            bool confirmacion = false;
            string[, ,] Param = new string[1, 3, 1];
            Param[0, 0, 0] = obj.id_rol;
            Param[0, 1, 0] = "@id_rol";
            Param[0, 2, 0] = "nvarchar(40)";



            try
            {
                string resul = wsc.Ejecutar(Param, "OPE_EliminarRol", "ilion");

                if (resul.Equals("1"))
                {
                    confirmacion = true;
                }

            }
            catch (Exception e)
            {
                Console.Write(e.Message + "Error ");
                confirmacion = false;
            }

            return confirmacion;


        }


    }
}
