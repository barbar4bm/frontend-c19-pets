
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PantallaSesion } from "./pages/InicioSesion/PantallaSesion.js";
import { PantallaInicio } from "./pages/Pantalla/PantallaInicio.js";
import {ComercePage} from "./pages/commerce/pages/ComercePage"
import {Provider} from 'react-redux'
import store from "./controllers/store.js";
import { Details } from "./pages/commerce/details/Details.jsx";
import { Checkout } from "./pages/commerce/commons/Checkout"
import { Delivery } from "./pages/commerce/commons/Delivery.jsx";
function App() {
  return (
    <Provider store={store}>

    
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<PantallaInicio />} />
          <Route path="/login" element={<PantallaSesion />} />
          <Route path="/store" element={<ComercePage />} />
          <Route path="/cart/:id" element={<Details />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/deliveryForm" element={<Delivery />}/>
          
        </Routes>
      </BrowserRouter>

    
  </Provider>
  );

}

export default App;
