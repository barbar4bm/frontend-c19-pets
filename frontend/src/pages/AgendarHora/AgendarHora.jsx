import React from "react";
import "./AgendarHora.css";
import { Barra } from "../../components/barra/barra";

export const scheduleTime = () => {
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

          <b>
            <div className="text-log">Agendar hora</div>
          </b>
          <div class="box1">Agendar hora</div>
          <div class="box2">Agendar hora peluqueria</div>
          <div class="box3">Anular hora</div>
        </body>
      </div>
    </>
  );
};
