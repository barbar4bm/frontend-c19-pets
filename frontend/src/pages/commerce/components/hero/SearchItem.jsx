import React from 'react'
import {FiShoppingBag,FiSearch} from 'react-icons/fi'
import {AiOutlineClose, AiOutlineHeart} from 'react-icons/ai'
export const SearchItem = ({value , product , onSearch}) => {
  return (
    <>
    <section className='searchItems'>
        <div className="product_items">
            {product
            .filter((items)=>{
                const searchkey = value.toLowerCase()
                const title = items.title.toLowerCase() //change the name for the api response
                return searchkey && title.startsWith(searchkey) && title !== searchkey
            }).slice(0,10).map((items)=>(
                <div className="box" key={items.id}>
                    <div className="img">
                        <img src={items.cover} alt="" />
                        <div className="overlay">
                            <button className='button'>
                                <FiShoppingBag />
                            </button>
                            <button className='button' >
                                <FiSearch />
                            </button>
                            <button className='button'>
                                <AiOutlineHeart />
                            </button>
                        </div>
                        <div className="details">
                            <h3 > {items.title} </h3>
                            <p>{items.author}</p>
                            <p>Precio: ${items.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}
