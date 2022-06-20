import Box from './Box';
import './App.css';

// El nombre de los atributos que definimos en estos componentes es "inventado", no
// tienen por qué llamarse de una forma determinada. Eso sí, hemos de usar el mismo
// nombre a la hora de hacer el destructuring en el fichero del componente.
function App() {
    return (
        <div>
            <Box
                myClass='box--small'
                myStyle={{ backgroundColor: 'lightblue' }}
            >
                small lightblue box
            </Box>

            <Box myClass='box--medium' myStyle={{ backgroundColor: 'pink' }}>
                medium pink box
            </Box>

            <Box myClass='box--large' myStyle={{ backgroundColor: 'orange' }}>
                large orange box
            </Box>
        </div>
    );
}

export default App;
