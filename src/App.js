import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Home from './pages/home';
import Products from './pages/products';
import Contact from './pages/contact_Us';
import About from './pages/About_Us';
import ProductDetail from './pages/product_Details'; // added

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
