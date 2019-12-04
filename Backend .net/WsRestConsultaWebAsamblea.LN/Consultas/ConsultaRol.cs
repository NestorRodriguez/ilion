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
        List<roles> Listrol = new List<roles>();
        roles ObjError = new roles();
        public List<roles> Consulta_Rol()
        {

          

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

           

            try
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
            catch (Exception)
            {
                ObjError.Error = "Ocurrio un error al consultar los roles.";
                Listrol.Add(ObjError);
                return Listrol;
            }
        }

        public roles postrol(roles obj)
        {
            try
            {

                roles Objhap = new roles();
                Objhap.rol = obj.rol;
                Objhap.observaciones = obj.observaciones;
                
                rolesAD ObjhadAD = new rolesAD();
                bool resultado = ObjhadAD.postrol(Objhap);
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

        public roles putrol(roles obj)
        {
            try
            {

                roles Objhap = new roles();
                Objhap.id_rol = obj.id_rol;
                Objhap.rol = obj.rol;
                Objhap.observaciones = obj.observaciones;

                rolesAD ObjhadAD = new rolesAD();
                bool resultado = ObjhadAD.putrol(Objhap);
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

        public roles deleterol(roles obj)
        {
            try
            {

                roles Objhap = new roles();
                Objhap.id_rol = obj.id_rol;

                rolesAD ObjhadAD = new rolesAD();
                bool resultado = ObjhadAD.deleterol(Objhap);
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
