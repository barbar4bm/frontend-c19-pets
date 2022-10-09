import React from 'react'
import "./barra.css";
import { Link } from 'react-router-dom';
export const Barra = () => {
    return (
        <>
            < Link to="/about-us">
                <button className='btn btn-secundary' style={{ float: 'right' }}>
                    Acerca de
                </button>
            </Link>
            <button className='btn btn-secundary' style={{ float: 'right' }}>
                Agendar
            </button>
            <Link to="/login" >
                <button className='btn btn-secundary' style={{ float: 'right' }} Link to="/login">
                    Inicio Sesión
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
