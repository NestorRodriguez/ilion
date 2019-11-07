/**
 * Controlador de Perfiles de usuario
 * @author yorito.msrs@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/query');

class QueryController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = QueryController;
