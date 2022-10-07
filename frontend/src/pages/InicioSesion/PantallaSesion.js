//import { json } from 'express';
import React from 'react'
import "../InicioSesion/PantallaSesion.css"
import { Link } from 'react-router-dom';

/*async function checkPass(user,password) {
  const response = await fetch("http://localhost:3001/api/admin/${user}", {
    method: 'GET'
  }
  ).then(response=>response.json()).then(json.password = console.log(json)).catch(err => alert("Alerta; Error"));
}
*/



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
          <div className='container_p1'>
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
              <div className='link-olvidar'>
                <a href=''>Olvidaste tu contraseña?</a>
              </div>
              <button type="submit" className="btn btn-primary" style={{ float: 'center' ,top:'70px' , left:'45px'}} >
                Iniciar sesión
              </button>
              <Link to='/'>
                <button type="submit" className="btn btn-primary" style={{ float: 'center' ,top:'120px' , left:'-45px'}} >
                  Volver
                </button>
              </Link>
              
            </div>
          </div>
        </div>




      </body>

    </>
  )
}
