import React from 'react'
import "../InicioSesion/PantallaSesion.css"
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import { Header } from '../commerce/commons/Header'
import { useAuth } from './context/authContext';
import { useNavigate } from 'react-router-dom'
export const PantallaSesion = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useAuth();
    const saveData = async (data) => {
        try {
            await login(data.email, data.password)
            swal({
                title: "Se Ha Registrado Estamos listos!",
                text: "Felicitaciones gusto en conocerte!",
                icon: "success",
            })
            navigate('/')
        } catch (error) {
            console.log(error.message);
            swal({
                title: "Upps! Paren el mundo que me BAJO!!!",
                text: "Ha habido un error por favor Ingrese un mail y contraseña valida",
                icon: "warning",
            })
            navigate('')
        }
    }
    return (
        <>
            <Header />
            <body>
                <Form className='tarjeta' style={{ height:450}} onSubmit={handleSubmit(saveData)}>
                    <h3 style={{ padding: 20 }}>Iniciar Sesion</h3>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control mt-1"
                            placeholder="mail@mail"
                            {...register("email", { required: true, maxLength: 50, minLength: 2 })}
                        />
                    </Form.Field>
                    {errors.email && <p style={{ color: 'red' }}>Por Favor ingrese un email valido ! </p>}
                    <Form.Field>

                        <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control mt-1"
                            placeholder="******"
                            {...register("password", { required: true, maxLength: 10, minLength: 2 })}
                        />
                    </Form.Field>
                    {errors.password && <p style={{ color: 'red' }}>Por Favor ingrese una contraseña valida ! </p>}
                    <Button type="submit" className="btn btn-primary" style={{ float: 'center', top: '55px', left: '125px' }} > Entrar </Button>
                </Form>
            </body>

        </>
    )
}
