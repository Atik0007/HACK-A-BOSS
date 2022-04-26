/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todas las provincias de España.
 *
 * Documentación: https://www.el-tiempo.net/api
 *
 */

'use strict';
// fetch  solo NOMBRE_PROVINCIA de españa with then and catch
function getProvincias() {
  fetch('https://www.el-tiempo.net/api/json/v2/provincias')
    .then((response) => response.json())
    .then((data) => {
      const provincias = data.provincias;
      const provinciasArray2 = provincias.map(
        (provincia) => provincia.NOMBRE_PROVINCIA
      );
      console.log(provinciasArray2);
    })
    .catch((error) => console.log(error));
}
getProvincias();
