import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/PagesCommon.css";
import "../styles/ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`, { signal: ac.signal });
        if (!res.ok) throw new Error("Failed to fetch product");
        const json = await res.json();
        setProduct(json);
        setMainImage(json.thumbnail || json.images?.[0]);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message || "Error");
      } finally {
        setLoading(false);
      }
    })();
    return () => ac.abort();
  }, [id]);

  if (loading) return <div className="loader">Loading product…</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-detail-page page-container">
      <Link to="/products" className="btn btn-ghost mb-3">← Back to Products</Link>

      <div className="product-detail-grid">

        {/* Left: Images */}
        <div className="product-images">
          <img src={mainImage} alt={product.title} className="main-image" />
          <div className="thumbnail-row">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.title} ${idx + 1}`}
                className={`thumbnail ${mainImage === img ? "active" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-brand-category">{product.brand} • {product.category}</p>

          <div className="product-price-rating">
            <span className="price">${product.price}</span>
            <span className="rating">{product.rating?.toFixed(1)} ★</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-extra-info">
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Weight:</strong> {product.weight} g</p>
            <p><strong>Dimensions:</strong> {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm</p>
            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {product.shippingInformation}</p>
            <p><strong>Availability:</strong> {product.availabilityStatus}</p>
            <p><strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}</p>
            <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
            <p><strong>Barcode:</strong> {product.meta?.barcode}</p>
            <p><strong>QR Code:</strong> <img src={product.meta?.qrCode} alt="QR code" width="80" /></p>
            <p><strong>Tags:</strong> {product.tags?.join(', ')}</p>
          </div>

          <div className="product-actions">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="product-reviews">
        <h2>Customer Reviews</h2>
        {product.reviews?.map((rev, idx) => (
          <div key={idx} className="review-card">
            <p><strong>{rev.reviewerName}</strong> ({rev.rating} ★)</p>
            <p>{rev.comment}</p>
            <p className="muted">{new Date(rev.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
