import React from 'react'
import './PantallaInicio.css';
import background from "../../components/logo.jpg";


export const PantallaInicio = () => {

  return (
   
  <div className='row mt-0'>
    <div className='container'>
        <div className='fondo'>

          <button className='btn btn-secundary'style={{float:'right' }}>
                Acerca de
          </button>

          <button className='btn btn-secundary'style={{float:'right' }} >
              Agendar
          </button>

          <button className='btn btn-secundary' style={{float:'right' }}>
              Inicio Sesion 
          </button>
          
          <img src={`${background}`} 
              alt="">
          </img>

          <h2> CLINICA VETERINARIA</h2>
          <h1>PUERTAS DEL MAR</h1>
          
        </div>
      </div>
    </div> 
  )
}
