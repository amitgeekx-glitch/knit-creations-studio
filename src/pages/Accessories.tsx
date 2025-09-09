import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";

const Accessories = () => {
  const accessories = [
    {
      id: 1,
      name: "Knitted Flowers",
      description: "Decorative knitted embellishments and flowers",
      price: 8.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 145,
      colors: ["pink", "coral", "lavender"],
      tag: "Popular",
      imageSrc: "/lovable-uploads/ec09eb2c-e158-4677-b064-fcf5c693e7bb.png"
    },
    {
      id: 2,
      name: "Shell Soap Set",
      description: "Handcrafted shell-shaped soaps in natural tones",
      price: 18.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 156,
      colors: ["sage", "coral", "mint"],
      tag: "Natural",
      imageSrc: "/lovable-uploads/fa391553-fd2e-4d02-8fed-d5532585636f.png"
    },
    {
      id: 3,
      name: "Decorative Hearts",
      description: "Sweet heart-shaped knitted decorations",
      price: 12.99,
      originalPrice: 15.99,
      rating: 5.0,
      reviews: 89,
      colors: ["pink", "coral", "yellow"],
      tag: "Sale",
      imageSrc: "/lovable-uploads/ec09eb2c-e158-4677-b064-fcf5c693e7bb.png"
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
                Accessories
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beautiful decorative pieces and unique accessories to add charm to your life and home.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessories.map((product) => (
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

export default Accessories;