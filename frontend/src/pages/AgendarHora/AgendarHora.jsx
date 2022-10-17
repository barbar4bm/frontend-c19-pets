import React from "react";
import "./AgendarHora.css";
import { Barra } from "../../components/barra/barra";
import { Link } from 'react-router-dom';
import { Footer } from "../commerce/commons/Footer";
export const AgendarHora = () => {
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
          <div class="box1"><Link to="/hora">
            <button className="btn btn-secundary" >
              Agendar Hora
            </button>
          </Link></div>
          <div class="box2"><Link to="/hora-peluqueria">
            <button className="btn btn-secundary" >
              Agendar Hora Peluqueria
            </button>
          </Link></div>
          <div class="box3"><Link to="/anular-citas">
            <button className="btn btn-secundary" >
              Anular Hora
            </button>
          </Link></div>
          
        </body>
      </div>
      <Footer />
    </>
  );
};
