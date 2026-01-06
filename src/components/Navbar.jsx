// Navbar.jsx - Navigation bar component with theme toggle, wishlist, and cart
import { CartIcon, SunIcon, MoonIcon } from "./Icons";

function Navbar({
  isDarkMode,
  toggleTheme,
  toggleCart,
  wishlistCount,
  cartCount,
}) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">
          <span className="logo-icon">◆</span>TechStore
        </a>
        <ul className="nav-links">
          <li>
            <a href="#" className="nav-link">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Deals
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="nav-btn">Sign In</button>
          <button className="nav-btn primary">Shop Now</button>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <div className="wishlist-icon-container">
            <span className="wishlist-icon">❤️</span>
            {wishlistCount > 0 && (
              <span className="wishlist-badge">{wishlistCount}</span>
            )}
          </div>
          <div className="cart-icon-container" onClick={toggleCart}>
            <CartIcon />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
