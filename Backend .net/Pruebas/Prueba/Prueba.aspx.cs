using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WsRestConsultaWebAsamblea.EN.Tablas;
using WsRestConsultaWebAsamblea.LN.Consultas;

namespace Pruebas.Prueba
{
    public partial class Prueba : System.Web.UI.Page
    {
        roles objhad = new roles();
        ConsultaRol objeconsulta = new ConsultaRol();
        protected void Page_Load(object sender, EventArgs e)
        {
            Rol();
        }

        public WsRestConsultaWebAsamblea.LN.Modelo.Respuesta Rol() 
        {
        
            WsRestConsultaWebAsamblea.LN.Modelo.Respuesta respuesta = new WsRestConsultaWebAsamblea.LN.Modelo.Respuesta();
            respuesta.contenido.Add("lista_roles", objeconsulta.Consulta_Rol());
            return respuesta;
        
        }
    }
}