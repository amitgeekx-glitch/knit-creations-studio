import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PhoneCases from "./pages/PhoneCases";
import Keychains from "./pages/Keychains";
import MiniPurses from "./pages/MiniPurses";
import Accessories from "./pages/Accessories";
import CustomOrders from "./pages/CustomOrders";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";
import CartPage from "./pages/CartPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/phone-cases" element={<PhoneCases />} />
              <Route path="/keychains" element={<Keychains />} />
              <Route path="/mini-purses" element={<MiniPurses />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/custom" element={<CustomOrders />} />
              <Route path="/about" element={<About />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/account" element={<Account />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/cart" element={<CartPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
