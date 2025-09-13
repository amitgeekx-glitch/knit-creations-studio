import React from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!user) {
      navigate("/auth");
      return;
    }
    // Integrate Paytm payment gateway
    initiatePaytmPayment();
  };

  const initiatePaytmPayment = () => {
    // Paytm integration logic will be implemented here
    console.log("Initiating Paytm payment for total:", total);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            <p className="text-muted-foreground text-lg">Your cart is empty.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
          <div className="bg-card rounded-lg shadow-soft p-6 mb-6">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                    <p className="text-muted-foreground">Quantity: {item.quantity}</p>
                    <p className="text-primary font-bold text-lg">₹{item.price * item.quantity}</p>
                  </div>
                  <button
                    className="text-destructive hover:text-destructive/80 font-semibold px-4 py-2 rounded-lg border border-destructive/20 hover:bg-destructive/10 transition-colors"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-soft p-6 mb-6">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total:</span>
              <span className="text-2xl text-primary">₹{total}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              className="flex-1 bg-primary text-primary-foreground py-4 rounded-lg text-lg font-semibold shadow-warm hover:bg-primary/90 transition-all hover:shadow-lg"
              onClick={handleCheckout}
            >
              Checkout with Paytm
            </button>
            <button
              className="flex-1 bg-muted text-muted-foreground py-4 rounded-lg text-lg font-semibold hover:bg-muted/80 transition-colors"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
