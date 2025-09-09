import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, Mail, MessageCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About
              <span className="block bg-gradient-warm bg-clip-text text-transparent">
                Artisanal Knits
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the story behind our handcrafted knitted treasures and the passion that drives every stitch.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Badge className="bg-secondary/50">Our Story</Badge>
              <h2 className="text-3xl font-bold">Crafted with Love & Tradition</h2>
              <p className="text-muted-foreground">
                What started as a hobby during quiet evenings has blossomed into a passion for creating 
                beautiful, functional art. Each stitch represents hours of careful work, choosing the 
                perfect colors and patterns to bring joy to everyday items.
              </p>
              <p className="text-muted-foreground">
                From our first simple phone case to the diverse collection you see today, we've 
                maintained our commitment to quality, creativity, and the personal touch that 
                makes handmade items so special.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/2c64662d-38be-46d6-b35a-bed6dfb708d6.png" 
                  alt="Artisan at work" 
                  className="rounded-lg shadow-soft"
                />
                <img 
                  src="/lovable-uploads/9415d851-a041-4fe5-b889-4b41fbcde8e7.png" 
                  alt="Crafting process" 
                  className="rounded-lg shadow-soft mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every piece tells a story of passion, skill, and dedication to the timeless art of knitting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-warm transition-shadow">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Made with Love</h3>
              <p className="text-muted-foreground">
                Every piece is crafted with genuine care and attention to detail, ensuring quality that lasts.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-warm transition-shadow">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Materials</h3>
              <p className="text-muted-foreground">
                We use only the finest yarns and materials to ensure comfort, durability, and beauty.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-warm transition-shadow">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Focused</h3>
              <p className="text-muted-foreground">
                Building connections through craft, supporting local artisans and sustainable practices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or want to discuss a custom order? We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Send us a message and we'll get back to you within 24 hours.
              </p>
              <Button variant="outline">
                artisanaltreasures19@email.com
              </Button>
            </Card>

            <Card className="p-8">
              <MessageCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <p className="text-muted-foreground mb-4">
                Stay updated with our latest creations and behind-the-scenes content.
              </p>
              <Button variant="outline">
                @artisanaltreasures_19
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;