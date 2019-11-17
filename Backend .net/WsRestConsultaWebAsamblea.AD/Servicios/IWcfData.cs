using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace WsRestConsultaWebAsamblea.AD.Servicios
{
    [ServiceContract]
    public interface IWcfData
      {
        [OperationContract]
        SqlConnection ConectaSql(string key);

        [OperationContract]
        void CreaParametro(int tamaño);

        [OperationContract]
        void AdicionaParametro(String param, object valor, int posicion);

        [OperationContract]
        string Actualizar(string procedimiento, SqlParameter[] parametros, SqlConnection ActConexion);

        [OperationContract]
        List<string[,]> LlenarLista(string[, ,] Parametro, string sentenciaSql, string key, string TipoCons, string TipConeccion);

        [OperationContract]
        string Ejecutar(string[, ,] Valor, string procedimiento, string strConn);

        [OperationContract]
        string ConsultaSqlDato(string procedimiento, string key);

    }
}
