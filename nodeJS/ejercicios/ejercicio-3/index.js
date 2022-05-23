/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Modifica el ejercicio anterior para que cuando el argumento que le
 * llega a la función "double(x)" del módulo "simple-maths" no sea un número,
 * lance un error.
 *
 * Capturar el error en el indes.js y muestra al usuario el mensaje: "El argumento
 * debe ser un número por pantalla".
 *
 */

const { double } = require('./simple-maths');

const numero = parseInt(process.argv[2]);

try {
  console.log(double(numero));
} catch (error) {
  console.error(error.message);
}
