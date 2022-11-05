import React from 'react'
import { useState } from 'react'
import {Heading} from '../commons/Heading'
import {ProductsItem} from './ProductsItem'
import { products } from '../assets/data/data'
export const Products = () => {
  const [data,setdata] = useState(products)
  console.log(setdata);
  return (
    <>
    <section className='products'>
      <div className="container">
        <Heading title='Productos Selectos' desc='Ve nuestros productos disponibles en tienda'>

        </Heading>
        <ProductsItem data ={data} />
      </div>

    </section>
    </>
    )
}
