using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WsRestConsultaWebAsamblea.LN.Modelo
{
    public class Respuesta
    {
        public int estado;
        public Dictionary<string, object> contenido;

        public Respuesta() { 
            estado = 200;
            contenido = new Dictionary<string, object>();
        }
        public Respuesta(int estado, string mensaje) {
            this.estado = estado;
            contenido = new Dictionary<string, object>()
            {
                {"Mensaje",mensaje}
            };
        }
    }
}
