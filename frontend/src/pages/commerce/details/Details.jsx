import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import {MdDeleteSweep, MdStarRate} from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ADD, REMOVE_INT,DELETE} from '../../../controllers/action'
import { REMOVE_ITEM, } from '../../../controllers/type'
import {Header} from '../commons/Header'

export const Details = () => {
    const [data, setData] = useState([])
    const getData = useSelector((state) => state.cartReducer.carts)
    const { id } =useParams()
    const navigate = useNavigate()
    const compare = ()=>{
        let compareData = getData.filter((e)=>{
            return e.id == id
        })
        setData(compareData)
    }
    useEffect(()=>{
        compare()
    },[id])
    const dispatch = useDispatch()
    const increment = (e)=>{
        dispatch(ADD(e))
    }
    const decrement = (item)=>{
        dispatch(REMOVE_INT(item))
    }
    const dels = (id) =>{
        dispatch(DELETE(id))
        navigate("/store")
    }
    return (
        <>
            <Header/>

            <article>
                <section className='details'>
                    <h2 className='details_title'> Paginas de detalles de Productos</h2>
                    {data.map((item) => (
                        <div className="details_content">
                            <div className="details_content_img">
                                <img src={item.cover} alt=''></img>
                            </div>
                            <div className="details_content_detail">
                                <h1>{item.nombre}</h1>
                                <div className="rating">
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <label htmlFor=''>(1 comentario)</label>
                                </div>
                                <h3>${item.price * item.quantity}</h3>
                                <div className="qty">
                                    <div className="count">
                                        <button onClick={() => increment(item)}>
                                            <AiOutlinePlus />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={item.quantity <= 1 ? () => dels(item.id) : () => decrement(item)}>
                                            <AiOutlineMinus />
                                        </button>
                                    </div>
                                    <button className='button' onClick={ () => navigate('/store')}>Añadir al carrito</button>
                                </div>
                                <div className="desc">
                                        <h4>CATEGORIA DEL PRODUCTO</h4>
                                        <p>{item.category}</p>
                                        <h4>Detalles Productos</h4>
                                        <ul>
                                            <li>
                                                <p> detalle 1</p>
                                                <p> detalle 2</p>
                                                <p> detalle 3</p>

                                            </li>
                                        </ul>
 
                                </div>
                            </div>
                        </div>

                    ))}
                </section>
            </article>
        </>
    )
}
