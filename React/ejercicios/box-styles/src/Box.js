/**
 * Una aplicación React se divide en componentes. En este caso estamos
 * ante el componente "Box".
 *
 * Todos los componentes reciben como argumento unas propiedades a las que
 * React se refiere como "props". Para acceder a estas propiedades tenemos
 * dos opciones:
 *
 *  - Definir el parámetro "props" y posteriormente hacer destructuring.
 *
 *      const { myClass, myStyle, children } = props;
 *
 *  - Hacer destructuring de las propiedades que nos interesen directamente
 *    en los paréntisis de la función.
 *
 * En las "props" tenemos disponible la propiedad "children" que nos permite
 * acceder al contenido que hayamos escrito entre las etiquetas de apetura y
 * cierre del componente.
 *
 * Para aplicar una clase a una etiqueta HTML en React tenemos que utilizar
 * el atributo "className" (en lugar de "class").
 *
 * Para aplicar estilos "in-line" debemos utilizar el atributo "style" y pasarle
 * un objeto con las propiedades de CSS que queramos aplicar.
 *
 */

const Box = ({ myClass = '', myStyle, children }) => {
    const finalClass = `box ${myClass}`;

    const finalStyle = {
        ...myStyle,
        fontStyle: 'italic',
    };

    return (
        <div className={finalClass} style={finalStyle}>
            {children}
        </div>
    );
};

export default Box;
