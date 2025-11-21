import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import '../styles/PagesCommon.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ecom-footer" role="contentinfo" aria-label="Site footer">
      <div className="ecom-footer-inner">
        <div className="ecom-footer-grid">
          <div className="ecom-col brand">
            <h3 className="brand-title">Ecommerce App</h3>
            <p className="brand-sub">
              Lightweight e-commerce demo — fast, accessible, and responsive.
            </p>
            <div className="socials" aria-hidden="false" aria-label="Social links">
              <a className="social-link" href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a className="social-link" href="#" aria-label="Twitter"><i className="bi bi-twitter" /></a>
              <a className="social-link" href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
            </div>
          </div>

          <nav className="ecom-col links" aria-label="Footer navigation">
            <h4>Quick links</h4>
            <ul>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/products" className="footer-link">Products</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
            </ul>
          </nav>

          <div className="ecom-col contact" aria-label="Contact information">
            <h4>Contact</h4>
            <address>
              <div>E-9 Shaheen Chowk</div>
              <div>Islamabad, Pakistan</div>
              <div><a className="footer-link" href="mailto:malik@ecommerce.com">malik@ecommerce.com</a></div>
              <div><a className="footer-link" href="tel:1234-1234567">1234-1234567</a></div>
            </address>
          </div>

          <div className="ecom-col map" aria-label="Location map">
            <h4>Location</h4>
            <div className="map-wrap" aria-hidden="false">
              <iframe
                title="location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.34%2C31.50%2C74.38%2C31.54&layer=mapnik&marker=31.52%2C74.36"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="ecom-footer-bottom">
          <div className="copyright">
            Malik Ali Raza Awan | 231555 | BSCS-5-B
          </div>
        </div>
      </div>
    </footer>
  );
}