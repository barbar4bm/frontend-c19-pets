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
        let price = 0
        getData.map((e, i) => {
            price = parseFloat(e.price) * e.qty + price
        })
    }
    const dispatch = useDispatch()
    const increment = (e)=>{
        dispatch(ADD(e))
    }
    const decrement = (item)=>{
        dispatch(REMOVE_INT(item))
    }
    const dels = (id) =>{
        dispatch(DELETE(id))
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
                                <img src={item.cover} alt=''></img>
                            </div>
                            <div className="details_content_detail">
                                <h1>{item.title} X {item.qty}</h1>
                                <h3>${item.price * item.qty}</h3>
                                <p>{item.author}</p>
                                <div className="qty">
                                    <div className="count">
                                        <button onClick={() => increment(item)}>
                                            <AiOutlinePlus />
                                        </button>
                                        <span>{item.qty}</span>
                                        <button onClick={item.qty <= 1 ? () => dels(item.id) : () => decrement(item)}>
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
