
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Barra } from "./components/barra/barra.js";
import { PantallaSesion } from "./pages/InicioSesion/PantallaSesion.js";
import { PantallaInicio } from "./pages/Pantalla/PantallaInicio.js";
import {ComercePage} from "./pages/commerce/pages/ComercePage"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Barra />
        <Routes>
          <Route path="/" element={<PantallaInicio />} />
          <Route path="/login" element={<PantallaSesion />} />
          <Route path="/store" element={<ComercePage />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );

}

export default App;
