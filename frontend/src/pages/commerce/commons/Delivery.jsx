import React from 'react'
import { useState } from 'react'
import '../style/delivery.css'
export const Delivery = () => {
    const [check, setcheck] = useState(false)
    const [state, setState] = useState({
        deliveryName: "",
        deliveryLastName: "",
        deliveryAddress: "",
        deliveryPhone: ""
    })
    const onChange = (e) => {
        const [name, value] = e.target
        setState((prevState)=>({
            ...prevState,
            [name]: value,
        }))
     }
    return (
        <>
        <div className="body_form">
            <form > 
                <h1>Informacion de envío</h1>
                <input className='input-font' type='text' name='deliveryName' placeholder='Nombres' autoComplete={'false'} onChange={onChange}> </input>
                <input className='input-font' type='text' name='deliveryLastName' placeholder='Apellidos' autoComplete={'false'} onChange={onChange}> </input>
                <input className='input-font' type='text' name='deliveryAddress' placeholder='Dirección' autoComplete={'false'} onChange={onChange}> </input>
                <input className='input-font' type='text' name='deliveryPhone' placeholder='Número de telefono' autoComplete={'false'} onChange={onChange}> </input>
                <input type='button' className='btn' value="Submit"></input>
            </form>
        </div>
        </>
    )
}
