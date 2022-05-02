/**
 * ##############################################
 * ## toLocaleDateString && toLocaleTimeString ##
 * ##############################################
 *
 * Algunas propiedades del objeto Options y posibles valores:
 *
 *      - weekday: "long", "short", "narrow"
 *      - day: "numeric", "2-digit"
 *      - month: "numeric", "2-digit", "long", "short", "narrow"
 *      - year: "numeric", "2-digit"
 *      - hour: "numeric", "2-digit"
 *      - minute: "numeric", "2-digit"
 *      - second: "numeric", "2-digit"
 *
 * +info: https://medium.com/swlh/use-tolocaledatestring-to-format-javascript-dates-2959108ea020
 *
 */

const currentDate = () => {
    return new Date().toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};

export { currentDate };
