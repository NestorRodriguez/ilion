using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WsRestConsultaWebAsamblea.AD.Consultas;
using WsRestConsultaWebAsamblea.EN.Tablas;

namespace WsRestConsultaWebAsamblea.LN.Consultas
{
    public class ConsultaRol
    {

        public List<roles> Consulta_Rol()
        {

            List<roles> Listrol = new List<roles>();
            roles ObjError = new roles();

            try
            {

                rolesAD ObjhadAD = new rolesAD();

                Listrol = ObjhadAD.ConsultaRoles();
                if (Listrol.Count > 0)
                {

                    return Listrol;
                }
                else
                {
                    ObjError.Error = "No se encontraron registros";
                    Listrol.Add(ObjError);
                    return Listrol;
                }

            }
            catch (Exception)
            {
                ObjError.Error = "Ocurrio un error al consultar los roles.";
                Listrol.Add(ObjError);
                return Listrol;
            }
        }

        public List<roles> Consulta_Rol_id(roles objrol)
        {

            List<roles> Listrol = new List<roles>();
            roles ObjError = new roles();

            try
            {

                if (objrol.id_rol.Equals(""))
                {

                    roles Objhap = new roles();
                    Objhap.id_rol = objrol.id_rol;
                    rolesAD ObjhadAD = new rolesAD();
                    Listrol = ObjhadAD.ConsultaRolesID(Objhap);
                    if (Listrol.Count > 0)
                    {

                        return Listrol;
                    }
                    else
                    {
                        ObjError.Error = "No se encontraron registros";
                        Listrol.Add(ObjError);
                        return Listrol;
                    }
                }
                else
                {
                    ObjError.Error = "El numero de id no existe";
                    Listrol.Add(ObjError);
                    return Listrol;
                }

            }
            catch (Exception)
            {
                ObjError.Error = "Ocurrio un error al consultar los roles.";
                Listrol.Add(ObjError);
                return Listrol;
            }
        }
    }
}
