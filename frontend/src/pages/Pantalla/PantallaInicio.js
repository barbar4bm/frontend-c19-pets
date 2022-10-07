import React from 'react'
import './PantallaInicio.css';
import { Barra } from '../../components/barra/barra';
import { Footer } from '../commerce/commons/Footer';

export const PantallaInicio = () => {
  
  return (
   <>
      <body>
        <Barra/>
        <div className='barra'> 
          <div className='imagen-logo'>
            <div className='text-clinica'>Clinica veterinaria</div>
            <div className='text-nombre'>Puertas del mar</div></div>

        </div>  
        
      </body>
      <div className='contenedor'>
         <div className='imagen-inicial'></div>
         <div className='tarjet text-center'> Texto de información

          <p>Clinica especializada en atender a sus clientes de la manera mas segura y eficiente. </p> 
          <p>Contamos con servicios de tienda, especialidad entre otras funcionalidades.</p> 
          
         </div> 
      </div>
      <Footer/>
       
    </>
  )
}
