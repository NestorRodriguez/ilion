/**
 * Funcionalidad para implementar las respuestas del controller
 *@author yorito.msrs@gmail.com
 */

module.exports = ({
    success: (data = {}, status = 200) => {
        return { data, status }
    },
    error: (msg, status = 400) => {
        return {
            error: {
                type: msg.type,
                title: msg.title,
                description: msg.description
            },
            status: status,
        }
    }
});
