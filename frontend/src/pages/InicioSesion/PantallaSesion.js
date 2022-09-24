import React from 'react'
import "../InicioSesion/PantallaSesion.css"

export const PantallaSesion = () => {
  return (
    <>

      <body>

        <div className='barra'>
          <div className='imagen-logo'>
            <div className='text-clinica'>Clinica veterinaria</div>
            <div className='text-nombre'>Puertas del mar</div>
            <div className='text-log'>iniciar sesión </div>

          </div>
        </div>
        <div className='tarjeta'>
          <div className='container'>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Ingrese email"
              />
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingrese contraseña"
              />
              <button type="submit" className="btn btn-primary" style={{ float: 'center' }} >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>




      </body>

    </>
  )
}
