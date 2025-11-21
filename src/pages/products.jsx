import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // added
import "../styles/PagesCommon.css";
import "../styles/Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products?limit=100", { signal: ac.signal });
        if (!res.ok) throw new Error("Failed to fetch products");
        const json = await res.json();
        const productsData = json.products || [];
        setProducts(productsData);

        // extract unique categories
        const cats = Array.from(new Set(productsData.map(p => p.category)));
        setCategories(["All", ...cats]);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message || "Error");
      } finally {
        setLoading(false);
      }
    })();

    return () => ac.abort();
  }, []);

  // filter products based on selected category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page page-container">
      <h1 className="page-title">Products</h1>

      {/* CATEGORY FILTER BUTTONS */}
      <div className="category-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading / Error */}
      {loading && <div className="loader">Loading products…</div>}
      {error && <div className="error">Error: {error}</div>}

      {/* PRODUCTS GRID */}
      <div className="product-grid">
        {filteredProducts.map(p => (
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
                {/* changed from button to Link so it opens ProductDetail */}
                <Link to={`/product/${p.id}`} className="btn btn-sm">View</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
