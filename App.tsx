import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./SHOWPY/1Home.tsx";
import CartPage from "./SHOWPY/3CartPage.tsx";
import ProductPage from "./SHOWPY/2ProductPage.tsx";
import ContactPage from "./SHOWPY/4ContactPage.tsx";
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
      </Routes>
    </Router>
  );
}

export default App;
