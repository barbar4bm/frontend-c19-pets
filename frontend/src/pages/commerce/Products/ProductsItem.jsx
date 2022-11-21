import React, { useState, useEffect } from 'react'
import {FiShoppingBag,FiSearch} from 'react-icons/fi'
import {AiOutlineClose, AiOutlineHeart} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { ADD } from '../../../controllers/action'
export const ProductsItem = ({ data }) => {
    //const [Users, fetchUsers] = useState([])
    const url = 'http://localhost:3001/api/client'
    const getData = async () => {
        const response = await fetch(url)
        const client = await response.json()

        console.log(client);
    }
    useEffect(() => {
        getData()
    }, [])

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
                            <button className='button'>
                                <AiOutlineHeart />
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
