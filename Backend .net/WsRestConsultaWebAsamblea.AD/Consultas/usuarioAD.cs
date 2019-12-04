using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WsRestConsultaWebAsamblea.AD.Servicios;
using WsRestConsultaWebAsamblea.EN.Tablas;

namespace WsRestConsultaWebAsamblea.AD.Consultas
{
    public class usuarioAD
    {
        WcfData wsc = new WsRestConsultaWebAsamblea.AD.Servicios.WcfData();

        public List<usuario> ConsultaUsuario()
        {

            List<string[,]> list = new List<string[,]>();
            List<usuario> list2 = new List<usuario>();
            string[, ,] Param = new string[0, 0, 0];
            list = wsc.LlenarLista(Param, "ConsultarUsuario", "ilion", "SP", "Sql");
            string[,] List_;
            for (int i = 0; i < list.Count; i++)
            {
                usuario objad = new usuario();
                List_ = list[i];
                objad.id_registro = List_[0, 1].ToString();
                objad.nombre = List_[1, 1].ToString();
                objad.email = List_[1, 1].ToString();
                objad.id_ident = List_[1, 1].ToString();
                objad.num_ident = List_[1, 1].ToString();
                objad.contraseña = List_[1, 1].ToString();
                objad.id_rol= List_[1, 1].ToString();
                list2.Add(objad);
            }
            return list2;

        }

        public List<usuario> ConsultausuarioID(usuario obj)
        {

            List<string[,]> list = new List<string[,]>();
            List<usuario> list2 = new List<usuario>();
            string[, ,] Param = new string[1, 3, 1];

            Param[0, 0, 0] = obj.id_registro.ToString();
            Param[0, 1, 0] = "@id_registro";
            Param[0, 2, 0] = "varchar(40)";

            list = wsc.LlenarLista(Param, "ConsultarusuarioID", "ilion", "SP", "Sql");
            string[,] List_;
            for (int i = 0; i < list.Count; i++)
            {
                usuario objad = new usuario();
                List_ = list[i];
                objad.id_registro = List_[0, 1].ToString();
                objad.nombre = List_[1, 1].ToString();
                objad.email = List_[1, 1].ToString();
                objad.id_ident = List_[1, 1].ToString();
                objad.num_ident = List_[1, 1].ToString();
                objad.contraseña = List_[1, 1].ToString();
                objad.id_rol = List_[1, 1].ToString();
                list2.Add(objad);
            }
            return list2;

        }

        public bool postusuario(usuario obj)
        {

            bool confirmacion = false;
            string[, ,] Param = new string[6, 3, 1];
           

            Param[0, 0, 0] = obj.nombre;
            Param[0, 1, 0] = "@nombre";
            Param[0, 2, 0] = "varchar(40)";

            Param[1, 0, 0] = obj.email;
            Param[1, 1, 0] = "@email";
            Param[1, 2, 0] = "varchar(40)";

            Param[2, 0, 0] = obj.id_ident;
            Param[2, 1, 0] = "@id_ident";
            Param[2, 2, 0] = "varchar(40)";

            Param[3, 0, 0] = obj.num_ident;
            Param[3, 1, 0] = "@num_ident";
            Param[3, 2, 0] = "varchar(40)";

            Param[4, 0, 0] = obj.contraseña;
            Param[4, 1, 0] = "@contraseña";
            Param[4, 2, 0] = "varchar(40)";

            Param[5, 0, 0] = obj.id_rol;
            Param[5, 1, 0] = "@id_rol";
            Param[5, 2, 0] = "varchar(40)";

            try
            {
                string resul = wsc.Ejecutar(Param, "OPE_postusuario", "ilion");

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

        public bool putusuario(usuario obj)
        {

            bool confirmacion = false;
            string[, ,] Param = new string[7, 3, 1];
            Param[0, 0, 0] = obj.id_registro;
            Param[0, 1, 0] = "@id_registro";
            Param[0, 2, 0] = "nvarchar(40)";

            Param[1, 0, 0] = obj.nombre;
            Param[1, 1, 0] = "@nombre";
            Param[1, 2, 0] = "nvarchar(40)";

            Param[2, 0, 0] = obj.email;
            Param[2, 1, 0] = "@email";
            Param[2, 2, 0] = "nvarchar(40)";

            Param[3, 0, 0] = obj.id_ident;
            Param[3, 1, 0] = "@id_ident";
            Param[3, 2, 0] = "nvarchar(40)";

            Param[4, 0, 0] = obj.num_ident;
            Param[4, 1, 0] = "@num_ident";
            Param[4, 2, 0] = "nvarchar(40)";

            Param[5, 0, 0] = obj.contraseña;
            Param[5, 1, 0] = "@contraseña";
            Param[5, 2, 0] = "nvarchar(40)";

            Param[6, 0, 0] = obj.id_rol;
            Param[6, 1, 0] = "@id_rol";
            Param[6, 2, 0] = "nvarchar(40)";

            try
            {
                string resul = wsc.Ejecutar(Param, "OPE_putusuario", "ilion");

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

        public bool deleteusuario(usuario obj)
        {

            bool confirmacion = false;
            string[, ,] Param = new string[1, 3, 1];
            Param[0, 0, 0] = obj.id_registro;
            Param[0, 1, 0] = "@id_registro";
            Param[0, 2, 0] = "nvarchar(40)";

         

            try
            {
                string resul = wsc.Ejecutar(Param, "OPE_deleteusuario", "ilion");

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
