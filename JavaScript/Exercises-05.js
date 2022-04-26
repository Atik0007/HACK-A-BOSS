/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función "alarm" que reciba como argumento un número de
 * segundos.
 *
 * La función deberá mostrar por consola una cuenta atrás hasta llegar
 * a 0, en ese momento muestra un mensaje que indique que la alarma está
 * sonando.
 *
 */

'use strict';

function alarm(sec) {
  for (let i = sec; i >= 0; i--) {
    if (i === 0) {
      console.log('Alarma activada');
      break;
    }
    console.log(i);
    setTimeout(() => {}, 1000);
  }
}
alarm(10);
