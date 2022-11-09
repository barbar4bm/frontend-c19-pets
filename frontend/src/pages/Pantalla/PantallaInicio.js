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
          <div className='tarjet'> 
            <div className='titulo-info text-center'>Respecto a nosotros</div>
            <div className='texto-infor'>Centro especializado en cirugía veterinaria y atención integral de mascotas. </div> 
            <div className='texto-infor'>Contamos con servicios de clinica general y especializada.</div> 
            <div className='fondo-huella'></div>
          </div> 
         
          <div className='text-servicios'>
            Servicios
          </div>

        </div>
       

      <div className='carrousel'>
          <article className='card'>
            <text>Consulta general</text>
          </article>
          <article className='card'>
            <text>Cirugía general</text>
          </article>
          <article className='card'>
            <text>Cirugía especializada</text>
          </article>
          <article className='card'>
            <text>Interconsulta de especialistas</text>
          </article>
          <article className='card'>
            <text>Radiología digital</text>
          </article>
          <article className='card'>
            <text>Emergencias</text>
          </article>
          <article className='card'>
            <text>Exámenes de laboratorio</text>
          </article>
          <article className='card'>
            <text>Venta de alimentos</text>
          </article>
          <article className='card'>
            <text>Estética de mascotas</text>
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
