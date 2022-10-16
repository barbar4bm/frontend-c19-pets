
//import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { PantallaSesion } from "./pages/InicioSesion/PantallaSesion.js";
//import { PantallaInicio } from "./pages/Pantalla/PantallaInicio.js";
//import {ComercePage} from "./pages/commerce/pages/ComercePage"
//import { AboutUs } from "./pages/aboutUs/index.jsx";
import {UsuarioInterfaz} from './pages/UsuarioInterfaz/UsuarioInterfaz';
function App() {
  return (
    <div>
     {/*<BrowserRouter>
        
        <Routes>
          <Route path="/" element={<PantallaInicio />} />
          <Route path="/login" element={<PantallaSesion />} />
          <Route path="/store" element={<ComercePage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
  */} 

    <UsuarioInterfaz/>
    </div>
  );

}

export default App;
