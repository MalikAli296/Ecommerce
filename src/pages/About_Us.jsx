import React from "react";
import { Link } from "react-router-dom";
import "../styles/PagesCommon.css";
import "../styles/AboutUs.css";

import malikImg from "../images/malik.jpg";
import aliImg from "../images/ali-raza-awan.jpg";

export default function About_Us() {
  return (
    <main className="about-page page-container">
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1 className="about-title">We build delightful shopping experiences</h1>
          <p className="about-sub">
            Simple, fast and accessible e‑commerce UI built on modern React patterns.
            We focus on performance, accessibility and delightful details.
          </p>
          <div className="about-cta-row">
            <Link to="/products" className="btn btn-ghost">Browse Products</Link>
            <Link to="/contact" className="btn btn-primary">Contact Sales</Link>
          </div>
        </div>
      </section>

      <section className="about-content">
        <article className="about-mission card">
          <h2>Our mission</h2>
          <p>
            Make online shopping fast and enjoyable for everyone. We concentrate on
            responsiveness, clear information architecture and accessible components
            so customers can find and buy what they need — quickly.
          </p>

          <div className="about-stats">
            <div className="stat">
              <div className="stat-num">5k+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat">
              <div className="stat-num">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat">
              <div className="stat-num">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </article>

        <aside className="about-values card">
          <h2>Core values</h2>
          <ul>
            <li><strong>Performance</strong> — fast load times and snappy UI.</li>
            <li><strong>Accessibility</strong> — built for all users and devices.</li>
            <li><strong>Clarity</strong> — simple flows and clear copy.</li>
          </ul>
        </aside>
      </section>

      <section className="team card">
        <h2>Meet the team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={malikImg} alt="Malik Ali" className="avatar" />
            <div className="member-info">
              <div className="member-name">Malik Ali</div>
              <div className="member-role">Founder & CEO</div>
              <a className="member-link" href="mailto:malik@reactshop.com">malik@reactshop.com</a>
            </div>
          </div>

          <div className="team-member">
            <img src={aliImg} alt="Ali Raza Awan" className="avatar" />
            <div className="member-info">
              <div className="member-name">Ali Raza Awan</div>
              <div className="member-role">Customer Support Manager</div>
              <a className="member-link" href="mailto:ali@reactshop.com">ali@reactshop.com</a>
            </div>
          </div>
        </div>
      </section>

      <div className="about-footer-cta">
        <p>Have a project or question? Our team is ready.</p>
        <Link to="/contact" className="btn btn-primary">Get in touch</Link>
      </div>
    </main>
  );
}