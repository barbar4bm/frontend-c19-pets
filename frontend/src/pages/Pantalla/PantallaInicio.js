import React from 'react'
import './PantallaInicio.css';
import background from "../../components/logo.jpg";
import {Barra} from "../../components/barra/barra.js"


export const PantallaInicio = () => {

  return (
   <>
      <body>

            <div className='fondo' >

              <Barra/>
              <img src={`${background}`} 
                alt="" >
              </img>
             

              <div className='img2'></div>
              <h2> CLINICA VETERINARIA</h2>
              <h1>PUERTAS DEL MAR</h1>

              
            </div>
      </body>
    </>
  )
}
