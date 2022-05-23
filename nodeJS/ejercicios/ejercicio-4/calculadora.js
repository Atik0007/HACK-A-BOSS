/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea una calculadora que reciba 3 argumentos: tipo de operación,
 * número A y número B.
 *
 *      - node calculadora.js 100 + 33
 *
 *      - node calculadora.js 100 - 33
 *
 * A mayores debe recibir la variable de entorno LANG. En función de
 * LANG se mostrará un resultado en un idioma diferente:
 *
 *      - Para: LANG=es node calculadora.js 10 + 20
 *      - Salida: El resultado de sumar 10 y 20 es: 30
 *
 *      - Para: LANG=en node calculadora.js 10 + 20
 *      - Salida: The result of adding 10 and 20 is: 30
 *
 */

const translations = require('./translations');
const { sum, sub } = require('./helpers');

const { LANG } = process.env;

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[4]);
const operation = process.argv[3];

try {
  /* Checking if the LANG variable is not equal to es or en. If it is not, it throws an error. */
  if (LANG !== 'es' && LANG !== 'en') {
    throw new Error('LANG debe ser es o en');
  }
  /* Creating an array with the operations that the calculator can do. */
  const allOperations = ['+', '-'];
  /* Checking if the operation is not included in the array of operations. If it is not, it throws an
  error. */
  if (!allOperations.includes(operation)) {
    throw new Error('La operación debe ser + o -');
  }
  /* Checking if the arguments are numbers. If they are not, it throws an error. */
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Los argumentos deben ser números');
  }

  let result;
  /* Checking if the operation is +. If it is, it calls the sum function. */
  switch (operation) {
    case '+':
      result = sum(a, b);
      break;
    case '-':
      result = sub(a, b);
      break;
    default:
      throw new Error('La operación debe ser + o -');
  }
  /* Printing the result in Spanish. */
  if (LANG === 'es') {
    console.log(
      `El resultado de ${translations[operation][LANG]} ${a} y ${b} es: ${result}`
    );
  }
  /* Printing the result in English. */
  if (LANG === 'en') {
    console.log(
      `The result of ${translations[operation][LANG]} ${a} and ${b} is: ${result}`
    );
  }
} catch (error) {
  console.error(error.message);
}
