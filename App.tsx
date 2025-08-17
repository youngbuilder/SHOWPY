import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./SHOWPY/CartPage.tsx";
import ProductPage from "./SHOWPY/ProductPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
