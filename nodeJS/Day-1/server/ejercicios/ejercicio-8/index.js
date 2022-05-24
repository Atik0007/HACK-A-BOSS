/**
 * #################
 * ## Ejercicio 8 ##
 * #################
 *
 * Usando el módulo fs de NodeJS, escribe una función que acepte como argumento un
 * nombre de archivo:
 *
 *      - La función deberá borrar ese archivo del directorio actual.
 *
 *      - La función deberá imprimir el string "No existe" si el nombre de archivo
 *        que le pasamos no existe.
 *
 *      - Si se produce algun otro error, deberá imprimir el error.
 *
 */

const fs = require('fs');

const borrarArchivo = async (nombreArchivo) => {
  try {
    await fs.unlink(nombreArchivo);
    console.log('Archivo borrado');
  } catch (error) {
    console.log('No existe');
  }
};
borrarArchivo('text.txt');
