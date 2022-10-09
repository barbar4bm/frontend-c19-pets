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
         <div className='tarjet text-center'> Respecto a nosotros

          <p>Centro especializado en cirugía veterinaria y atención integral de mascotas. </p> 
          <p>Contamos con servicios de clinica general y especializada.</p> 
          
         </div> 
      </div>
      <div className='logo-facebook'>
        <h6> Clínica Veterinaria Puertas del Mar</h6>
      </div>
      <div className='logo-twitter'>
        <h6> Clínica Veterinaria Puertas del Mar</h6>
      </div>
       
      <div className='logo-insta'>
        <h6> Clínica Veterinaria Puertas del Mar</h6>
      </div>
        
      <Footer/>
       
    </>
  )
}
