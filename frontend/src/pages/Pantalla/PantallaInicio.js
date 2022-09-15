import React from 'react'
import'./PantallaInicio.css';


//no estoy seguro de que hace este codigo pero me permitio cambiar el tamaño de la fuente h1
//obtenido del css 

const fuente = document.createElement('fuente'); 
fuente.style='./PantallaInicio.css';


export const PantallaInicio = () => {
 
  return (
    <> 
     
      
        <button className='btn btn-secundary' style={{float:'right' , margin:'1px'}}>
          Acerca de
        </button>

        <button className='btn btn-secundary'style={{float:'right' , margin:'1px'}} >
          Agendar
        </button>

        <button className='btn btn-secundary' style={{float:'right' , margin:'1px'}}>
          Inicio Sesion 
        </button>

        <h2 className='PantallaInicio'>CLINICA VETERINARIA </h2>  
        <h1 className='PantallaInicio'>PUERTAS DEL MAR </h1> 
    </>
    
  )
}
