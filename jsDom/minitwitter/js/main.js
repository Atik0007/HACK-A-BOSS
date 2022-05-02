/**
 * Ejemplo de la estructura final:
 *
 *  <ul id="tweets">
 *      <li>
 *          <p>Lo que escriba el usuario en el input.</p>
 *          <footer>
 *              <time>23/3/2021</time>
 *              <button class="delete">Borrar</button>
 *          </footer>
 *      </li>
 *      <li>
 *          <p>Lo que escriba el usuario en el input.</p>
 *          <footer>
 *              <time>23/3/2021</time>
 *              <button class="delete">Borrar</button>
 *          </footer>
 *      </li>
 *      <li>
 *          (...)
 *      </li>
 *  </ul>
 */

// 1. Importamos la función "currentDate" del fichero "helpers.js".
import { currentDate } from './helpers.js';

// 2. Seleccionamos los nodos con los que vamos a trabajar.
const form = document.forms.twitter;
const tweetsUl = document.querySelector('ul#tweets');

/**
 * ###########################
 * ## Agregar nuevos tweets ##
 * ###########################
 */

form.addEventListener('submit', (e) => {
  // 1. Prevenimos el comportamiento por defecto del evento submit.
  e.preventDefault();
  // 2. Seleccionamos el input.
  const input = form.querySelector('input');
  // 3. Si la longitud del contenido del input es menor que 5 lanzamos un
  // alert y terminamos la función.
  if (input.value.length < 5) {
    // error que indique que la longitud no puede ser inferior a 5 caracteres.
    alert('El tweet debe tener al menos 5 caracteres.');
    return;
  }
  // 4. Si la longitud del contenido del input es mayor que 100 lanzamos un
  // alert y terminamos la función.
  if (input.value.length > 100) {
    // error que indique que la longitud no puede ser mayor a 100 caracteres.
    alert('El tweet no puede tener más de 100 caracteres.');
    return;
  }

  // 5. Creamos el li.
  const li = document.createElement('li');

  // 6. Agregamos el contenido al li.
  li.innerHTML = `
        <p>${input.value}</p>
        <footer>
            <time>${currentDate()}</time>
            <button class="delete">Borrar</button>
        </footer>
    `;

  // 7. Agregamos el li como hijo del ul.
  tweetsUl.appendChild(li);

  // 8. Vaciamos el input.
  input.value = '';
});

/**
 * #####################
 * ## Eliminar tweets ##
 * #####################
 */

tweetsUl.addEventListener('click', (e) => {
  // 1. Seleccionamos de forma inequívoca el elemento sobre el cuál hemos
  // hecho click.
  const element = e.target;
  // 2. Comprobamos si el nodo clickado es el botón con clase "delete".
  if (element.classList.contains('delete')) {
    // 2.1. Seleccionamos el li más cercano al botón.
    const li = element.parentNode.parentNode;

    // 2.2. Eliminamos el li.
    tweetsUl.removeChild(li);
  }
});
