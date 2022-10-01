import React from 'react'
import {BiSearch} from 'react-icons/bi'
export const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className="container">
            <h1>
                <label htmlFor='' ><span>Centro especializado en cirugia </span> veterinaria y atención integral de mascotas.</label>
                <br/>
                <br/>
                
                <label><span>Medicina integral de calidad para su mascota</span></label>

                <p>clínica orientada a la atención de calidad para los animales brindando medicina de calidad y vanguardia para nuestras mascotas.</p>
            </h1>
            <div className="search">
                <span> Todas las categorias</span>
                <hr />
                <input type='text' placeholder='Buscar Productos...'></input>
                <button>
                    <BiSearch className='searchIcon heIcon'></BiSearch>
                </button>
            </div>
            <p>Ejemplos: Comida, Antiparasitarios, y todo lo que necesitas para tu regalon</p>
        </div>
    </section>
    </>
  )
}
