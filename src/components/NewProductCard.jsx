import "./NewProductCard.css";

export default function NewProductCard({
  id,
  image,
  name,
  price,
  originalPrice,
  discount,
  rating,
  isBestSeller,
  // isWishlisted,
  // onAddToCart,
  // onToggoleWishlist,
  category,
}) {
  return (
    <div className="nova-card">
      <div className="nova-card-inner">
        {/* Badge */}
        {discount && <span className="nova-badge">{discount}</span>}

        {/* <button
          className={`wishlisted ${isWishlisted ? "active" : " "}`}
          onClick={onToggoleWishlist}
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button> */}

        {/* Image Area */}
        <div className="nova-image-wrapper">
          <img src={image} alt={name} className="nova-image" />
          <div className="nova-overlay">
            <button className="nova-quick-view">Quick View</button>
          </div>
        </div>

        {/* Info Area */}
        <div className="nova-details">
          <div className="nova-meta">
            <span className="nova-category">{category}</span>
            {/* <span className="nova-category">
              {" "}
              {"★".repeat(Math.floor(rating))}
              {"✩".repeat(5 - Math.floor(rating))}
            </span> */}
            <div className="nova-rating">
              <span className="active-star">★</span> {rating}
            </div>
          </div>

          <h3 className="nova-title">{name}</h3>

          <div className="nova-price-block">
            <div className="prices">
              <span className="current-price">₹{price.toLocaleString()}</span>
              {originalPrice && (
                <span className="old-price">
                  ₹{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <button className="nova-add-btn">
            Add to Cart
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>

        {isBestSeller && <div className="nova-bestseller">HOT</div>}
      </div>
    </div>
  );
}
