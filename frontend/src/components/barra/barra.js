import React from 'react'
import "./barra.css";

export const Barra = () => {
    return (
        <div>
            <button className='btn btn-secundary' style={{ float: 'right' }}>
                Acerca de
            </button>

            <button className='btn btn-secundary' style={{ float: 'right' }}>
                Agendar
            </button>

            <button className='btn btn-secundary' style={{ float: 'right' }}>
                Inicio Sesión
            </button>
        </div>
    )
}
