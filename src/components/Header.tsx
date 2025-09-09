import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Phone Cases", href: "/phone-cases" },
    { label: "Keychains", href: "/keychains" },
    { label: "Mini Purses", href: "/mini-purses" },
    { label: "Accessories", href: "/accessories" },
    { label: "Custom Orders", href: "/custom" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary/50 border-b border-border/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Free Shipping on Orders $50+
              </span>
              <span>Handmade with Love</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span>Follow Us</span>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-yarn-pink rounded-full"></div>
                <div className="w-6 h-6 bg-yarn-lavender rounded-full"></div>
                <div className="w-6 h-6 bg-yarn-mint rounded-full"></div>
              </div>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-background border-b border-border shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/6504d8c2-5715-4d1d-ba60-6c8ea0be0640.png" 
                alt="Artisanal Knits" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <Input
                    placeholder="Search for yarn crafts..."
                    className="w-64 pr-10 bg-background"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="relative">
                  <Heart className="w-5 h-5" />
                  <Badge className="absolute -top-2 -right-2 bg-yarn-coral text-white text-xs px-1.5 py-0.5 rounded-full">
                    2
                  </Badge>
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                    3
                  </Badge>
                </Button>
              </div>

              {/* Mobile menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="sm">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col gap-6 mt-8">
                    <div className="relative">
                      <Input placeholder="Search..." className="pr-10" />
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                    </div>
                    <nav className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/50"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;