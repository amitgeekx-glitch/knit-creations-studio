export type ProductCategory = 
  | "gifting-personalization"
  | "bag-key-accessories" 
  | "home-office-decor"
  | "tech-gadget-style";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  colors: string[];
  category: ProductCategory;
  tags: string[];
  imageSrc: string;
  featured?: boolean;
};

export const products: Product[] = [
  // Gifting & Personalization
  {
    id: "custom-name-pouch",
    name: "Custom Name Pouch",
    description: "Personalized mini pouch with custom embroidered name",
    price: 25.99,
    originalPrice: 32.99,
    rating: 4.9,
    reviews: 87,
    colors: ["pink", "lavender", "mint", "coral"],
    category: "gifting-personalization",
    tags: ["custom", "personalized", "gift"],
    imageSrc: "/lovable-uploads/745732a3-3426-4c63-9d59-5b26510ff317.png",
    featured: true
  },
  {
    id: "character-keychain-set",
    name: "Character Inspired Keychain Set",
    description: "Set of 3 cute character-inspired crocheted keychains",
    price: 18.99,
    rating: 5.0,
    reviews: 156,
    colors: ["pink", "mint", "yellow"],
    category: "gifting-personalization",
    tags: ["character", "cute", "set"],
    imageSrc: "/lovable-uploads/c37c8b51-c963-4b00-aee4-7027cb00ec34.png",
    featured: true
  },
  {
    id: "hanging-sunflower-charms",
    name: "Hanging Sunflower Charms",
    description: "Beautiful sunflower charms perfect for decoration",
    price: 15.99,
    rating: 4.8,
    reviews: 92,
    colors: ["yellow", "coral"],
    category: "gifting-personalization",
    tags: ["sunflower", "charm", "decoration"],
    imageSrc: "/lovable-uploads/ec09eb2c-e158-4677-b064-fcf5c693e7bb.png"
  },
  {
    id: "pastel-pillar-candles",
    name: "Pastel Ribbed Pillar Candles",
    description: "Hand-knitted covers for pillar candles in soft pastels",
    price: 22.99,
    rating: 4.7,
    reviews: 73,
    colors: ["lavender", "mint", "pink"],
    category: "gifting-personalization",
    tags: ["candle", "pastel", "cozy"],
    imageSrc: "/lovable-uploads/fa391553-fd2e-4d02-8fed-d5532585636f.png"
  },
  
  // Bag & Key Accessories
  {
    id: "star-heart-keychain",
    name: "Star & Heart Charm Keychain",
    description: "Adorable star and heart shaped keychain charms",
    price: 12.99,
    originalPrice: 16.99,
    rating: 4.9,
    reviews: 124,
    colors: ["pink", "coral", "mint"],
    category: "bag-key-accessories",
    tags: ["star", "heart", "charm"],
    imageSrc: "/lovable-uploads/ec09eb2c-e158-4677-b064-fcf5c693e7bb.png"
  },
  {
    id: "flower-dangling-charms",
    name: "Dangling Flower Charms",
    description: "Beautiful flower charms that dangle from your keys or bag",
    price: 14.99,
    rating: 4.8,
    reviews: 98,
    colors: ["coral", "yellow", "lavender"],
    category: "bag-key-accessories",
    tags: ["flower", "dangling", "charm"],
    imageSrc: "/lovable-uploads/ec09eb2c-e158-4677-b064-fcf5c693e7bb.png"
  },
  {
    id: "mini-bag-pouches",
    name: "Mini Bags & Pouches",
    description: "Tiny functional bags perfect for keys or small items",
    price: 19.99,
    rating: 4.9,
    reviews: 142,
    colors: ["coral", "yellow", "lavender", "pink", "sage"],
    category: "bag-key-accessories",
    tags: ["mini", "pouch", "functional"],
    imageSrc: "/lovable-uploads/bbf41ead-1766-45e7-a918-442d9a025f67.png",
    featured: true
  },
  
  // Home & Office Decor
  {
    id: "floral-hexagon-coaster",
    name: "Floral Hexagon Coaster/Ornament",
    description: "Multi-purpose hexagonal pieces for coasters or wall decor",
    price: 16.99,
    rating: 4.8,
    reviews: 67,
    colors: ["sage", "coral", "mint"],
    category: "home-office-decor",
    tags: ["hexagon", "coaster", "ornament"],
    imageSrc: "/lovable-uploads/fa391553-fd2e-4d02-8fed-d5532585636f.png"
  },
  {
    id: "hanging-flower-decor",
    name: "Hanging Flower Charms",
    description: "Decorative flower charms for mirror or wall decoration",
    price: 13.99,
    rating: 4.7,
    reviews: 85,
    colors: ["pink", "coral", "lavender"],
    category: "home-office-decor",
    tags: ["hanging", "flower", "wall decor"],
    imageSrc: "/lovable-uploads/ec09eb2c-e158-4677-b064-fcf5c693e7bb.png"
  },
  
  // Tech & Gadget Style
  {
    id: "crochet-heart-phone-case",
    name: "Crochet Heart Phone Case",
    description: "Protective phone case with adorable heart design",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviews: 203,
    colors: ["pink", "lavender", "mint"],
    category: "tech-gadget-style",
    tags: ["phone case", "heart", "protective"],
    imageSrc: "/lovable-uploads/dc8e4d59-e460-4695-8851-15aa6ce0435c.png",
    featured: true
  },
  {
    id: "tech-mini-pouches",
    name: "Tech Mini Pouches",
    description: "Perfect pouches for AirPods and charging cables",
    price: 17.99,
    rating: 4.8,
    reviews: 134,
    colors: ["sage", "coral", "mint", "pink"],
    category: "tech-gadget-style",
    tags: ["tech", "airpods", "cables"],
    imageSrc: "/lovable-uploads/bbf41ead-1766-45e7-a918-442d9a025f67.png"
  }
];

export const categories = [
  {
    id: "gifting-personalization",
    name: "Perfect for Gifting & Personalization",
    description: "A curated selection of the most giftable and customizable items",
    color: "yarn-pink",
    imageSrc: "/lovable-uploads/745732a3-3426-4c63-9d59-5b26510ff317.png"
  },
  {
    id: "bag-key-accessories", 
    name: "Bag & Key Accessories",
    description: "Everything designed to decorate and organize your keys, backpacks, and purses",
    color: "yarn-lavender",
    imageSrc: "/lovable-uploads/c37c8b51-c963-4b00-aee4-7027cb00ec34.png"
  },
  {
    id: "home-office-decor",
    name: "Cozy Home & Office Decor", 
    description: "Handmade touches to brighten up any personal space",
    color: "yarn-coral",
    imageSrc: "/lovable-uploads/fa391553-fd2e-4d02-8fed-d5532585636f.png"
  },
  {
    id: "tech-gadget-style",
    name: "Tech & Gadget Style",
    description: "Unique handmade accessories for your electronic devices", 
    color: "yarn-mint",
    imageSrc: "/lovable-uploads/dc8e4d59-e460-4695-8851-15aa6ce0435c.png"
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: ProductCategory) => products.filter(p => p.category === category);