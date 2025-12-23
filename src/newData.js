const products = [
  // --- COMPUTERS ---
  {
    id: 1,
    name: "Apple iMac 27 Retina 5K",
    price: 169999,
    originalPrice: 199999,
    discount: "15% OFF",
    rating: 5.0,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Monitor/Images/250014_0_zm8htw.png",
    isBestSeller: true,
    brand: "Apple",
    category: "Desktop",
  },
  {
    id: 2,
    name: "MacBook Pro 16 M3 Max",
    price: 249900,
    originalPrice: 269900,
    discount: "7% OFF",
    rating: 4.9,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/301936_7_idxdaw.png",
    isBestSeller: true,
    category: "Laptop",
  },
  {
    id: 3,
    name: "MacBook Air 15 M2",
    price: 124900,
    originalPrice: 134900,
    discount: "8% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273880_g6cpks.png", // Reusing MacBook image
    category: "Laptop",
  },
  {
    id: 4,
    name: "Apple Studio Display",
    price: 159900,
    rating: 4.7,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Monitor/Images/250013_6_rmcc3u.png", // Reusing iMac image (looks like display)
    category: "Monitor",
  },

  // --- PHONES ---
  {
    id: 5,
    name: "iPhone 15 Pro Max Titanium",
    price: 159900,
    originalPrice: 169900,
    discount: "5% OFF",
    rating: 4.9,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300828_0_gdtzmh.png",
    isBestSeller: true,
    category: "Phone",
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
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309134_0_cv9vxa.png", // Placeholder: Samsung looks generic enough
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
      "data:image/jpeg;base64,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",
    category: "Gaming",
  },
  {
    id: 14,
    name: "PS5 DualSense Controller",
    price: 5900,
    rating: 4.8,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Gaming/Gaming%20Accessories/Images/307145_ood23z.png?tr=w-600", // Using the bundle image for controller representation
    category: "Gaming",
  },
  {
    id: 15,
    name: "Xbox Wireless Controller",
    price: 5390,
    rating: 4.6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoYTBkuyM7um4nLHVVO9Y0kzmkN6rpqdg7w&s", // Using console image
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
    category: "Laptop",
  },
  {
    id: 19,
    name: "Dell XPS 15 (Alternative)",
    price: 240000,
    rating: 4.6,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/255340_0_c2vnaz.png", // Using MacBook as generic laptop placeholder
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
    category: "Gaming",
  },
];

export default products;
