import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./SHOWPY/1Home.tsx";
import CartPage from "./SHOWPY/3CartPage.tsx";
import ProductPage from "./SHOWPY/2ProductPage.tsx";
import ContactPage from "./SHOWPY/4ContactPage.tsx";
import Policy from "./SHOWPY/5policy.tsx";
import Privacy from "./SHOWPY/6privacy.tsx";
import Event from "./SHOWPY/7event.tsx";
import 'normalize.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/hiddenevent" element={<Event />} />
        
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
