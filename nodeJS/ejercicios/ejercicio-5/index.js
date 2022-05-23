/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Usando el módulo fs de NodeJS, muestra por pantalla el contenido de file.txt.
 * Puedes usar callbacks o promises, aunque lo recomendable es lo segundo.
 *
 * Pista: el contenido se lee como un Buffer de datos, usa UTF-8 para leerlo.
 *
 */

const fs = require('fs');

const readFile = async (file) => {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    } catch (err) {
      reject(err.massage);
    }
  });
};
readFile('fil.txt').then((data) => console.log(data));
