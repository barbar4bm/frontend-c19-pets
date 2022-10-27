import React from 'react'
import { Barra } from '../../components/barra/barra'
import { FormReservaVet } from '../../components/FormReservaVet/FormReservaVet'

export const ReservaVet = () => {
  return (
    <div>
        <Barra />
        <h1>Reserva</h1>
        <FormReservaVet />
    </div>
  )
}
