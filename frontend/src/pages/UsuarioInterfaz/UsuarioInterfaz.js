import React from 'react'
import './UsuarioInterfaz.css'


export const UsuarioInterfaz = () => {
  return (
    <> 
      
      <div className='body'>
        <div className='barra-header'>
          
          <div className='vet-logo'>
            <div className='dash-titulo'>Pantalla de Administración </div>
          </div>

          <div className='boton-salir'>
            
              <button className='btn btn-secundary' style={{float:'right'}}>Cerrar</button>
           
          </div>
         
        </div>  

        
        <div className='user_profile'> ⭐ Usuario : Obtener info del usuario </div>
        <div className='sidebar'>
        
          <ul>
            <li><a href='#'> 📅 Atenciones </a></li>
            <li><a href='#'> 🔎 Busqueda </a></li>
            <li><a href='#'> ❌ Eliminar Hora</a></li>
          </ul>

         
        </div>
        <div className='midbar'>
            Aca debo mostrar la información
        </div>
        <div className='foot-page'>
          <p className='text text-center' style={{color:'white'}}> Información de nosotros por cualquier tipo de problema </p>
        </div>
      </div>
      
      
      
    </>
  )
}
