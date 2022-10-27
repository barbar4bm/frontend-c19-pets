import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { MdDeleteSweep, MdStarRate } from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ADD, REMOVE_INT, DELETE } from '../../../controllers/action'
import { REMOVE_ITEM, } from '../../../controllers/type'
import { Header } from './Header'

export const ProductsPay = () => {
    const [data, setData] = useState([])
    const getData = useSelector((state) => state.cartReducer.carts)
    const carrito = JSON.stringify(getData);
    const totals = () => {
        let valor = 0
        getData.map((e, i) => {
            valor = parseFloat(e.valor) * e.cantidad + valor
        })
    }
    const dispatch = useDispatch()
    const increment = (e)=>{
        dispatch(ADD(e))
    }
    const decrement = (item)=>{
        dispatch(REMOVE_INT(item))
    }
    const dels = (codigo) =>{
        dispatch(DELETE(codigo))
    }
    useEffect(() => {
        setData(getData)
        totals()
    }, [totals])
    return (
        <>
            <Header />

            <article>
                <section className='details'>
                    <h2 className='details_title' style={{alignText:'center'}}> Carrito </h2>
                    {data.map((item) => (
                        <div className="details_content">
                            <div className="details_content_img" style={{height:160,width:160}}>
                                <img src={item.imagen} alt=''></img>
                            </div>
                            <div className="details_content_detail">
                                <h1>{item.nombre} X {item.cantidad}</h1>
                                <h3>${item.valor * item.cantidad}</h3>
                                <div className="qty">
                                    <div className="count">
                                        <button onClick={() => increment(item)}>
                                            <AiOutlinePlus />
                                        </button>
                                        <span>{item.cantidad}</span>
                                        <button onClick={item.cantidad <= 1 ? () => dels(item.codigo) : () => decrement(item)}>
                                            <AiOutlineMinus />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </article>

        </>

    )
}
