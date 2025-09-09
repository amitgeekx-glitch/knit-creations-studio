import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent">
              YarnCrafts
            </div>
            <p className="text-muted-foreground">
              Handcrafted knitted treasures made with love and premium yarns. 
              Each piece is unique and tells its own beautiful story.
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-yarn-pink rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-yarn-lavender rounded-full"></div>
              <div className="w-8 h-8 bg-yarn-mint rounded-full"></div>
              <div className="w-8 h-8 bg-yarn-coral rounded-full"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Phone Cases",
                "Keychains", 
                "Mini Purses",
                "Flowers & Decorations",
                "Custom Orders",
                "Gift Cards"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Customer Care</h3>
            <ul className="space-y-2">
              {[
                "Shipping Info",
                "Returns & Exchanges", 
                "Size Guide",
                "Care Instructions",
                "FAQ",
                "Contact Us"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>hello@yarncrafts.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Crafted with love, shipped worldwide</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Get updates on new products and special offers!
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="flex-1"
                />
                <Button className="shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 YarnCrafts. Made with <Heart className="w-4 h-4 inline text-primary" /> and lots of yarn.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;