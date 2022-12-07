
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PantallaSesion } from "./pages/InicioSesion/PantallaSesion.jsx";
import { PantallaInicio } from "./pages/Pantalla/PantallaInicio.js";
import { ComercePage } from "./pages/commerce/pages/ComercePage"
import { Provider } from 'react-redux'
import store from "./controllers/store.js";
import { Details } from "./pages/commerce/details/Details.jsx";
import { Checkout } from "./pages/commerce/commons/Checkout"
import { Delivery } from "./pages/commerce/commons/Delivery.jsx";
import { Register } from "./pages/InicioSesion/Register.jsx";
import { AuthProvider } from '../src/pages/InicioSesion/context/authContext'
import { ProtectedRoutes } from "./pages/InicioSesion/ProtectedRoutes.js";
import { AboutUs } from "./pages/aboutUs/index.jsx";
import { AgendarHora } from './pages/AgendarHora/AgendarHora';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>

          <Routes>
            <Route path="/" element={<PantallaInicio />} />
            <Route path="/login" element={<PantallaSesion />} />
            <Route path="/store" element={
              <ProtectedRoutes>
                <ComercePage />
              </ProtectedRoutes>
            } />
            <Route path="/cart/:id" element={
              <ProtectedRoutes>
                <Details />
              </ProtectedRoutes>
            } />
            <Route path="/checkout" element={
              <ProtectedRoutes>
                <Checkout />
              </ProtectedRoutes>
            } />
            <Route path="/deliveryForm" element={
              <ProtectedRoutes>
                <Delivery />
              </ProtectedRoutes>
            } />
            <Route path="/register" element={<Register />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/agenda" element={
              <ProtectedRoutes>
                <AgendarHora />
              </ProtectedRoutes>
            } />
            />


          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </Provider >
  );
}

export default App;
