import React from 'react'
import './PantallaInicio.css';
import {Barra} from "../../components/barra/barra.js"


export const PantallaInicio = () => {

  return (
   <>
      <body>

            <div className='fondo' >

              <Barra/>
              <img src={require("../../components/icono.jpg")} 
                alt="">
              </img>
            
              <h2> CLINICA VETERINARIA</h2>
              <h1>PUERTAS DEL MAR</h1>

              
            </div>
      </body>
    </>
  )
}
