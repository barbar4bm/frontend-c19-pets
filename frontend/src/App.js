
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Barra } from "./components/barra/barra.js";
import { PantallaSesion } from "./pages/InicioSesion/PantallaSesion.js";
import { PantallaInicio } from "./pages/Pantalla/PantallaInicio.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Barra />
        <Routes>
          <Route path="/" element={<PantallaInicio />} />
          <Route path="/login" element={<PantallaSesion />} />
        </Routes>
      </BrowserRouter>

    </div>
  );

}

export default App;
