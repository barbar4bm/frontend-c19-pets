
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PantallaSesion } from './pages/InicioSesion/PantallaSesion';
import { PantallaInicio } from './pages/Pantalla/PantallaInicio';
import {ComercePage} from './pages/commerce/pages/ComercePage'
import { AboutUs } from './pages/aboutUs';
import { AgendarHora} from './pages/AgendarHora/AgendarHora';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PantallaInicio />} />
          <Route path="/login" element={<PantallaSesion />} />
          <Route path="/store" element={<ComercePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/agendar-hora" element={<AgendarHora />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
