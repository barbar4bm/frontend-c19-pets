import React from 'react'
import './UsuarioInterfaz.css'

//probando el objeto que se debe de obtener
const Usuario = {
  nombre:'Luis Felipe',
  especialidad:'Veterinario'
}

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

        
        <div className='user_profile'> ⭐ Usuario : {Usuario.nombre} 
          <div className='text text-center'> {Usuario.especialidad}</div>
        </div>


        <div className='sidebar'>
        
          <ul>
            <li><a href='#'> 📅 Atenciones </a></li>  
            <li><a href='#'> 🔎 Busqueda </a></li>
            <li><a href='#'> ❌ Eliminar Hora</a></li>
          </ul>

         
        </div>
        <div className='midbar'>
        <table className='table table-hover' >
              <thead className='table'> 
                <tr>
                  <th>Cliente</th>
                  <th>Mascota</th>
                  <th>Servicio</th>
                  <th>Fecha</th>
                </tr>
                
              </thead>

            </table>
        </div>
        <div className='foot-page'>
          <p className='text text-center' style={{color:'white'}}> Información de nosotros por cualquier tipo de problema </p>
        </div>
      </div>
      
      
      
    </>
  )
}
