import React, { useState } from 'react'
import "../InicioSesion/PantallaSesion.css"
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import { Header } from '../commerce/commons/Header'
import { useAuth } from './context/authContext';
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
export const PantallaSesion = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, loginWithGoogle, user, resetPassword } = useAuth();
    console.log(user);
    const [userMail, setUserMail] = useState('');
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
    const handleGoogleSignin = async () => {
        await loginWithGoogle()
        navigate('/store')
    }
    const handleResetPassword = async (data) => {
        //console.log('que pasa contigo');
        //console.log(userMail);
        if (!userMail) {
            swal({
                title: "¡Upps! ¡¡¡Paren el mundo que me BAJO!!!",
                text: "Por favor, ingrese su email para iniciar la recuperación de la contraseña",
                icon: "warning",
            })
        } else {
            try {
                console.log(userMail);
                await resetPassword(userMail.toLowerCase())
                swal({
                    title: "¡¡¡Tú tranquilo nosotros preocupados!!!",
                    text: "Te hemos enviado un email para que puedas recuperar tu contraseña",
                    icon: "info",
                })
            } catch (error) {
                console.log(error);
                swal({
                    title: "¡Upps! ¡¡¡Paren el mundo que me BAJO!!!",
                    text: "¡Hubo un error!",
                    icon: "warning",
                })
            }
        }
    }
    return (
        <>
            <Header />
            <body>
                <Form className='tarjeta_p1' onSubmit={handleSubmit(saveData)}>
                    <h3 style={{ padding: 20 }}>Iniciar Sesion</h3>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control mt-1"
                            placeholder="mail@mail"
                            {...register("email", { required: true, maxLength: 50, minLength: 2 })}
                            onChange={(event) => { setUserMail(event.target.value) }}
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

                    <a href="#!" onClick={() => handleResetPassword()} style={{ color: 'blue' }}>Olvidaste tu contraseña ?</a>

                    <Button type="submit" className="btn btn-primary" style={{ float: 'center', top: '55px', left: '125px' }} > Entrar </Button>
                    <Button style={{ float: 'center', top: '60px', left: '177px', width: 50, borderRadius: 70 }} className=" " onClick={handleGoogleSignin}><FcGoogle></FcGoogle></Button>

                </Form>
            </body>

        </>
    )
}
