import React from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../commons/Header'
import { Delivery } from './Delivery'
import { Link, useNavigate } from 'react-router-dom'
import { useMercadopago } from 'react-sdk-mercadopago';
import { ProductsPay } from './ProductsPay'
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
export const Checkout = () => {
    //rute middleware
    const navigate = useNavigate();
    //states
    //handler form inputs
    const { register, handleSubmit, formState: { errors } } = useForm();
    //state commerce
    const [data, setData] = useState([]);
    const [price, setPrice] = useState(0);
    //modal open close
    const [modalIsOpen, setIsOpen] = React.useState(false);
    //pay button activator
    const [activeButton,setActiveButton] = useState(false);
    //modal setting's
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const openModal = () => { setIsOpen(true); }
    const closeModal = () => { setIsOpen(false); }
    //get cart
    const getData = useSelector((state) => state.cartReducer.carts)
    const carrito = JSON.stringify(getData);
    //add totals
    const totals = () => {
        let price = 0
        getData.map((e, i) => {
            price = parseFloat(e.price) * e.quantity + price
            //console.log(e);
        })
        setPrice(price)
    }
    //mercado pago interface
    const mercadopago = useMercadopago.v2('TEST-7fcc1b03-41aa-460e-bbf0-11e69d83ba60', { locale: 'es-CL' });
    const pay = async (products) => {
        const response = await axios.post("http://localhost:3001/api/pay", getData).then((res) => {
            const id = res.data.response.id
            if (mercadopago) {
                mercadopago.checkout({
                    preference: {
                        id: id
                    },
                    autoOpen: true,
                })
            }
        })
    }
    //save the shipping information
    const saveShipping = (data) => {
        console.log(data);
        //conectar backend
        swal({
            title: "Envio listo!",
            text: "Datos guardados!",
            icon: "success",
          })
        closeModal();
        setActiveButton(true);
    }
    //get the data of the card and total of the product according the price 
    useEffect(() => {
        setData(getData)
        totals()
    }, [totals])


    return (
        <>
            <ProductsPay />
            <article>
                <section className='details' style={{ alignItem: 'center' }}>

                    <h3 style={{ color: "red" }}>Precio Total : $ {price}</h3>

                    <button className='button' style={{ padding: 20, marginBottom: 5 }} onClick={openModal}>Envio</button>

                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Direccion de envio"
                    >

                        <Form onSubmit={handleSubmit(saveShipping)}>
                            <h3 style={{ alignItem: 'center', TextAlign: 'center' }}>Formulario de envio</h3>
                            <h4>Inserte los siguientes datos para la recepcion de sus productos</h4>
                            <Form.Field>
                                <label>Nombre:  </label>
                                <input type="text" name="name"  {...register("name", {required:true, maxLength: 10, minLength: 2})} />
                            </Form.Field>
                            {errors.name && <p style={{color:'red'}}>Por Favor revise su nombre ! </p>}
                            <Form.Field>
                                <label>Apellidos:  </label>
                                <input type="text" name="lastName" {...register("lastName", {required:true, maxLength: 30, minLength: 2})} />
                            </Form.Field>
                            {errors.lastName && <p>Por Favor revise su Apellido ! </p>}
                            <Form.Field>
                                <label> Direccion:  </label>
                                <input type="text" name="address" {...register("address", {required:true, maxLength: 20, minLength: 2})}  />
                            </Form.Field>
                            {errors.address && <p>Por Favor revise su Direccion ! </p>}
                            <Form.Field>
                            <label>Telefono:  </label>
                            <input type="number" name="phone"  {...register("phone", {required:true, maxLength: 9, minLength: 8})} />
                            </Form.Field>
                            {errors.phone && <p>Por favor su numero de telefono debe tener 8 a 9 numeros </p>}
                            <Button type="submit" className='button' value="Guardar" >Guardar</Button>
                        </Form>
                    </Modal>
                    <button disabled={!activeButton} style={{alignSelf:'center'}} className='button' onClick={() => pay(carrito)} >Pagar</button>
                </section>
            </article>
        </>
    )
}
