import React from 'react'
import './UsuarioInterfaz.css'


export const UsuarioInterfaz = () => {
  return (
    <> 
      <div className='fondo'>
        <div className='barra-header'> 
          <div className='dash-titulo'> Dashboard </div>

          <ul className='botones'>
            
            <button className='btn btn-secundary' style={{float:'right'}}> Salir</button>
            <button className='btn btn-secundary' style={{float:'right'}}> Atenciones </button>
          </ul>
        </div> 

        <div className='cuerpo-izq'> 
          
        </div>        
      </div>
    </>
  )
}
