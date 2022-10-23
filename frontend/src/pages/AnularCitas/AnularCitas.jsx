import React from "react";
import "./AnularCitas.css";
import { Barra } from "../../components/barra/barra";

export const AnularCitas = () => {
  return (
    <>
      <Barra />
      <div style={{ marginBottom: "3000px" }}>
        <body>
          <div className="barra">
            <div className="imagen-logo">
              <div className="text-clinica">Clinica veterinaria</div>
              <div className="text-nombre">Puertas del mar</div>
            </div>
          </div>
          
          <h1>Anular Citas</h1>
          <h4> Ingresa los datos solicitados para anular tu cita:</h4>
          </body>
      </div>

     
     
    </>
  );
};
