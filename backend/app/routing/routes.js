/**
 * Funcionalidad que implementa las rutas que van a ser configuradas en la aplicación
 * por los Controladores
 *
 * @author yorito.msrs@gmail.com
 */

const profile = require('./api/profile');
const user = require('./api/user');
const query = require('./api/query');

module.exports = [
    profile,
    user,
    query
];
