import React from 'react'
import './PantallaInicio.css';


export const PantallaInicio = () => {

  return (
   <>

            <div className='fondo'>
              <img src={require("../../components/icono.jpg")} 
                alt="">
              </img>
              <h2> CLINICA VETERINARIA</h2>
              <h1>PUERTAS DEL MAR</h1>
            </div>
    </>
  )
}
