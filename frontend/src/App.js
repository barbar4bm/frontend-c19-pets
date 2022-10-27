

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PantallaSesion } from "./pages/InicioSesion/PantallaSesion.js";
import { PantallaInicio } from "./pages/Pantalla/PantallaInicio.js";
import {ComercePage} from "./pages/commerce/pages/ComercePage"
import { AboutUs } from "./pages/aboutUs/index.jsx";
import {UsuarioInterfaz} from './pages/UsuarioInterfaz/UsuarioInterfaz';
import {ReservaVet} from "./pages/reservaVet/ReservaVet"
function App() {
  return (
    <div>
     <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<PantallaInicio />} />
          <Route path="/login" element={<PantallaSesion />} />
          <Route path="/store" element={<ComercePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/interfaz-usuario" element={<UsuarioInterfaz/>} />
          <Route path="/agenda-vet" element={<ReservaVet />} />
        </Routes>
      </BrowserRouter>

    </div>
  );

}

export default App;
