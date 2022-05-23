/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Muestra por pantalla la primera palabra que se le pasa como primer
 * argumento cuando se ejecuta este módulo desde bash.
 *
 */

// Muestra por pantalla la primera palabra que se le pasa como primer argumento cuando se ejecuta este módulo desde bash.

const argv = process.argv;
console.log(argv[2]);
