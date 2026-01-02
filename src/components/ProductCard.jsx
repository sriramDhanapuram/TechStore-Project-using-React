// ProductCard - Displays individual product with add-to-cart and wishlist functionality
import "./ProductCard.css";

export default function ProductCard({
  id,
  image,
  name,
  price,
  originalPrice,
  discount,
  rating,
  isBestSeller,
  isWishlisted,
  onAddToCart,
  onToggleWishlist,
}) {
  return (
    <div className="product-card">
      {discount && <span className="discount-badge">{discount}</span>}

      <button
        className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
        onClick={onToggleWishlist}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>

      <div className="image-container">
        <img src={image} alt={name} className="product-image" />
      </div>

      <div className="card-content">
        <h3 className="product-name">{name}</h3>

        <div className="rating">
          <span className="stars">
            {/* Star rating: filled stars based on rating, empty for remainder */}
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </span>
          <span className="rating-value">{rating}</span>
          {isBestSeller && <span className="bestseller-tag">Best Seller</span>}
        </div>

        <div className="price-row">
          {/* toLocaleString formats price with locale-specific separators */}
          <span className="price">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="original-price">₹{originalPrice.toLocaleString()}</span>
          )}
        </div>

        <button className="add-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
