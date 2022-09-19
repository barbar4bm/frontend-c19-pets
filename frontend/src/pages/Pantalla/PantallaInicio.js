import React from 'react'
import './PantallaInicio.css';
import background from "../../components/logo.jpg";


export const PantallaInicio = () => {

  return (
   <>
      <body>
        <div className='container'>
            <div className='fondo' >
              <button className='btn btn-secundary' style={{float:'right'}}>
                    Acerca de
              </button>

              <button className='btn btn-secundary' style={{float:'right'}}>
                  Agendar
              </button>

              <button className='btn btn-secundary' style={{float:'right'}}>
                  Inicio Sesion 
              </button>
              <img src={`${background}`} 
                alt="" >
              </img>
             

              <div className='img2'></div>
              <h2> CLINICA VETERINARIA</h2>
              <h1>PUERTAS DEL MAR</h1>

              
            </div>
        </div>
      </body>
    </>
  )
}
