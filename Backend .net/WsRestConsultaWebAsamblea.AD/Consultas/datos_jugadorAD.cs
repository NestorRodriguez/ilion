using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WsRestConsultaWebAsamblea.AD.Servicios;
using WsRestConsultaWebAsamblea.EN.Tablas;

namespace WsRestConsultaWebAsamblea.AD.Consultas
{
    public class datos_jugadorAD
    {
        WcfData wsc = new WsRestConsultaWebAsamblea.AD.Servicios.WcfData();

        public List<datos_jugador> get_datos_jugador()
        {

            List<string[,]> list = new List<string[,]>();
            List<datos_jugador> list2 = new List<datos_jugador>();
            string[, ,] Param = new string[0, 0, 0];
            list = wsc.LlenarLista(Param, "OPE_get_datos_jugador", "ilion", "SP", "Sql");
            string[,] List_;
            for (int i = 0; i < list.Count; i++)
            {
                datos_jugador objad = new datos_jugador();
                List_ = list[i];
                objad.id_jugador = List_[0, 1].ToString();
                objad.nombre_jugaro = List_[1, 1].ToString();
                objad.fecha_nacimiento = List_[2, 1].ToString();
                objad.lugar = List_[3, 1].ToString();
                objad.documento_identidad = List_[4, 1].ToString();
                objad.tipo_documento = List_[5, 1].ToString();
                objad.genero = List_[6, 1].ToString();
                objad.direccion_residencia = List_[7, 1].ToString();
                objad.barrio = List_[8, 1].ToString();
                objad.telefono = List_[9, 1].ToString();
                objad.celular = List_[10, 1].ToString();
                objad.email = List_[11, 1].ToString();
                objad.whatsapp = List_[12, 1].ToString();
                objad.edad = List_[13, 1].ToString();
                objad.peso = List_[14, 1].ToString();
                objad.estatura = List_[15, 1].ToString();
                objad.talla = List_[16, 1].ToString();
                objad.email = List_[17, 1].ToString();
                objad.rh = List_[18, 1].ToString();
                objad.pie_habil = List_[19, 1].ToString();
                objad.institucion = List_[20, 1].ToString();
                objad.grado = List_[21, 1].ToString();
                objad.eps = List_[22, 1].ToString();
                objad.prepagada = List_[23, 1].ToString();
                objad.sisben = List_[24, 1].ToString();
                objad.otra_clinica = List_[25, 1].ToString();
                objad.pregunta1 = List_[26, 1].ToString();
                objad.pregunta2 = List_[27, 1].ToString();
                objad.pregunta3 = List_[28, 1].ToString();
                objad.id_registro = List_[29, 1].ToString();
                list2.Add(objad);
            }
            return list2;

        }

        public List<datos_jugador> get_datos_jugador(datos_jugador obj)
        {

            List<string[,]> list = new List<string[,]>();
            List<datos_jugador> list2 = new List<datos_jugador>();
            string[, ,] Param = new string[1, 3, 1];

            Param[0, 0, 0] = obj.id_jugador;
            Param[0, 1, 0] = "@id_jugador";
            Param[0, 2, 0] = "varchar(40)";

            list = wsc.LlenarLista(Param, "OPE_get_datos_jugador_id", "ilion", "SP", "Sql");
            string[,] List_;
            for (int i = 0; i < list.Count; i++)
            {
                datos_jugador objad = new datos_jugador();
                List_ = list[i];
                objad.id_jugador = List_[0, 1].ToString();
                objad.nombre_jugaro = List_[1, 1].ToString();
                objad.fecha_nacimiento = List_[2, 1].ToString();
                objad.lugar = List_[3, 1].ToString();
                objad.documento_identidad = List_[4, 1].ToString();
                objad.tipo_documento = List_[5, 1].ToString();
                objad.genero = List_[6, 1].ToString();
                objad.direccion_residencia = List_[7, 1].ToString();
                objad.barrio = List_[8, 1].ToString();
                objad.telefono = List_[9, 1].ToString();
                objad.celular = List_[10, 1].ToString();
                objad.email = List_[11, 1].ToString();
                objad.whatsapp = List_[12, 1].ToString();
                objad.edad = List_[13, 1].ToString();
                objad.peso = List_[14, 1].ToString();
                objad.estatura = List_[15, 1].ToString();
                objad.talla = List_[16, 1].ToString();
                objad.email = List_[17, 1].ToString();
                objad.rh = List_[18, 1].ToString();
                objad.pie_habil = List_[19, 1].ToString();
                objad.institucion = List_[20, 1].ToString();
                objad.grado = List_[21, 1].ToString();
                objad.eps = List_[22, 1].ToString();
                objad.prepagada = List_[23, 1].ToString();
                objad.sisben = List_[24, 1].ToString();
                objad.otra_clinica = List_[25, 1].ToString();
                objad.pregunta1 = List_[26, 1].ToString();
                objad.pregunta2 = List_[27, 1].ToString();
                objad.pregunta3 = List_[28, 1].ToString();
                objad.id_registro = List_[29, 1].ToString();
                list2.Add(objad);
            }
            return list2;

        }

        public bool post_datos_jugador(datos_jugador obj)
        {

            bool confirmacion = false;
            string[, ,] Param = new string[29, 3, 1];


            Param[0, 0, 0] = obj.nombre_jugaro;
            Param[0, 1, 0] = "@nombre_jugaro";
            Param[0, 2, 0] = "varchar(40)";

            Param[1, 0, 0] = obj.fecha_nacimiento;
            Param[1, 1, 0] = "@fecha_nacimiento";
            Param[1, 2, 0] = "varchar(40)";

            Param[2, 0, 0] = obj.lugar;
            Param[2, 1, 0] = "@lugar";
            Param[2, 2, 0] = "varchar(40)";

            Param[3, 0, 0] = obj.documento_identidad;
            Param[3, 1, 0] = "@documento_identidad";
            Param[3, 2, 0] = "varchar(40)";

            Param[4, 0, 0] = obj.tipo_documento;
            Param[4, 1, 0] = "@tipo_documento";
            Param[4, 2, 0] = "varchar(40)";

            Param[5, 0, 0] = obj.genero;
            Param[5, 1, 0] = "@genero";
            Param[5, 2, 0] = "varchar(40)";

            Param[6, 0, 0] = obj.direccion_residencia;
            Param[6, 1, 0] = "@direccion_residencia";
            Param[6, 2, 0] = "varchar(40)";

            Param[7, 0, 0] = obj.barrio;
            Param[7, 1, 0] = "@barrio";
            Param[7, 2, 0] = "varchar(40)";

            Param[8, 0, 0] = obj.telefono;
            Param[8, 1, 0] = "@telefono";
            Param[8, 2, 0] = "varchar(40)";

            Param[9, 0, 0] = obj.celular;
            Param[9, 1, 0] = "@celular";
            Param[9, 2, 0] = "varchar(40)";

            Param[10, 0, 0] = obj.email;
            Param[10, 1, 0] = "@email";
            Param[10, 2, 0] = "varchar(40)";
            
            Param[11, 0, 0] = obj.whatsapp;
            Param[11, 1, 0] = "@whatsapp";
            Param[11, 2, 0] = "varchar(40)";

            Param[12, 0, 0] = obj.edad;
            Param[12, 1, 0] = "@edad";
            Param[12, 2, 0] = "varchar(40)";

            Param[13, 0, 0] = obj.peso;
            Param[13, 1, 0] = "@peso";
            Param[13, 2, 0] = "varchar(40)";

            Param[14, 0, 0] = obj.estatura;
            Param[14, 1, 0] = "@estatura";
            Param[14, 2, 0] = "varchar(40)";

            Param[15, 0, 0] = obj.talla;
            Param[15, 1, 0] = "@talla";
            Param[15, 2, 0] = "varchar(40)";

            Param[16, 0, 0] = obj.rh;
            Param[16, 1, 0] = "@rh";
            Param[16, 2, 0] = "varchar(40)";

            Param[17, 0, 0] = obj.pie_habil;
            Param[17, 1, 0] = "@pie_habil";
            Param[17, 2, 0] = "varchar(40)";

            Param[18, 0, 0] = obj.institucion;
            Param[18, 1, 0] = "@institucion";
            Param[18, 2, 0] = "varchar(40)";

            Param[19, 0, 0] = obj.grado;
            Param[19, 1, 0] = "@grado";
            Param[19, 2, 0] = "varchar(40)";

            Param[20, 0, 0] = obj.eps;
            Param[20, 1, 0] = "@eps";
            Param[20, 2, 0] = "varchar(40)";

            Param[21, 0, 0] = obj.prepagada;
            Param[21, 1, 0] = "@prepagada";
            Param[21, 2, 0] = "varchar(40)";

            Param[22, 0, 0] = obj.sisben;
            Param[22, 1, 0] = "@sisben";
            Param[22, 2, 0] = "varchar(40)";

            Param[23, 0, 0] = obj.otra_clinica;
            Param[23, 1, 0] = "@otra_clinica";
            Param[23, 2, 0] = "varchar(40)";

            Param[24, 0, 0] = obj.email;
            Param[24, 1, 0] = "@email";
            Param[24, 2, 0] = "varchar(40)";

            Param[25, 0, 0] = obj.pregunta1;
            Param[25, 1, 0] = "@pregunta1";
            Param[25, 2, 0] = "varchar(40)";

            Param[26, 0, 0] = obj.pregunta2;
            Param[26, 1, 0] = "@pregunta2";
            Param[26, 2, 0] = "varchar(40)";

            Param[27, 0, 0] = obj.pregunta3;
            Param[27, 1, 0] = "@pregunta3";
            Param[27, 2, 0] = "varchar(40)";

            Param[28, 0, 0] = obj.id_registro;
            Param[28, 1, 0] = "@id_registro";
            Param[28, 2, 0] = "varchar(40)";
            try
            {
                string resul = wsc.Ejecutar(Param, "OPE_post_datos_jugador", "ilion");

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

        public bool put_datos_jugador(datos_jugador obj)
        {

            bool confirmacion = false;
            string[, ,] Param = new string[30, 3, 1];


            Param[0, 0, 0] = obj.id_jugador;
            Param[0, 1, 0] = "@id_jugador";
            Param[0, 2, 0] = "varchar(40)";

            Param[1, 0, 0] = obj.nombre_jugaro;
            Param[1, 1, 0] = "@nombre_jugaro";
            Param[1, 2, 0] = "varchar(40)";

            Param[2, 0, 0] = obj.fecha_nacimiento;
            Param[2, 1, 0] = "@fecha_nacimiento";
            Param[2, 2, 0] = "varchar(40)";

            Param[3, 0, 0] = obj.lugar;
            Param[3, 1, 0] = "@lugar";
            Param[3, 2, 0] = "varchar(40)";

            Param[4, 0, 0] = obj.documento_identidad;
            Param[4, 1, 0] = "@documento_identidad";
            Param[4, 2, 0] = "varchar(40)";

            Param[5, 0, 0] = obj.tipo_documento;
            Param[5, 1, 0] = "@tipo_documento";
            Param[5, 2, 0] = "varchar(40)";

            Param[6, 0, 0] = obj.genero;
            Param[6, 1, 0] = "@genero";
            Param[6, 2, 0] = "varchar(40)";

            Param[7, 0, 0] = obj.direccion_residencia;
            Param[7, 1, 0] = "@direccion_residencia";
            Param[7, 2, 0] = "varchar(40)";

            Param[8, 0, 0] = obj.barrio;
            Param[8, 1, 0] = "@barrio";
            Param[8, 2, 0] = "varchar(40)";

            Param[9, 0, 0] = obj.telefono;
            Param[9, 1, 0] = "@telefono";
            Param[9, 2, 0] = "varchar(40)";

            Param[10, 0, 0] = obj.celular;
            Param[10, 1, 0] = "@celular";
            Param[10, 2, 0] = "varchar(40)";

            Param[11, 0, 0] = obj.email;
            Param[11, 1, 0] = "@email";
            Param[11, 2, 0] = "varchar(40)";

            Param[12, 0, 0] = obj.whatsapp;
            Param[12, 1, 0] = "@whatsapp";
            Param[12, 2, 0] = "varchar(40)";

            Param[13, 0, 0] = obj.edad;
            Param[13, 1, 0] = "@edad";
            Param[13, 2, 0] = "varchar(40)";

            Param[14, 0, 0] = obj.peso;
            Param[14, 1, 0] = "@peso";
            Param[14, 2, 0] = "varchar(40)";

            Param[15, 0, 0] = obj.estatura;
            Param[15, 1, 0] = "@estatura";
            Param[15, 2, 0] = "varchar(40)";

            Param[16, 0, 0] = obj.talla;
            Param[16, 1, 0] = "@talla";
            Param[16, 2, 0] = "varchar(40)";

            Param[17, 0, 0] = obj.rh;
            Param[17, 1, 0] = "@rh";
            Param[17, 2, 0] = "varchar(40)";

            Param[18, 0, 0] = obj.pie_habil;
            Param[18, 1, 0] = "@pie_habil";
            Param[18, 2, 0] = "varchar(40)";

            Param[19, 0, 0] = obj.institucion;
            Param[19, 1, 0] = "@institucion";
            Param[19, 2, 0] = "varchar(40)";

            Param[20, 0, 0] = obj.grado;
            Param[20, 1, 0] = "@grado";
            Param[20, 2, 0] = "varchar(40)";

            Param[21, 0, 0] = obj.eps;
            Param[21, 1, 0] = "@eps";
            Param[21, 2, 0] = "varchar(40)";

            Param[22, 0, 0] = obj.prepagada;
            Param[22, 1, 0] = "@prepagada";
            Param[22, 2, 0] = "varchar(40)";

            Param[23, 0, 0] = obj.sisben;
            Param[23, 1, 0] = "@sisben";
            Param[23, 2, 0] = "varchar(40)";

            Param[24, 0, 0] = obj.otra_clinica;
            Param[24, 1, 0] = "@otra_clinica";
            Param[24, 2, 0] = "varchar(40)";

            Param[25, 0, 0] = obj.email;
            Param[25, 1, 0] = "@email";
            Param[25, 2, 0] = "varchar(40)";

            Param[26, 0, 0] = obj.pregunta1;
            Param[26, 1, 0] = "@pregunta1";
            Param[26, 2, 0] = "varchar(40)";

            Param[27, 0, 0] = obj.pregunta2;
            Param[27, 1, 0] = "@pregunta2";
            Param[27, 2, 0] = "varchar(40)";

            Param[28, 0, 0] = obj.pregunta3;
            Param[28, 1, 0] = "@pregunta3";
            Param[28, 2, 0] = "varchar(40)";

            Param[29, 0, 0] = obj.id_registro;
            Param[29, 1, 0] = "@id_registro";
            Param[29, 2, 0] = "varchar(40)";
            try
            {
                string resul = wsc.Ejecutar(Param, "OPE_put_datos_jugador", "ilion");

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

        public bool delete_datos_jugador(datos_jugador obj)
        {

            bool confirmacion = false;
            string[, ,] Param = new string[1, 3, 1];
            Param[0, 0, 0] = obj.id_jugador;
            Param[0, 1, 0] = "@id_jugador";
            Param[0, 2, 0] = "nvarchar(40)";



            try
            {
                string resul = wsc.Ejecutar(Param, "OPE_delete_datos_jugador", "ilion");

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
