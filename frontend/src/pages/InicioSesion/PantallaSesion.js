import React, { useEffect, useState } from 'react'
import "../InicioSesion/PantallaSesion.css"

/*async function checkPass(user,password) {
  const response = await fetch("http://localhost:3001/api/admin/${user}", {
    method: 'GET'
  }
  ).then(response=>response.json()).then(json.password = console.log(json)).catch(err => alert("Alerta; Error"));
}*/
export const PantallaSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function login() {
    let item = { email, password };
    let result = await fetch("http://localhost:3001/api/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    alert(result.body)
    }

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
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Ingrese contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={login} type="submit" className="btn btn-primary" style={{ float: 'center', top: '30px', left: '45px' }} >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>




        </body>

      </>
    )
  }
