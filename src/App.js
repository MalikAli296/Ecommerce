import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Products from './pages/products';
import Contact from './pages/contact_Us';
import About from './pages/About_Us';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
