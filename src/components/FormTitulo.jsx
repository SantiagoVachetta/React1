import '../estilos/Form.css';
import Peticion from './Peticion';
import Precio from './Precio';
import React ,{useRef} from 'react';

function FormTitulo() {
  const mostrar = useRef();
  return (
    <main ref={mostrar} className='card'>
      <h3 className='subtitulo'>Ingresa los datos de la Vivienda</h3>
      <div className='container'>
       <Peticion />
       <Precio />
      </div>
    </main>
  );
}
export default FormTitulo;