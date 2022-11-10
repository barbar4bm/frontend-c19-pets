import React from 'react'
import './UsuarioInterfaz.css'

//probando el objeto que se debe de obtener
const Usuario = {
  nombre:'Luis Felipe',
  especialidad:'Veterinario'
}
const Info={
  cliente:'Luis Felipe',
  mascota:'perro',
  servicio:'limpieza',
  fecha:'13/09/2022'
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
              <button className='btn btn-secundary' style={{float:'right'}}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg> Cerrar </button>
          </div>
         
        </div>  

        
        <div className='user_profile'> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg> Usuario : {Usuario.nombre} 
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
