import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PagesCommon.css';
import '../styles/Home.css';

export default function Home() {
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const res = await fetch('https://dummyjson.com/products?limit=100', { signal: ac.signal });
        if (!res.ok) throw new Error('Failed to fetch products');
        const json = await res.json();
        const products = json.products || [];

        // top rated
        const top = products
          .filter(p => typeof p.rating === 'number')
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 8);
        setTopRated(top);

        // trending (random 8 items)
        const shuffled = [...products].sort(() => 0.5 - Math.random()).slice(0, 8);
        setTrending(shuffled);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Error');
      } finally {
        setLoading(false);
      }
    })();
    return () => ac.abort();
  }, []);

  const renderProductGrid = (products) => (
    <div className="product-grid">
      {products.map(p => (
        <article key={p.id} className="product-card">
          <div className="product-media">
            <img src={p.thumbnail || p.images?.[0]} alt={p.title} />
            <div className="rating-badge">{p.rating?.toFixed(1)}</div>
          </div>
          <div className="product-body">
            <h3 className="product-title">{p.title}</h3>
            <p className="product-desc muted">{p.brand} • {p.category}</p>
            <div className="product-row">
              <div className="price">${p.price}</div>
              {/* View now links to the product detail page */}
              <Link to={`/product/${p.id}`} className="btn btn-sm">View</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <div className="home-page page-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Discover Your Next Favorite Product</h1>
          <p>Shop trending items, top-rated picks, and exclusive offers — all in one place.</p>
          <Link to="/products" className="btn btn-primary hero-btn">Shop Now</Link>
        </div>
      </section>

      {/* TOP RATED */}
      <section className="top-rated">
        <div className="section-header">
          <h2>Top Rated</h2>
          <p className="muted">Highly rated products recommended by our customers.</p>
        </div>
        {loading && <div className="loader">Loading products…</div>}
        {error && <div className="error">Failed to load products: {error}</div>}
        {renderProductGrid(topRated)}
      </section>

      {/* TRENDING NOW */}
      <section className="trending">
        <div className="section-header">
          <h2>Trending Now</h2>
          <p className="muted">Products catching attention right now. Don’t miss out!</p>
        </div>
        {renderProductGrid(trending)}
      </section>

      {/* EXTRAS */}
      <section className="extras">
        <div className="extra-card">
          <h3>Fast Shipping</h3>
          <p className="muted">Get your orders delivered quickly across supported regions.</p>
        </div>
        <div className="extra-card">
          <h3>Secure Payments</h3>
          <p className="muted">PCI-compliant checkout and multiple payment options.</p>
        </div>
        <div className="extra-card">
          <h3>24/7 Support</h3>
          <p className="muted">Our team is ready to help via chat or email.</p>
        </div>
      </section>
    </div>
  );
}
