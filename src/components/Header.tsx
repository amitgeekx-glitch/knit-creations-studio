import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Heart, Menu, Search, ShoppingCart, User, LogIn, UserCircle, Package, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
                Free Shipping on Orders ₹1500+
              </span>
              <span>Handmade with Love</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span>Follow Us</span>
              <a href="https://www.instagram.com/artisnaltreasures__19/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  {/* Modern Instagram camera icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </span>
                <span className="sr-only">Instagram</span>
              </a>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <UserCircle className="w-4 h-4 mr-2" />
                      Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to="/account" className="cursor-pointer">
                        <User className="h-4 w-4 mr-2" />
                        My Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/orders" className="cursor-pointer">
                        <Package className="h-4 w-4 mr-2" />
                        My Orders
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="cursor-pointer">
                        <Shield className="h-4 w-4 mr-2" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => signOut()}
                      className="cursor-pointer text-destructive"
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button asChild variant="ghost" size="sm">
                  <Link to="/auth">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-background border-t border-b border-border shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/site_logo.png" 
                alt="Artisanal Knits" 
                className="logo h-14 w-auto mix-blend-multiply dark:mix-blend-normal dark:brightness-0 dark:invert"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
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
                <Link to="/cart">
                  <Button variant="ghost" size="sm" className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {cartCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                        {cartCount}
                      </Badge>
                    )}
                  </Button>
                </Link>
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
                        <Link
                          key={item.label}
                          to={item.href}
                          className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                      
                      {user ? (
                        <>
                          <Link to="/account" className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/50" onClick={() => setIsMenuOpen(false)}>
                            <User className="h-4 w-4 mr-2 inline" />
                            My Account
                          </Link>
                          <Link to="/orders" className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/50" onClick={() => setIsMenuOpen(false)}>
                            <Package className="h-4 w-4 mr-2 inline" />
                            My Orders
                          </Link>
                          <Link to="/admin" className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/50" onClick={() => setIsMenuOpen(false)}>
                            <Shield className="h-4 w-4 mr-2 inline" />
                            Admin Panel
                          </Link>
                          <Button
                            variant="ghost"
                            onClick={() => {
                              signOut();
                              setIsMenuOpen(false);
                            }}
                            className="justify-start p-0 text-destructive hover:text-destructive py-2"
                          >
                            <LogIn className="h-4 w-4 mr-2" />
                            Sign Out
                          </Button>
                        </>
                      ) : (
                        <Link to="/auth" className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/50" onClick={() => setIsMenuOpen(false)}>
                          <LogIn className="h-4 w-4 mr-2 inline" />
                          Sign In
                        </Link>
                      )}
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