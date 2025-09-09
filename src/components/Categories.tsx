import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Phone Cases",
      description: "Protective & stylish knitted cases",
      itemCount: "15+ designs",
      color: "yarn-pink",
      imageSrc: "/lovable-uploads/dc8e4d59-e460-4695-8851-15aa6ce0435c.png"
    },
    {
      name: "Keychains", 
      description: "Cute character & decorative keychains",
      itemCount: "25+ designs",
      color: "yarn-lavender",
      imageSrc: "/lovable-uploads/c37c8b51-c963-4b00-aee4-7027cb00ec34.png"
    },
    {
      name: "Mini Purses",
      description: "Perfect pouches for coins & essentials", 
      itemCount: "12+ colors",
      color: "yarn-mint",
      imageSrc: "/lovable-uploads/745732a3-3426-4c63-9d59-5b26510ff317.png"
    },
    {
      name: "Hearts & Flowers",
      description: "Decorative knitted embellishments",
      itemCount: "20+ styles",
      color: "yarn-coral",
      imageSrc: "/lovable-uploads/ec09eb2c-e158-4677-b064-fcf5c693e7bb.png"
    }
  ];

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      "yarn-pink": "from-yarn-pink/20 to-yarn-pink/5 border-yarn-pink/20",
      "yarn-lavender": "from-yarn-lavender/20 to-yarn-lavender/5 border-yarn-lavender/20", 
      "yarn-mint": "from-yarn-mint/20 to-yarn-mint/5 border-yarn-mint/20",
      "yarn-coral": "from-yarn-coral/20 to-yarn-coral/5 border-yarn-coral/20"
    };
    return colorMap[color] || "from-primary/20 to-primary/5 border-primary/20";
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by
            <span className="block bg-gradient-warm bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections of handmade knitted items. 
            Each category features unique designs made with love and premium materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name} 
              className={`group cursor-pointer overflow-hidden hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${getColorClass(category.color)} border`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={category.imageSrc}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium bg-background/80 px-3 py-1 rounded-full">
                    {category.itemCount}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group bg-background/80 backdrop-blur-sm">
            View All Categories
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;