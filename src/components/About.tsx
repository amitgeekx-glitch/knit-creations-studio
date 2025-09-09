import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and decorative elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/lovable-uploads/9415d851-a041-4fe5-b889-4b41fbcde8e7.png"
                alt="Handcrafted watercolor ornaments"
                className="rounded-xl shadow-soft h-64 w-full object-cover"
              />
              <div className="space-y-4">
                <img
                  src="/lovable-uploads/162485d8-ac15-4666-81cd-a74fba9b91d9.png"
                  alt="Beautiful shell soaps"
                  className="rounded-xl shadow-soft h-30 w-full object-cover"
                />
                <img
                  src="/lovable-uploads/2c64662d-38be-46d6-b35a-bed6dfb708d6.png"
                  alt="Crocheted star keychain"
                  className="rounded-xl shadow-soft h-30 w-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating quote card */}
            <Card className="absolute -bottom-6 -right-6 bg-card/95 backdrop-blur-sm p-6 shadow-warm max-w-xs">
              <p className="text-center italic text-muted-foreground mb-3">
                "Do small things with great love"
              </p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-yarn-pink rounded-full"></div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-gradient-warm text-white">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting Beautiful Things
                <span className="block bg-gradient-warm bg-clip-text text-transparent">
                  One Stitch at a Time
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Welcome to YarnCrafts, where every piece tells a story of passion, 
                  creativity, and dedication. What started as a personal hobby has 
                  blossomed into a collection of beautiful, handmade treasures that 
                  bring joy to everyday life.
                </p>
                <p>
                  Each item in our collection is carefully crafted using premium 
                  yarns and traditional techniques passed down through generations. 
                  From adorable phone cases to charming keychains, every piece is 
                  made with love and attention to detail.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yarn-pink/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-yarn-pink" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Items Crafted</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yarn-lavender/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-yarn-lavender" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">200+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yarn-mint/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-yarn-mint" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Handmade</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Premium quality yarns from trusted suppliers</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Custom designs and personalization available</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Eco-friendly materials and sustainable practices</span>
              </div>
            </div>

            <Button size="lg" className="group shadow-warm">
              Learn More About Us
              <Heart className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;