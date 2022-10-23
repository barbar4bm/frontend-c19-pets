import React from "react";
import "./HoraPeluqueria.css";
import { Barra } from "../../components/barra/barra";

export const HoraPeluqueria = () => {
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

          <b><h1>Hora Peluqueria</h1></b>
          </body>
      </div>
     
    </>
  );
};