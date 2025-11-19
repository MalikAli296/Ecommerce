import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/PagesCommon.css';
import '../styles/Sidebar.css';
import logo from '../logo.svg';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
    const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

    useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  }, [isDark]);

  // close drawer when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggleTheme = (e) => {
    e?.stopPropagation();
    setIsDark(prev => !prev);
  };

  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <>
      {/* Mobile top navbar: hamburger (left) + logo (right) */}
      <div className="mobile-navbar" role="navigation" aria-label="Mobile navbar">
        {/* always render the toggle; use Bootstrap icon instead of empty spans */}
        <button
          className="sidebar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
        >
          <i className="bi bi-list" aria-hidden="true" />
        </button>

        {/* show logo on right of the mobile navbar */}
        <img src={logo} alt="Site logo" className="mobile-logo" />
      </div>

      <aside className={`sidebar ${open ? 'open' : ''}`} aria-label="Main sidebar">
        <div className="sidebar-top">
          <img src={logo} alt="Site logo" className="sidebar-logo" />

          {/* close is absolutely positioned so it doesn't push the logo */}
          <button
            className="sidebar-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        <nav className="sidebar-nav" aria-label="Primary">
          <NavLink to="/" className={linkClass} end>
            <i className="bi bi-house-door" aria-hidden="true" /> Home
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            <i className="bi bi-box-seam" aria-hidden="true" /> Products
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            <i className="bi bi-telephone" aria-hidden="true" /> Contact Us
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            <i className="bi bi-info-circle" aria-hidden="true" /> About Us
          </NavLink>
        {/* Theme toggle rendered as a nav-link so it looks/behaves like the other items */}
          <button
            type="button"
            className="nav-link theme-toggle d-flex align-items-center justify-content-between"
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={isDark ? 'bi bi-moon-stars' : 'bi bi-brightness-high'} aria-hidden="true" />
            <span className="theme-label">Theme</span>

            <label className="theme-switch" aria-hidden="true" onClick={(e) => e.stopPropagation()}>
              <input
                type="checkbox"
                checked={isDark}
                onChange={toggleTheme}
                aria-hidden="true"
              />
              <span className="knob" />
            </label>
          </button>
        </nav>

        <div className="sidebar-footer">
          <div>Developed by Malik Ali Raza Awan (231555)</div>
          <div>BSCS-5-B</div>
        </div>
      </aside>

      {/* overlay shown when drawer is open on small screens */}
      <div className={`sidebar-overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />
    </>
  );
}