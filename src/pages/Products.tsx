import React, { useState, useMemo } from "react";
import { Search, Filter, Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { products, categories, type ProductCategory } from "@/data/products";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    if (priceRange !== "all") {
      switch (priceRange) {
        case "under-15":
          filtered = filtered.filter(product => product.price < 15);
          break;
        case "15-25":
          filtered = filtered.filter(product => product.price >= 15 && product.price <= 25);
          break;
        case "over-25":
          filtered = filtered.filter(product => product.price > 25);
          break;
      }
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case "featured":
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  const getYarnColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      pink: "bg-yarn-pink",
      lavender: "bg-yarn-lavender",
      mint: "bg-yarn-mint",
      yellow: "bg-yarn-yellow",
      coral: "bg-yarn-coral",
      sage: "bg-yarn-sage"
    };
    return colorMap[color] || "bg-primary";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            All Products
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of handmade knitted items, organized by purpose and use.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg shadow-soft p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-15">Under ₹15</SelectItem>
                <SelectItem value="15-25">₹15 - ₹25</SelectItem>
                <SelectItem value="over-25">Over ₹25</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviewed</SelectItem>
              </SelectContent>
            </Select>

            {/* Filter Icon */}
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.featured && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                <button
                  className={`absolute top-2 right-2 z-10 p-2 rounded-full transition-colors ${
                    isFavorite(product.id) 
                      ? 'bg-yarn-coral text-white' 
                      : 'bg-background/80 text-foreground hover:bg-yarn-coral hover:text-white'
                  }`}
                  onClick={() => toggleFavorite({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.imageSrc
                  })}
                  aria-label={isFavorite(product.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart 
                    fill={isFavorite(product.id) ? 'currentColor' : 'none'} 
                    className="w-5 h-5" 
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">({product.reviews})</span>
                </div>

                {/* Colors */}
                <div className="flex gap-2 mb-4">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className={`w-4 h-4 rounded-full ${getYarnColorClass(color)} border-2 border-background shadow-sm`}
                    />
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart */}
                <Button
                  className="w-full group/btn"
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.imageSrc
                  })}
                >
                  <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Products;