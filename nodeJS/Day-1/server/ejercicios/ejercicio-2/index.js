/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Crea una función en el módulo "simple-maths.js" que calcule el doble de un
 * número. Expórtala e impórtala en el "index.js".
 *
 * Este módulo debe recibir un argumento de tipo numérico e imprimir por consola
 * el doble de dicho valor utilizando para ello la función que importaremos de
 * "simple-maths.js".
 *
 */

const { calcularDoble } = require('./simple-maths');

const numero = parseInt(process.argv[2]);
console.log(calcularDoble(numero));
