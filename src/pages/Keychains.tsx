import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";

const Keychains = () => {
  const keychains = [
    {
      id: 1,
      name: "Pokémon Keychains",
      description: "Cute crocheted Pokémon-inspired keychains",
      price: 12.99,
      originalPrice: 15.99,
      rating: 5.0,
      reviews: 203,
      colors: ["pink", "mint"],
      tag: "Bestseller",
      imageSrc: "/lovable-uploads/c37c8b51-c963-4b00-aee4-7027cb00ec34.png"
    },
    {
      id: 2,
      name: "Animal Character Set",
      description: "Adorable animal-themed keychain collection",
      price: 18.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 156,
      colors: ["coral", "yellow", "lavender"],
      tag: "New",
      imageSrc: "/lovable-uploads/c37c8b51-c963-4b00-aee4-7027cb00ec34.png"
    },
    {
      id: 3,
      name: "Flower Charm Keychains",
      description: "Delicate knitted flowers for your keys",
      price: 9.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 124,
      colors: ["pink", "sage", "mint"],
      tag: "Popular",
      imageSrc: "/lovable-uploads/c37c8b51-c963-4b00-aee4-7027cb00ec34.png"
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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Knitted
              <span className="block bg-gradient-warm bg-clip-text text-transparent">
                Keychains
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carry a piece of handcrafted art wherever you go. Our keychains add charm to your everyday essentials.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keychains.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
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

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">({product.reviews})</span>
                  </div>

                  <div className="flex gap-2 mb-4">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className={`w-4 h-4 rounded-full ${getYarnColorClass(color)} border-2 border-background shadow-sm`}
                      />
                    ))}
                  </div>

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

                  <Button className="w-full group/btn">
                    <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Keychains;