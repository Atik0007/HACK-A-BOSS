/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
 * provincia de Lugo.
 *
 * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
 *
 * Documentación: https://www.el-tiempo.net/api
 *
 */

'use strict';
function getMunicipios() {
  fetch('https://www.el-tiempo.net/api/json/v2/municipios')
    .then((response) => response.json())
    .then((data) => {
      const provincias = data;
      // nombre de todos los municipios de la provincia de Lugo
      const municipios = provincias
        .filter((provincia) => provincia.NOMBRE_PROVINCIA === 'Lugo')
        .map((provincia) => provincia.NOMBRE);
      console.log(municipios);
      // ordenar por orden alfabético inverso
      const municipiosOrdenados = municipios.sort((a, b) => b.localeCompare(a));
      console.log(municipiosOrdenados);
    })
    .catch((error) => console.log(error));
}
getMunicipios();
