import { useState } from "react";
import { Barra } from "../../components/barra/barra";
import { Footer } from "../commerce/commons/Footer";
import { Heading } from "../commerce/commons/Heading";
import { RiScissors2Fill } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { TiCancel } from "react-icons/ti";
import { FormScheduleModal } from "./formSchedule";

import "./AgendarHora.css";
import "../commerce/style/main.scss";

export const AgendarHora = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(false);
  const [type, setType] = useState(false);
  const [service, setService] = useState("");

  const handleShow = (title, type, service) => {
    setTitle(title);
    setType(type);
    setService(service);
    setShow(true);
  }

  return (
    <>
      <Barra />
      <div className="barra">
        <div className="imagen-logo">
          <div className="text-clinica">Clinica veterinaria</div>
          <div className="text-nombre">Puertas del mar</div>
        </div>
      </div>

      <section className="customer">
        <Heading
          title="Agenda tu hora acá"
          desc="desde aqui puedes administras tus horas, tanto agendarlas, como cancelarlas."
        />
        <div className="content">
          <div className="card">
            <p>Agendar hora Peluqueria</p>
            <button onClick={() => handleShow('Agendar Hora Peluqueria', 'create', 'peluqueria')}>
              <RiScissors2Fill />
            </button>
          </div>
          <div className="card">
            <p>Agendar hora veterinaria</p>
            <button onClick={() => handleShow('Agendar Hora Veterinaria', 'create', 'veterinario')}>
              <AiOutlineSchedule />
            </button>
          </div>
          <div className="card">
            <p>Anular Hora</p>
            <button onClick={() => handleShow('Anular Hora', 'cancel', '')}>
              <TiCancel />
            </button>
          </div>
        </div>
      </section>
      <FormScheduleModal show={show} setShow={setShow} title={title} type={type} service={service} />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};
