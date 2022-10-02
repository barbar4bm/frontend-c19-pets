import React ,{useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import { products } from '../../assets/data/data'
import { SearchItem } from './SearchItem'

export const Hero = () => {
    const [value,setValue] = useState("")
    const onChange = (e)=> {
        setValue(e.target.value)
    }
    const onSearch = (key) =>{
        setValue(key)
        console.log('search', key);
    }
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
                <input type='text' placeholder='Buscar Productos...' onChange={onChange} value={value}></input>
                <button onClick={() => onSearch(value)}>
                    <BiSearch className='searchIcon heIcon'></BiSearch>
                </button>  
            </div>
            <SearchItem product={products} value={value} onSearch={onSearch} />
            <p>Ejemplos: Comida, Antiparasitarios, y todo lo que necesitas para tu regalon</p>
        </div>
    </section>
    </>
  )
}
