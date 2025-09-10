import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Granny Square Phone Case",
      description: "Vintage-inspired granny square design with floral motifs",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.9,
      reviews: 127,
      colors: ["pink", "lavender", "mint", "yellow"],
      tag: "Bestseller",
      imageSrc: "/lovable-uploads/dc8e4d59-e460-4695-8851-15aa6ce0435c.png"
    },
    {
      id: 2,
      name: "Colorful Mini Purses Set",
      description: "Set of 5 vibrant mini purses perfect for coins and small items",
      price: 45.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 89,
      colors: ["coral", "yellow", "lavender", "pink", "sage"],
      tag: "Bundle Deal",
      imageSrc: "/lovable-uploads/bbf41ead-1766-45e7-a918-442d9a025f67.png"
    },
    {
      id: 3,
      name: "Pokémon Keychains",
      description: "Cute crocheted Pokémon-inspired keychains",
      price: 12.99,
      originalPrice: 15.99,
      rating: 5.0,
      reviews: 203,
      colors: ["pink", "mint"],
      tag: "New",
      imageSrc: "/lovable-uploads/c37c8b51-c963-4b00-aee4-7027cb00ec34.png"
    },
    {
      id: 4,
      name: "Shell Soap Set",
      description: "Handcrafted shell-shaped soaps in natural tones",
      price: 18.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 156,
      colors: ["sage", "coral", "mint"],
      tag: "Natural",
      imageSrc: "/lovable-uploads/fa391553-fd2e-4d02-8fed-d5532585636f.png"
    }
  ];

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/50">Featured Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Most Loved
            <span className="block bg-gradient-warm bg-clip-text text-transparent">
              Knitted Treasures
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each item is lovingly handcrafted using premium yarns and traditional techniques. 
            Perfect for gifting or treating yourself to something special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.tag && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {product.tag}
                  </Badge>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-4 h-4" />
                </Button>
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

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
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

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;