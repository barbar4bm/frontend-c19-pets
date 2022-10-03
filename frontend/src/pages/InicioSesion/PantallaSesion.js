//import { json } from 'express';
import React,{useState,useEffect} from 'react'
import "../InicioSesion/PantallaSesion.css"
import axios from 'axios'

export const PantallaSesion = () => {
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

  const handleChangeEmail = (e)=>{
    e.preventDefault()
    console.log(e.target.value);
    setEmail(e.target.value)
  }
  const handleChangePass = (e)=>{
    e.preventDefault()
    console.log(e.target.value);
    setPass(e.target.value)
  }
  const user ={
    "email":email,
    "password":pass
  }
  
  const onSubmit = async ()=>{   
    console.log('entro');
    const res = await axios.post('http://localhost:3001/api/login',user).then((response)=>{
      const res = response.data
      console.log(res);
      if (response.status === 200){
        alert('usuario detectado')
      }
    })
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
          <div className='container_p1'>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Ingrese email"
                onChange={handleChangeEmail}
              />
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingrese contraseña"
                onChange={handleChangePass}

              />
              <div className='link-olvidar'>
                <a href=''>Olvidaste tu contraseña?</a>
              </div>
                <button type="submit" className="btn btn-primary" style={{ float: 'center' ,top:'70px' , left:'45px'}} onClick={()=>onSubmit()} >
                Iniciar sesión
              </button>

              <button type="submit" className="btn btn-primary" style={{ float: 'center' ,top:'120px' , left:'-45px'}}  >
                Volver
              </button>
              
              
            </div>
          </div>
        </div>




      </body>

    </>
  )
}
