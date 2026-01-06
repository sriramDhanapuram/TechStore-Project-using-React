// App.jsx - Main TechStore application with cart, wishlist, filtering, and theme toggle
import { useState, useEffect, useRef } from "react";
import products from "./data.js";
import "./App.css";

// Import all components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CartSidebar from "./components/CartSidebar";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // Extract unique brands using Set for efficient deduplication
  const allBrands = [...new Set(products.map((p) => p.brand))];

  // Ref for scroll to top functionality
  const topRef = useRef(null);
  
  function scrollToTop() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // State management
  // Cart items stored as array of objects with quantity
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from localStorage if available
    const savedCart = localStorage.getItem("techstore-cart");
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error("Problem!!! :", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    const cartItem = JSON.stringify(cartItems);
    localStorage.setItem("techstore-cart", cartItem);
  }, [cartItems]);

  // Wishlist stored as array of product IDs
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("techstore-wishlist");
    if (savedWishlist) {
      try {
        return JSON.parse(savedWishlist);
      } catch (error) {
        console.log("Problem : ", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("techstore-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Filters and UI states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  // Add product to cart, increment quantity if already exists
  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  // Calculate totals using reduce for aggregation
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  }

  // Filter products by search term (name and brand)
  let filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.brand &&
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  if (selectedBrand !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.brand === selectedBrand
    );
  }

  // Sort products based on selected criteria
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  } else if (sortBy === "name") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navigation Bar */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        toggleCart={toggleCart}
        wishlistCount={wishlist.length}
        cartCount={cartCount}
      />

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        cartCount={cartCount}
        cartTotal={cartTotal}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      {/* Overlay when cart is open */}
      {isCartOpen && <div className="overlay" onClick={toggleCart}></div>}

      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <ProductsSection
        ref={topRef}
        products={products}
        filteredProducts={filteredProducts}
        allBrands={allBrands}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        sortBy={sortBy}
        setSortBy={setSortBy}
        wishlist={wishlist}
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
      />

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollToTop onClick={scrollToTop} />
    </div>
  );
}

export default App;
