import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yarn-pink/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yarn-lavender/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yarn-mint/20 rounded-full blur-lg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Handcrafted with Love</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Beautiful
                <span className="block bg-gradient-warm bg-clip-text text-transparent">
                  Knitted Crafts
                </span>
                for Every Occasion
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover our collection of handmade knitted phone cases, keychains, 
                mini purses, and accessories. Each piece is crafted with premium yarn 
                and attention to detail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group shadow-warm">
                Shop Collection
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Heart className="w-4 h-4 mr-2" />
                View Favorites
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Handmade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">★★★★★</div>
                <div className="text-sm text-muted-foreground">5-Star Reviews</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-warm transition-shadow">
                  <div className="w-full h-32 bg-yarn-pink/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-yarn-pink font-semibold">Phone Cases</span>
                  </div>
                  <h3 className="font-semibold mb-2">Knitted Phone Cases</h3>
                  <p className="text-sm text-muted-foreground">Protect your phone with style</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-warm transition-shadow">
                  <div className="w-full h-24 bg-yarn-lavender/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-yarn-lavender font-semibold">Keychains</span>
                  </div>
                  <h3 className="font-semibold mb-2">Cute Keychains</h3>
                  <p className="text-sm text-muted-foreground">Adorable accessories</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-warm transition-shadow">
                  <div className="w-full h-24 bg-yarn-mint/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-yarn-mint font-semibold">Mini Purses</span>
                  </div>
                  <h3 className="font-semibold mb-2">Mini Purses</h3>
                  <p className="text-sm text-muted-foreground">Perfect for essentials</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-warm transition-shadow">
                  <div className="w-full h-32 bg-yarn-yellow/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-yarn-yellow font-semibold">Flowers</span>
                  </div>
                  <h3 className="font-semibold mb-2">Knitted Flowers</h3>
                  <p className="text-sm text-muted-foreground">Everlasting beauty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;