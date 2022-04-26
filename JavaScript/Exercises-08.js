/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todas las provincias de España.
 *
 * - Resuélvelo con async / await.
 *
 * API: https://www.el-tiempo.net/api
 *
 */

'use strict';
async function getProvincias() {
  try {
    const response = await fetch(
      'https://www.el-tiempo.net/api/json/v2/provincias'
    );
    const data = await response.json();
    const provincias = data.provincias;
    const provinciasArray = provincias.map(
      (provincia) => provincia.NOMBRE_PROVINCIA
    );
    console.log(provinciasArray);
  } catch (error) {
    console.log(error);
  }
}
getProvincias();
