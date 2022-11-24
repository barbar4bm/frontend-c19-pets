import React, { useState, useEffect } from 'react'
import {FiShoppingBag,FiSearch} from 'react-icons/fi'
import {AiOutlineClose, AiOutlineHeart, AiFillEye } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { ADD } from '../../../controllers/action'
import {Link,  useNavigate} from 'react-router-dom'

export const ProductsItem = ({ data }) => {

    const [openImage, setOpenImage] = useState(false)
    const [img,setImg] = useState("")

    const onOpenImage = (src) =>
    {
        setImg(src)
        setOpenImage(true)

    }
    const dispatch = useDispatch()
    const addToCart = (e)=>{
        dispatch(ADD(e))
    }
    const navigate =useNavigate()

    return (
        <>
            <div className="product_items">{data.map((items) => (
                <div className="box" key={items.id}>
                    <div className="img">
                        <img src={items.cover} alt="" />
                        <div className="overlay">
                            <button disabled={items.quantity == 0} className='button'>
                                <FiShoppingBag onClick={()=>addToCart(items)} />
                            </button>
                            <button className='button' onClick={()=> onOpenImage(items.cover)}>
                                <FiSearch />
                            </button>
                            <button className='button' onClick={()=>navigate(`/cart/${items.id}`)}>
                                <AiFillEye />
                            </button>
                        </div>
                        <div className="details">
                            <h3 > {items.name} </h3>
                            <p>{items.author}</p>
                            <p>Precio: ${items.price}</p>
                        </div>
                    </div>
                </div>
            ))}</div>
            <div className={openImage ? "modelOpen" : "modelClose"}>
                <div className="onClickImage">
                    <img src={img} alt="" />
                    <button className='button' onClick={()=>setOpenImage(false)}>
                        <AiOutlineClose />
                    </button> 
                </div>
            </div>

        </>
    )
}
