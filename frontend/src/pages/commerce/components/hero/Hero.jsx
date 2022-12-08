import React ,{useState,useEffect} from 'react'
import {BiSearch} from 'react-icons/bi'
import axios from 'axios'
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

    const [products, setProducts] = useState([])
    const getData = async () => {
        await axios.get('http://localhost:3001/api/product').then((response) => {
            const data = response.data
            console.log(data);
            setProducts(data);
        })
    }
    useEffect(() => {
        getData();
    }, [])

  return (
    <>
    <section className='hero'>
        <div className="container">
            <h1>
                <label htmlFor='' ><span>Centro especializado en cirugía. </span> veterinaria y atención integral de mascotas.</label>
                <br/>
                <br/>
                
                <label><span>Medicina integral de calidad para su mascota.</span></label>

                <p>Clínica orientada a la atención de calidad para los animales, brindando medicina de calidad y vanguardia para nuestras mascotas.</p>
            </h1>
            <div className="search">
                <span> Todas las categorías</span>
                <hr />
                <input type='text' placeholder='Buscar Productos...' onChange={onChange} value={value}></input>
                <button onClick={() => onSearch(value)}>
                    <BiSearch className='searchIcon heIcon'></BiSearch>
                </button>  
            </div>
            <SearchItem product={products} value={value} onSearch={onSearch} />
            <p>Ejemplos: comida, antiparasitarios, y todo lo que necesitas para tu regalón</p>
        </div>
    </section>
    </>
  )
}
