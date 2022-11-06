import React from 'react'
import "./barra.css";
import { Link , useNavigate} from 'react-router-dom';

export const Barra = () => {
    const navigate = useNavigate();
    return (
        <>
            < Link to="/about-us">
                <button className='btn btn-secundary' style={{ float: 'right' }}>
                    Acerca de
                </button>
            </Link >
            <Link >
            <button className='btn btn-secundary' style={{ float: 'right' }} onClick={()=>navigate('/')}>
                Agendar
            </button>
            </Link>
            
            <Link to="/login" >
                <button className='btn btn-secundary' style={{ float: 'right' }} Link to="/login">
                    Inicio Sesión
                </button>
            </Link>
            <Link to="/register" >
                <button className='btn btn-secundary' style={{ float: 'right' }} Link to="/login">
                    Registrarse
                </button>
            </Link>
            <Link to="/store">
                <button className='btn btn-secundary' style={{ float: 'right' }} Link to="/store">
                    Tienda
                </button>
            </Link>

        </>
    )
}
