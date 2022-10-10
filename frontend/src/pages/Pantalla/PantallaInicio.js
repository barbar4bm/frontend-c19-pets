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
            <div className='fondo-huella'></div>
          </div> 
         
          <div className='text-servicios'>
            Servicios
          </div>

        </div>
       

      <div className='carrousel'>
          <article className='card'>
            <p>Consulta general</p>
          </article>
          <article className='card'>
            <p>Cirugía general</p>
          </article>
          <article className='card'>
            <p>Cirugía especializada</p>
          </article>
          <article className='card'>
            <p>Interconsulta de especialistas</p>
          </article>
          <article className='card'>
            <p>Radiología digital</p>
          </article>
          <article className='card'>
            <p>Emergencias</p>
          </article>
          <article className='card'>
            <p>Exámenes de laboratorio</p>
          </article>
          <article className='card'>
            <p>Venta de alimentos</p>
          </article>
          <article className='card'>
            <p>Estética de mascotas</p>
          </article>
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
