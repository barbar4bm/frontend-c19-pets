import React from 'react'
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios'
import { Header } from '../commerce/commons/Header'
import swal from 'sweetalert';
import { useAuth } from '../InicioSesion/context/authContext'; 


export const Reserva = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    console.log(user.email); 
    const saveAppointment = async (data) => {
        console.log(data);
        const appointement = await axios.post('http://localhost:3001/api/createEvents', data)

        swal({
            title: "Estamos ansiosos por verte !!!",
            text: "Tu reserva ha sido gestionada correctamente",
            icon: "success",
        })
    }
    return (
        <>
            <Header />
            <body>
                <Form className='tarjeta' style={{ height: 1000, width: 700 }} onSubmit={handleSubmit(saveAppointment)}>
                    <h3>Haga su reserva con nosotros</h3>
                    <h4>Puede elegir sus horas y agendar la atencion de sus mascotas rellenando este formulario</h4>
                    <Form.Field>
                        <label>Debe ir el nombre del evento como el nombre del cliente el vet </label>
                        <input type="text" name="summary"  {...register("summary", { required: true, maxLength: 50, minLength: 2 })} value={user.email} disabled={true}  />
                        {/** ver si debe ser insertado por el cliente o lo ponemos nosotros */}
                    </Form.Field>
                    {errors.summary && <p style={{ color: 'red' }}>Por Favor ingrese un nombre de evento valido ! </p>}
                    <Form.Field>
                        <label>Donde ?</label>
                        <input value='Clinica Puertas del mar' type="text" name="location"  {...register("location", { required: true, maxLength: 40, minLength: 2 })} disabled={true}  />
                    </Form.Field>
                    {errors.location && <p style={{ color: 'red' }}>Por Favor ingrese una locacion valida ! </p>}
                    <Form.Field>
                        <label>Descripcion de la reserva </label>
                        <input placeholder='Tomas se pone malito por *******' type="text" name="description"  {...register("description", { required: true, maxLength: 50, minLength: 2 })} />
                    </Form.Field>
                    {errors.description && <p style={{ color: 'red' }}>Por Favor ingrese una descripcion valida ! </p>}

                    <Form.Field>
                        <label>Cuando? </label>
                        <input type="datetime-local" name="startDateTime"  {...register("startDateTime", { required: true,})} />
                    </Form.Field>
                    {errors.startDateTime && <p style={{ color: 'red' }}>Por Favor ingrese una fecha y hora valida ! </p>}
                    <Form.Field>
                        <label>Hasta Cuando? XD </label>
                        <input type="datetime-local" name="endDateTime"  {...register("endDateTime", { required: true,})} />
                    </Form.Field>
                    {errors.endDateTime && <p style={{ color: 'red' }}>Por Favor ingrese una descripcion valida ! </p>}
                    <Button type="submit" className="btn btn-primary" style={{ float: 'center', top: '55px', left: '200px' }}>Reservar</Button>
                </Form>
            </body>
        </>
    )
}
