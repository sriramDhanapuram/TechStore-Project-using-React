// NewApp - Alternative main component with NovaTech branding
import React, { useState } from "react";
import NewProductCard from "./components/NewProductCard";
import products from "./newData";
import "./NewApp.css";

function NewApp() {
  // Extract unique brands using Set for deduplication
  const allBrands = [...new Set(products.map((p) => p.brand))];

  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState([]);

  return (
    <div className="nova-app">
      <nav className="nova-nav">
        <div className="nova-logo">NOVATECH</div>
        <ul className="nova-menu">
          <li>
            <a href="products" className="nova-link">
              Store
            </a>
          </li>
          <li>
            <a href="#" className="nova-link">
              Mac
            </a>
          </li>
          <li>
            <a href="#" className="nova-link">
              iPad
            </a>
          </li>
          <li>
            <a href="#" className="nova-link">
              iPhone
            </a>
          </li>
          <li>
            <a href="#" className="nova-link">
              Watch
            </a>
          </li>
          <li>
            <a href="#" className="nova-link">
              Vision
            </a>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="nav-btn">Sign In</button>
          <button className="nav-btn primary">Shop Now</button>
        </div>
        <button className="nova-cart-btn">Cart (0)</button>
      </nav>

      <section className="nova-hero">
        <div className="nova-hero-content">
          <span className="nova-badge-pill">NEW RELEASE 2025</span>
          <h1 className="nova-hero-title">
            Beyond Reality.
            <br />
            Simply Magical.
          </h1>
          <p className="nova-hero-subtitle">
            Experience the next evolution of technology with our groundbreaking
            new collection. Designed for the visionaries of tomorrow.
          </p>
          <div className="nova-hero-actions">
            <button className="btn-glow">Shop Collection</button>
            <button className="btn-outline">Watch Keynote</button>
          </div>
        </div>
      </section>

      <section className="nova-products">
        <div className="nova-section-header">
          <div>
            <h2 className="nova-section-title">Trending Now</h2>
            <p className="nova-section-desc">
              Our latest arrivals and top picks for you.
            </p>
          </div>
          <a href="#" className="nova-link">
            View All &rarr;
          </a>
        </div>

        <div className="nova-grid">
          {products.map((item) => (
            <NewProductCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              originalPrice={item.originalPrice}
              discount={item.discount}
              rating={item.rating}
              isBestSeller={item.isBestSeller}
              category={item.category}
            />
          ))}
        </div>
      </section>

      <footer className="nova-footer">
        <h3>NOVATECH</h3>
        <p>Copyright © 2025 NovaTech Inc. All rights reserved.</p>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            opacity: 0.6,
          }}
        >
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Sales Policy</span>
          <span>Legal</span>
        </div>
      </footer>
    </div>
  );
}

export default NewApp;
