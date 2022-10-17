
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PantallaSesion } from "./pages/InicioSesion/PantallaSesion.js";
import { PantallaInicio } from "./pages/Pantalla/PantallaInicio.js";
import {ComercePage} from "./pages/commerce/pages/ComercePage"
import { AboutUs } from "./pages/aboutUs/index.jsx";
import { AgendarHora} from "./pages/AgendarHora/AgendarHora.jsx";
import {AnularCitas} from "./pages/AnularCitas/AnularCitas.jsx";
import {Hora} from "./pages/Hora/Hora.jsx";
import {HoraPeluqueria} from "./pages/HoraPeluqueria/HoraPeluqueria.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<PantallaInicio />} />
          <Route path="/login" element={<PantallaSesion />} />
          <Route path="/store" element={<ComercePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/agendar-hora" element={<AgendarHora/>}/>
          <Route path="/anular-citas" element={<AnularCitas/>}></Route>
          <Route path="/hora" element={<Hora/>}></Route>
          <Route path="/hora-peluqueria" element={<HoraPeluqueria/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );

}

export default App;
