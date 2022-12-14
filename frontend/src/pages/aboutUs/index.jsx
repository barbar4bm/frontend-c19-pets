
import React from "react";
import "./AboutUs.css";
import { Barra } from "../../components/barra/barra";
import { Footer } from "../commerce/commons/Footer";
import { Header } from "../commerce/commons/Header";

export const AboutUs = () => {
  return (
    <>
      <Header />
      <head></head>
      <div style={{ marginBottom: "3000px" }}>
          {/*<div className="barra">
            <div className="imagen-logo">
              <div className="text-clinica">Clinica veterinaria</div>
              <div className="text-nombre">Puertas del mar</div>
            </div>
  </div>*/}
          <b>
            <div className="text-log">Sobre Nosotros</div>
          </b>
          <p className="parrafo">
            "Somos una clínica orientada a la atención de calidad. Dirigida a los
            animales, brindando medicina de calidad y vanguardia para nuestras
            mascotas. Contamos con un equipo médico de especialistas dispuesto a
            entregar lo mejor para nuestros pequeños compañeros."
          </p>

          <h1 className="titulo"> Equipo Médico:</h1>
          <h5 className="subtitulo">Dr. Felipe Gutiérrez Cáceres </h5>
          <h6 className="texto">
            Médico Veterinario UDLA, titulado con distinción. Diplomado en
            Cirugía de Pequeños Animales, Extensión HVS. Estancia de Cirugía de
            especialidad en Centro Veterinario México, DF. 9 Años de Experiencia
            en clínica menor. Cirujano de especialidad de diversas clínicas de
            la región y otras regiones. Ex-Jefe de Unidad de Cirugía de ERDM
            Hospital Clínico Veterinario, Maipú. Cirujano de especialidad en
            Oncovet. Diversos seminarios, congresos, cursos y actualizaciones en
            medicina de pequeños animales. Área de especialiad: Cirugía de
            pequeños animales. Diplomado en Gestión de Calidad e Inocuidad
            Alimentaria, U. de Chile
          </h6>
      </div>
      <Footer/>
    </>
  );
};
