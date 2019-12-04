using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WsRestConsultaWebAsamblea.AD.Consultas;
using WsRestConsultaWebAsamblea.EN.Tablas;

namespace WsRestConsultaWebAsamblea.LN.Consultas
{
    public class consulta_usuario
    {

        List<usuario> List = new List<usuario>();
        usuario ObjError = new usuario();

        public List<usuario> Consulta_usuario_id(usuario obj)
        {
            try
            {
               
                    usuario Objhap = new usuario();
                    Objhap.id_registro = obj.id_registro;
                    usuarioAD ObjhadAD = new usuarioAD();
                    List = ObjhadAD.ConsultausuarioID(Objhap);
                    if (List.Count > 0)
                    {
                        return List;
                    }
                    else
                    {
                        ObjError.Error = "No se encontraron registros";
                        List.Add(ObjError);
                        return List;
                    }
                
            }
            catch (Exception)
            {
                ObjError.Error = "Ocurrio un error al consulta.";
                List.Add(ObjError);
                return List;
            }
        }

        public List<usuario> Consulta_usuario()
        {
            try
            {
                usuarioAD ObjhadAD = new usuarioAD();
                List = ObjhadAD.ConsultaUsuario();
                if (List.Count > 0)
                {
                    return List;
                }
                else
                {
                    ObjError.Error = "No se encontraron registros";
                    List.Add(ObjError);
                    return List;
                }

            }
            catch (Exception)
            {
                ObjError.Error = "Ocurrio un error al consulta.";
                List.Add(ObjError);
                return List;
            }
        }


        

        public usuario postusuario(usuario obj)
        {
            try
            {
                
                    usuario Objhap = new usuario();
                    Objhap.nombre = obj.nombre;
                    Objhap.email = obj.email;
                    Objhap.id_ident = obj.id_ident;
                    Objhap.num_ident = obj.num_ident;
                    Objhap.contraseña = obj.contraseña;
                    Objhap.id_rol = obj.id_rol;
                    usuarioAD ObjhadAD = new usuarioAD();
                    bool resultado = ObjhadAD.postusuario(Objhap);
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

        public usuario putusuario(usuario obj)
        {
            try
            {
                
                    usuario Objhap = new usuario();
                    Objhap.id_registro = obj.id_registro;
                    Objhap.nombre = obj.nombre;
                    Objhap.email = obj.email;
                    Objhap.id_ident = obj.id_ident;
                    Objhap.num_ident = obj.num_ident;
                    Objhap.contraseña = obj.contraseña;
                    Objhap.id_rol = obj.id_rol;
                    usuarioAD ObjhadAD = new usuarioAD();
                    bool resultado = ObjhadAD.putusuario(Objhap);
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

        public usuario deleteusuario(usuario obj)
        {
            try
            {
                
                    usuario Objhap = new usuario();
                    Objhap.id_registro = obj.id_registro;
                   
                    usuarioAD ObjhadAD = new usuarioAD();
                    bool resultado = ObjhadAD.deleteusuario(Objhap);
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
