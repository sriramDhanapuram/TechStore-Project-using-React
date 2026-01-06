// ProductsSection.jsx - Products grid with search, filter, and sort controls
import { forwardRef } from "react";
import ProductCard from "./ProductCard";

const ProductsSection = forwardRef(
  (
    {
      products,
      filteredProducts,
      allBrands,
      searchTerm,
      setSearchTerm,
      selectedBrand,
      setSelectedBrand,
      sortBy,
      setSortBy,
      wishlist,
      addToCart,
      toggleWishlist,
    },
    ref
  ) => {
    return (
      <section className="products-section" id="products" ref={ref}>
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">
            Our most popular products loved by customers
          </p>
        </div>
        <div className="filter-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="brand-filter">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Brands</option>
              {allBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div className="sort-filter">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="default">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>
        </div>
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((data) => (
              <ProductCard
                key={data.id}
                id={data.id}
                image={data.image}
                name={data.name}
                price={data.price}
                originalPrice={data.originalPrice}
                discount={data.discount}
                rating={data.rating}
                isBestSeller={data.isBestSeller}
                isWishlisted={wishlist.includes(data.id)}
                onAddToCart={() => addToCart(data)}
                onToggleWishlist={() => toggleWishlist(data.id)}
              />
            ))
          ) : (
            <p className="no-products">
              No products found matching your criteria.
            </p>
          )}
        </div>
      </section>
    );
  }
);

ProductsSection.displayName = "ProductsSection";

export default ProductsSection;
