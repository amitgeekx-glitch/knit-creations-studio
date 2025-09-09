import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles, Heart, Palette, Clock } from "lucide-react";

const CustomOrders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Made Just for You</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Custom
              <span className="block bg-gradient-warm bg-clip-text text-transparent">
                Knitted Orders
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a special idea? Let us bring your vision to life with our custom knitting services. 
              Each piece is uniquely crafted for you.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-warm transition-shadow">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Your Colors</h3>
              <p className="text-muted-foreground">Choose from our premium yarn collection or request specific colors to match your style.</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-warm transition-shadow">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Personal Touch</h3>
              <p className="text-muted-foreground">Add names, dates, or special messages to make your item truly one-of-a-kind.</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-warm transition-shadow">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
              <p className="text-muted-foreground">Most custom orders completed within 2-3 weeks with regular progress updates.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Custom Order Form</Badge>
            <h2 className="text-3xl font-bold mb-4">Tell Us About Your Vision</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours with a quote and timeline.</p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="item-type">Item Type</Label>
                <Input id="item-type" placeholder="Phone case, keychain, purse, etc." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your vision - colors, patterns, size, special features..."
                  className="min-h-32"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="colors">Preferred Colors</Label>
                  <Input id="colors" placeholder="Pink, blue, mint green..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Needed By (Optional)</Label>
                  <Input id="deadline" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Input id="budget" placeholder="$20-50, flexible, etc." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="inspiration">Inspiration/Reference</Label>
                <Textarea 
                  id="inspiration" 
                  placeholder="Share any links, photos, or additional inspiration for your custom piece..."
                  className="min-h-20"
                />
              </div>

              <Button className="w-full" size="lg">
                Submit Custom Order Request
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Custom Order Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From initial consultation to final delivery, we ensure your custom piece exceeds expectations.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "We discuss your vision and provide a detailed quote" },
              { step: "2", title: "Design", description: "Create sketches and select materials for approval" },
              { step: "3", title: "Crafting", description: "Handcraft your piece with regular progress updates" },
              { step: "4", title: "Delivery", description: "Quality check and careful packaging for shipment" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomOrders;