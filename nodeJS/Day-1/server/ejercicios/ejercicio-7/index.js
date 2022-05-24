/**
 * #################
 * ## Ejercicio 7 ##
 * #################
 *
 * Usando el módulo fs de NodeJS, escribe una función que acepte como argumento
 * el nombre de un archivo o directorio:
 *
 *      - La función deberá imprimir el string "Es un directorio" si el Path que
 *        le pasamos es un directorio.
 *
 *      - La función deberá imprimir el string "Es un archivo" si el Path que le pasamos
 *        es un archivo.
 *
 *      - La función deberá imprimir el string "No existe" si el Path que le pasamos no
 *        existe.
 *
 *      - Si se produce algun otro error, deberá imprimir el error.
 *
 * Pista: indaga en Google qué método de fs podemos utilizar para saber si una ruta es un
 * directorio o un archivo.
 *
 */
const fs = require('fs');

const isDirectory = async (path) => {
  try {
    /* Checking if the path is a directory. */
    if (fs.lstatSync(path).isDirectory()) {
      console.log('Es un directorio');
    } /* Checking if the path is a file. */ else if (
      fs.lstatSync(path).isFile()
    ) {
      console.log('Es un archivo');
    } /* Checking if the path does not exist. */ else if (
      !fs.existsSync(path)
    ) {
      console.log('No existe');
    } else {
      console.log(err);
    }
  } catch (err) {
    console.error(err.message);
  }
};

isDirectory('/home/powercoders/Documents/hacka a boss/nodeJS/ejercicios');
