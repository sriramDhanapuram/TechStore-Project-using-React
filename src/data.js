/**
 * data.js - Main Product Database for TechStore
 * 
 * This file contains the complete product catalog used by the main App.jsx component.
 * It's the primary data source for the TechStore e-commerce application.
 * 
 * ============================================================================
 * DATA STRUCTURE
 * ============================================================================
 * Each product object contains the following properties:
 * 
 * REQUIRED PROPERTIES:
 * - id (number): Unique identifier for the product
 *   Used as React "key" prop and for cart/wishlist operations
 *   Must never be duplicated across products
 * 
 * - name (string): Product display name/title
 *   Shown on product cards and in cart
 * 
 * - price (number): Current selling price in INR (Indian Rupees)
 *   Stored as integer without decimal (e.g., 169999 = ₹1,69,999)
 *   Formatted with toLocaleString() for display
 * 
 * - rating (number): Product rating from 1.0 to 5.0
 *   Used to display star ratings and for sorting
 * 
 * - image (string): URL to product image
 *   Should be PNG/JPEG format, transparent background preferred
 *   Images sourced primarily from Croma website
 * 
 * - brand (string): Manufacturer/brand name
 *   Used for brand filtering functionality
 *   Examples: "Apple", "Samsung", "Sony", "Google", etc.
 * 
 * - category (string): Product category
 *   Used for categorization and filtering
 *   Categories: "Desktop", "Laptop", "Phone", "Tablet", "Gaming", 
 *               "Camera", "Lens", "Charger", "Wireless Charger", "Storage"
 * 
 * OPTIONAL PROPERTIES:
 * - originalPrice (number): Original MRP before discount
 *   If present, shows strikethrough price on card
 * 
 * - discount (string): Discount text like "15% OFF", "10% OFF"
 *   If present, shows discount badge on product card
 * 
 * - isBestSeller (boolean): Flag for popular products
 *   If true, shows "Best Seller" badge on card
 * 
 * ============================================================================
 * PRODUCT CATEGORIES (Total ~70 products)
 * ============================================================================
 * 1. Desktops & Computers (iMac, etc.)
 * 2. Phones (iPhone, Samsung Galaxy, Google Pixel)
 * 3. Tablets (iPad Pro, iPad Air)
 * 4. Gaming (PlayStation 5, Xbox, Controllers)
 * 5. Laptops (MacBook Pro, Dell XPS)
 * 6. Cameras (Canon, Sony, Nikon, GoPro)
 * 7. Camera Lenses (Canon, Sony, Nikon lenses)
 * 8. Chargers (Apple, Samsung, Google chargers)
 * 9. Wireless Chargers (MagSafe, Samsung, Google)
 * 10. Storage (USB Pen Drives - SanDisk, Samsung, HP, Kingston)
 * 
 * ============================================================================
 * USAGE IN APPLICATION
 * ============================================================================
 * This data is imported in App.jsx:
 *   import products from "./data.js";
 * 
 * And used for:
 * - Displaying product cards in the product grid
 * - Filtering by search term (name/brand)
 * - Filtering by brand dropdown
 * - Sorting by price/rating/name
 * - Adding to cart functionality
 * - Wishlist functionality
 * 
 * ============================================================================
 * NOTE: In a production application, this data would come from:
 * - REST API endpoints
 * - GraphQL queries
 * - Database queries (MongoDB, PostgreSQL, etc.)
 * - Headless CMS (Contentful, Strapi, etc.)
 * - E-commerce platforms (Shopify, WooCommerce API)
 * ============================================================================
 */

const products = [
  {
    id: 1,
    name: "Apple iMac 27, 1TB HDD, Retina 5K",
    price: 169999,
    originalPrice: 1999,
    discount: "35% OFF",
    rating: 5.0,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Desktops/Images/311754_0_p4etiv.png",
    isBestSeller: true,
    brand: "Apple",
    category: "Desktop",
  },

  {
    id: 2,
    name: "Apple iPhone 17 Pro Max, 1TB",
    price: 129999,
    originalPrice: 1500,
    rating: 4.0,
    discount: "15% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/317417_0_7ISiBcc4Y.png?updatedAt=1757529273198",
    isBestSeller: true,
    brand: "Apple",
    category: "Phone",
  },
  {
    id: 3,
    name: "iPad Pro 13-Inch (M4): XDR Display, 512GB",
    price: 89999,
    rating: 4.9,
    discount: "35% OFF",
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264226_fefcjf.png",
    brand: "Apple",
    category: "Tablet",
  },
  {
    id: 4,
    name: "Samsung S25 Ultra, 1TB",
    price: 129999,
    originalPrice: 1500,
    rating: 4.9,
    discount: "15% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/316059_0_q4clnn.png",
    isBestSeller: true,
    brand: "Samsung",
    category: "Phone",
  },
  {
    id: 5,
    name: "PlayStation 5 Console - 1TB, PRO Controller",
    price: 68999,
    rating: 4.8,
    discount: "10% OFF",
    image:
      "https://media.tatacroma.com/Croma%20Assets/Gaming/Gaming%20Consoles/Images/305985_ilpfe3.png",
    brand: "Sony",
    category: "Gaming",
  },

  {
    id: 6,
    name: "Samsung Galaxy S25 Ultra",
    price: 124999,
    originalPrice: 144999,
    discount: "14% OFF",
    rating: 4.8,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/316059_0_q4clnn.png",
    isBestSeller: true,
    brand: "Samsung",
    category: "Phone",
  },
  {
    id: 7,
    name: "iPhone 14 Plus Blue",
    price: 69900,
    originalPrice: 79900,
    discount: "12% OFF",
    rating: 4.6,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/261949_0_o0rd9d.png",
    brand: "Apple",
    category: "Phone",
  },
  {
    id: 8,
    name: "Google Pixel 8 Pro",
    price: 93999,
    originalPrice: 106999,
    discount: "12% OFF",
    rating: 4.5,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309134_0_cv9vxa.png",
    brand: "Google",
    category: "Phone",
  },
  {
    id: 9,
    name: "Galaxy Z Fold 6",
    price: 164999,
    originalPrice: 174999,
    discount: "6% OFF",
    rating: 4.7,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/308188_0_upzg1b.png",
    brand: "Samsung",
    category: "Phone",
  },

  // --- TABLETS ---
  {
    id: 10,
    name: "iPad Pro 13 (M4)",
    price: 129900,
    originalPrice: 139900,
    discount: "7% OFF",
    rating: 4.9,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/301976_1_qaq6hk.png",
    isBestSeller: true,
    brand: "Apple",
    category: "Tablet",
  },
  {
    id: 11,
    name: "iPad Air 11 (M2)",
    price: 59900,
    originalPrice: 65900,
    discount: "9% OFF",
    rating: 4.7,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/301927_2_rhqs3m.png",
    brand: "Apple",
    category: "Tablet",
  },

  // --- GAMING ---
  {
    id: 12,
    name: "Sony PlayStation 5 Slim",
    price: 49990,
    originalPrice: 54990,
    discount: "9% OFF",
    rating: 4.9,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Gaming/Gaming%20Consoles/Images/305985_ilpfe3.png",
    brand: "Sony",
    category: "Gaming",
  },
  {
    id: 13,
    name: "Xbox Series X",
    price: 48990,
    originalPrice: 55990,
    discount: "12% OFF",
    rating: 4.7,
    image:
      "https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png",
    brand: "Microsoft",
    category: "Gaming",
  },
  {
    id: 14,
    name: "PS5 DualSense Controller",
    price: 5900,
    rating: 4.8,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Gaming/Gaming%20Accessories/Images/307145_ood23z.png?tr=w-600",
    brand: "Sony",
    category: "Gaming",
  },
  {
    id: 15,
    name: "Xbox Wireless Controller",
    price: 5390,
    rating: 4.6,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Gaming/Gaming%20Accessories/Images/258442_qfkztv.png",
    brand: "Microsoft",
    category: "Gaming",
  },

  // --- MORE PHONES/COMPUTERS ---
  {
    id: 16,
    name: "Samsung Galaxy S24 FE",
    price: 54999,
    originalPrice: 65999,
    discount: "16% OFF",
    rating: 4.5,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/311523_0_purtk1.png",
    brand: "Samsung",
    category: "Phone",
  },
  {
    id: 17,
    name: "iPhone 13 Starlight",
    price: 49900,
    originalPrice: 59900,
    discount: "17% OFF",
    rating: 4.7,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/243460_0_CILAYIAIB.png?updatedAt=1762431620782",
    brand: "Apple",
    category: "Phone",
  },
  {
    id: 18,
    name: "MacBook Pro 14 M3",
    price: 169900,
    originalPrice: 189900,
    discount: "10% OFF",
    rating: 4.8,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305748_nbrbma.png",
    brand: "Apple",
    category: "Laptop",
  },
  {
    id: 19,
    name: "Dell XPS 15",
    price: 240000,
    rating: 4.6,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/255340_0_c2vnaz.png",
    brand: "Dell",
    category: "Laptop",
  },
  {
    id: 20,
    name: "Sony PS5 Digital Edition",
    price: 44990,
    discount: "5% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/316841_0_3PBoI2KDZ.png?updatedAt=1762776920489",
    brand: "Sony",
    category: "Gaming",
  },
  {
    id: 21,
    name: "iPhone 15 Pro Max Titanium",
    price: 159900,
    originalPrice: 169900,
    discount: "5% OFF",
    rating: 4.9,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300828_0_gdtzmh.png",
    isBestSeller: true,
    brand: "Apple",
    category: "Phone",
  },

  // --- CAMERAS ---
  {
    id: 22,
    name: "Canon EOS R5 Full Frame Mirrorless Camera",
    price: 339990,
    originalPrice: 369990,
    discount: "8% OFF",
    rating: 4.9,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/270721_13_cd2y4m.png",
    isBestSeller: true,
    brand: "Canon",
    category: "Camera",
  },
  {
    id: 23,
    name: "Sony Alpha 7 IV Full Frame Camera",
    price: 242990,
    originalPrice: 269990,
    discount: "10% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/248802_3_jpkfcu.png",
    isBestSeller: true,
    brand: "Sony",
    category: "Camera",
  },
  {
    id: 24,
    name: "Nikon Z8 Full Frame Mirrorless Camera",
    price: 329990,
    originalPrice: 359990,
    discount: "8% OFF",
    rating: 4.9,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/273249_7_7eCAaGPNu.png?updatedAt=1760542444756",
    brand: "Nikon",
    category: "Camera",
  },
  {
    id: 25,
    name: "Canon EOS 90D DSLR Camera",
    price: 114990,
    originalPrice: 129990,
    discount: "12% OFF",
    rating: 4.7,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/259482_q3xqat.png",
    brand: "Canon",
    category: "Camera",
  },
  {
    id: 26,
    name: "Sony ZV-E10 Vlogging Camera",
    price: 54990,
    originalPrice: 64990,
    discount: "15% OFF",
    rating: 4.6,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/244230_0_bvyoln.png",
    brand: "Sony",
    category: "Camera",
  },
  {
    id: 27,
    name: "GoPro HERO12 Black Action Camera",
    price: 44990,
    originalPrice: 49990,
    discount: "10% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/300426_c7rspu.png",
    isBestSeller: true,
    brand: "GoPro",
    category: "Camera",
  },

  // --- CAMERA LENSES ---
  {
    id: 28,
    name: "Canon RF 24-70mm f/2.8L IS USM Lens",
    price: 219990,
    originalPrice: 239990,
    discount: "8% OFF",
    rating: 4.9,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20Accessories/Images/215083_3_qb1pl8.png",
    brand: "Canon",
    category: "Lens",
  },
  {
    id: 29,
    name: "Sony FE 70-200mm f/2.8 GM OSS II Lens",
    price: 229990,
    originalPrice: 249990,
    discount: "8% OFF",
    rating: 4.9,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20Accessories/Images/215081_0_lh9flt.png?tr=w-600",
    isBestSeller: true,
    brand: "Sony",
    category: "Lens",
  },
  {
    id: 30,
    name: "Nikon NIKKOR Z 50mm f/1.8 S Lens",
    price: 54990,
    originalPrice: 64990,
    discount: "15% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20Accessories/Images/319541_0_4YyvdoFen.png?updatedAt=1762161584994",
    brand: "Nikon",
    category: "Lens",
  },
  {
    id: 31,
    name: "Canon EF 50mm f/1.8 STM Lens",
    price: 11990,
    originalPrice: 13990,
    discount: "14% OFF",
    rating: 4.7,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20Accessories/Images/190791_11_nkuje0.png",
    brand: "Canon",
    category: "Lens",
  },
  {
    id: 32,
    name: "Sony FE 24-105mm f/4 G OSS Lens",
    price: 109990,
    originalPrice: 124990,
    discount: "12% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20Accessories/Images/207721_9_mekx9c.png",
    brand: "Sony",
    category: "Lens",
  },

  // --- APPLE CHARGERS ---
  {
    id: 33,
    name: "Apple 20W USB-C Power Adapter",
    price: 1900,
    originalPrice: 2100,
    discount: "10% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/230033_5_zdww1u.png",
    isBestSeller: true,
    brand: "Apple",
    category: "Charger",
  },
  {
    id: 34,
    name: "Apple 35W Dual USB-C Port Power Adapter",
    price: 5590,
    originalPrice: 6100,
    discount: "8% OFF",
    rating: 4.7,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/305437_5_acfqpk.png",
    brand: "Apple",
    category: "Charger",
  },
  {
    id: 35,
    name: "Apple 140W USB-C Power Adapter",
    price: 9900,
    originalPrice: 10900,
    discount: "9% OFF",
    rating: 4.9,
    image:
    "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/245237_0_pci9h8.png",
    brand: "Apple",
    category: "Charger",
  },
  {
    id: 36,
    name: "Apple MagSafe Charger",
    price: 4500,
    originalPrice: 4900,
    discount: "8% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/230034_6_jqdlva.png",
    isBestSeller: true,
    brand: "Apple",
    category: "Charger",
  },
  {
    id: 37,
    name: "Apple MagSafe Duo Charger",
    price: 14500,
    originalPrice: 15900,
    discount: "9% OFF",
    rating: 4.7,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/300303_6_ii3uwo.png",
    brand: "Apple",
    category: "Charger",
  },
  {
    id: 38,
    name: "Apple Watch Magnetic Fast Charger to USB-C Cable",
    price: 2900,
    originalPrice: 3300,
    discount: "12% OFF",
    rating: 4.6,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Wearables/Wearable%20Accessories/Images/301213_torcdz.png",
    brand: "Apple",
    category: "Charger",
  },

  // --- USB PEN DRIVES ---
  {
    id: 39,
    name: "SanDisk Ultra Dual Drive 128GB USB 3.1 Type-C Pen Drive",
    price: 1299,
    originalPrice: 1599,
    discount: "19% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Storage%20Devices/Images/312613_tvot0k.png?tr=w-600",
    isBestSeller: true,
    brand: "SanDisk",
    category: "Storage",
  },
  {
    id: 40,
    name: "SanDisk Ultra Flair 64GB USB 3.0 Pen Drive",
    price: 599,
    originalPrice: 799,
    discount: "25% OFF",
    rating: 4.6,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/221490_4_DSDNVubCYN.png?updatedAt=1753785709232",
    brand: "SanDisk",
    category: "Storage",
  },
  {
    id: 41,
    name: "HP v236w 32GB USB 2.0 Pen Drive",
    price: 449,
    originalPrice: 599,
    discount: "25% OFF",
    rating: 4.4,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Storage%20Devices/Images/200378_0_sdvd6q.png",
    brand: "HP",
    category: "Storage",
  },
  {
    id: 42,
    name: "Samsung BAR Plus 256GB USB 3.1 Pen Drive",
    price: 2499,
    originalPrice: 2999,
    discount: "17% OFF",
    rating: 4.8,
    image:
      "/Samsung BAR Plus 256GB USB 3.1 Pen Drive.png",
    isBestSeller: true,
    brand: "Samsung",
    category: "Storage",
  },
  {
    id: 43,
    name: "SanDisk iXpand Flash Drive 128GB for iPhone",
    price: 3999,
    originalPrice: 4599,
    discount: "13% OFF",
    rating: 4.5,
    image:
    "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Storage%20Devices/Images/241494_5_tg41yp.png",
    brand: "SanDisk",
    category: "Storage",
  },
  {
    id: 44,
    name: "Kingston DataTraveler Exodia 64GB USB 3.2 Pen Drive",
    price: 549,
    originalPrice: 699,
    discount: "21% OFF",
    rating: 4.5,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Storage%20Devices/Images/233145_0_qdrylw.png",
    brand: "Kingston",
    category: "Storage",
  },
  {
    id: 45,
    name: "SanDisk Cruzer Blade 32GB USB 2.0 Pen Drive",
    price: 399,
    originalPrice: 499,
    discount: "20% OFF",
    rating: 4.4,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Storage%20Devices/Images/171078_3_zp6iy9.png",
    brand: "SanDisk",
    category: "Storage",
  },

  // --- TRENDING SAMSUNG MOBILES ---
  {
    id: 46,
    name: "Samsung Galaxy S24 Ultra 5G 512GB",
    price: 134999,
    originalPrice: 149999,
    discount: "10% OFF",
    rating: 4.9,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/303809_kwm8bv.png",
    isBestSeller: true,
    brand: "Samsung",
    category: "Phone",
  },
  {
    id: 47,
    name: "Samsung Galaxy S24+ 5G 256GB",
    price: 99999,
    originalPrice: 109999,
    discount: "9% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/303862_albfdi.png",
    brand: "Samsung",
    category: "Phone",
  },
  {
    id: 48,
    name: "Samsung Galaxy S24 5G 256GB",
    price: 79999,
    originalPrice: 89999,
    discount: "11% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/303849_evezut.png?tr=w-600",
    brand: "Samsung",
    category: "Phone",
  },
  {
    id: 49,
    name: "Samsung Galaxy Z Flip6 5G 256GB",
    price: 109999,
    originalPrice: 119999,
    discount: "8% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/308189_0_x6pmtl.png",
    isBestSeller: true,
    brand: "Samsung",
    category: "Phone",
  },
  {
    id: 50,
    name: "Samsung Galaxy Z Fold6 5G 512GB",
    price: 169999,
    originalPrice: 184999,
    discount: "8% OFF",
    rating: 4.9,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/308185_0_swbe2z.png?tr=w-600",
    brand: "Samsung",
    category: "Phone",
  },
  {
    id: 51,
    name: "Samsung Galaxy A55 5G 256GB",
    price: 39999,
    originalPrice: 44999,
    discount: "11% OFF",
    rating: 4.6,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/305507_0_l9z9rj.png",
    brand: "Samsung",
    category: "Phone",
  },
  {
    id: 52,
    name: "Samsung Galaxy A35 5G 128GB",
    price: 29999,
    originalPrice: 34999,
    discount: "14% OFF",
    rating: 4.5,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/305473_0_atq07o.png?tr=w-600",
    brand: "Samsung",
    category: "Phone",
  },
  {
    id: 53,
    name: "Samsung Galaxy M55 5G 128GB",
    price: 26999,
    originalPrice: 29999,
    discount: "10% OFF",
    rating: 4.4,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/306021_0_z3nfh1.png",
    brand: "Samsung",
    category: "Phone",
  },

  // --- GOOGLE PIXEL MOBILES ---
  {
    id: 54,
    name: "Google Pixel 9 Pro XL 256GB",
    price: 124999,
    originalPrice: 134999,
    discount: "7% OFF",
    rating: 4.9,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309155_0_hlghjt.png",
    isBestSeller: true,
    brand: "Google",
    category: "Phone",
  },
  {
    id: 55,
    name: "Google Pixel 9 Pro 256GB",
    price: 109999,
    originalPrice: 119999,
    discount: "8% OFF",
    rating: 4.8,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309139_0_twgtjr.png",
    brand: "Google",
    category: "Phone",
  },
  {
    id: 56,
    name: "Google Pixel 9 128GB",
    price: 79999,
    originalPrice: 89999,
    discount: "11% OFF",
    rating: 4.7,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309168_10_pgpf7w.png",
    brand: "Google",
    category: "Phone",
  },
  {
    id: 57,
    name: "Google Pixel 9 Pro Fold 256GB",
    price: 172999,
    originalPrice: 189999,
    discount: "9% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309152_0_ngrfps.png",
    isBestSeller: true,
    brand: "Google",
    category: "Phone",
  },
  {
    id: 58,
    name: "Google Pixel 8a 128GB",
    price: 52999,
    originalPrice: 59999,
    discount: "12% OFF",
    rating: 4.6,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309153_0_rax3nf.png",
    brand: "Google",
    category: "Phone",
  },
  {
    id: 59,
    name: "Google Pixel 8 256GB",
    price: 69999,
    originalPrice: 79999,
    discount: "12% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309142_0_v7zdex.png",
    brand: "Google",
    category: "Phone",
  },

  // --- SAMSUNG CHARGERS ---
  {
    id: 60,
    name: "Samsung 25W USB-C Fast Charger",
    price: 1499,
    originalPrice: 1999,
    discount: "25% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/306613_0_ltn8vw.png",
    isBestSeller: true,
    brand: "Samsung",
    category: "Charger",
  },
  {
    id: 61,
    name: "Samsung 45W USB-C Super Fast Charger 2.0",
    price: 2999,
    originalPrice: 3499,
    discount: "14% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobile%20Accessories/Images/313722_0_iqeibp.png",
    brand: "Samsung",
    category: "Charger",
  },
  {
    id: 62,
    name: "Samsung 65W Power Adapter Trio",
    price: 4499,
    originalPrice: 4999,
    discount: "10% OFF",
    rating: 4.6,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/266105_4_uwzdnv.png",
    brand: "Samsung",
    category: "Charger",
  },

  // --- SAMSUNG WIRELESS CHARGERS ---
  {
    id: 63,
    name: "Samsung 15W Wireless Charger Pad",
    price: 2499,
    originalPrice: 2999,
    discount: "17% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobile%20Accessories/Images/265583_0_wod9gt.png?tr=w-600",
    isBestSeller: true,
    brand: "Samsung",
    category: "Wireless Charger",
  },
  {
    id: 64,
    name: "Samsung 15W Wireless Charger Stand",
    price: 3499,
    originalPrice: 3999,
    discount: "12% OFF",
    rating: 4.6,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobile%20Accessories/Images/237023_0_tqfrfh.png",
    brand: "Samsung",
    category: "Wireless Charger",
  },
  {
    id: 65,
    name: "Samsung Wireless Charger Duo Pad",
    price: 5999,
    originalPrice: 6999,
    discount: "14% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/261817_12_x45u0a.png",
    brand: "Samsung",
    category: "Wireless Charger",
  },
  {
    id: 66,
    name: "Samsung Super Fast Wireless Charger",
    price: 4499,
    originalPrice: 5499,
    discount: "18% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/261816_0_dvv1ot.png",
    brand: "Samsung",
    category: "Wireless Charger",
  },

  // --- GOOGLE CHARGERS ---
  {
    id: 67,
    name: "Google 30W USB-C Power Adapter",
    price: 2499,
    originalPrice: 2999,
    discount: "17% OFF",
    rating: 4.7,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/310626_oigfpy.png",
    isBestSeller: true,
    brand: "Google",
    category: "Charger",
  },
  {
    id: 68,
    name: "Google 45W USB-C Power Adapter",
    price: 3999,
    originalPrice: 4499,
    discount: "11% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/310627_ne0vks.png",
    brand: "Google",
    category: "Charger",
  },

  // --- GOOGLE WIRELESS CHARGERS ---
  {
    id: 69,
    name: "Google Pixel Stand 2nd Gen Wireless Charger",
    price: 8999,
    originalPrice: 9999,
    discount: "10% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/221813_0_x7ntly.png",
    isBestSeller: true,
    brand: "Google",
    category: "Wireless Charger",
  },
  {
    id: 70,
    name: "Google Pixel Watch Wireless Charger",
    price: 2999,
    originalPrice: 3499,
    discount: "14% OFF",
    rating: 4.6,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/303359_vznjtt.png",
    brand: "Google",
    category: "Wireless Charger",
  },
];

// ============================================================================
// EXPORT
// ============================================================================
/**
 * Default Export
 * 
 * exports the products array as the default export of this module.
 * This allows the array to be imported with any name:
 * 
 * import products from "./data.js";      // Standard import
 * import myProducts from "./data.js";    // Custom name also works
 * 
 * The default export is the main/primary export from a file.
 * A file can have only ONE default export but multiple named exports.
 */
export default products;
