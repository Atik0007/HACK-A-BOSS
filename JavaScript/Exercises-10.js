/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Obtener un array con las series de las 5 primeras páginas.
 *
 * Para este ejercicio necesitarás agregar al final de la URL el query
 * param "page" de la siguiente forma "?page=2". Esto te permitirá moverte
 * por las distintas páginas simplemente cambiando el número de la misma.
 *
 * API: https://www.episodate.com/api
 *
 */

'use strict';
async function getSeries() {
  try {
    for (let i = 1; i <= 5; i++) {
      const response = await fetch(
        `https://www.episodate.com/api/most-popular?page=${i}`
      );
      const data = await response.json();
      const series = data.tv_shows;
      const seriesArray = series.map((serie) => serie.name);
      console.log(seriesArray);
    }
  } catch (error) {
    console.log(error);
  }
}
getSeries();
