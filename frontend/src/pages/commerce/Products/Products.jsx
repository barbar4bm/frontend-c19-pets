import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Heading} from '../commons/Heading'
import {ProductsItem} from './ProductsItem'
export const Products = () => {

  const [products, setProducts] = useState([])
  //get data of the products of the databases 
  const getData = async () => {
    await axios.get('http://localhost:3001/api/product').then((response) => {
      const data = response.data
      console.log(data);
      setProducts(data);
    })
  }
  //constanstly use the getData for a rendering the products in the store 
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
    <section className='products'>
      <div className="container">
        <Heading title='Productos Selectos' desc='Ve nuestros productos disponibles en tienda'>

        </Heading>
        {/* the product are rendring with a product item in the Productitem component */}
        <ProductsItem data ={products} />
      </div>

    </section>
    </>
    )
}
