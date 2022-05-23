/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Usando el módulo fs de NodeJS, escribe una función que acepte como argumentos
 * dos strings. El primer argumento representará el nombre del archivo (que deberá
 * estar ubicado en el directorio "ejercicio-2") y el segundo un contenido
 * a escribir en el archivo.
 *
 * Llama a esta función para escribir un fichero "file.txt" en el directorio actual
 * con el contenido "¡Hola Backend!".
 *
 */

const fs = require('fs');

const writeFile = async (fileName, content) => {
  try {
    await fs.writeFile(fileName, content, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  } catch (err) {
    console.error(err.message);
  }
};
writeFile('file.txt', '¡Hola Backend!');
