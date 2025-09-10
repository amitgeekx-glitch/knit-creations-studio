import React from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

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
    // TODO: Integrate PhonePe payment gateway here
  };

  if (cart.length === 0)
    return <div className="p-8 text-center text-lg">Your cart is empty.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      <ul className="divide-y divide-gray-200 mb-6">
        {cart.map((item) => (
          <li key={item.id} className="flex items-center py-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4 border" />
            <div className="flex-1">
              <div className="font-semibold text-lg">{item.name}</div>
              <div className="text-gray-500">Qty: {item.quantity}</div>
              <div className="text-primary font-bold">₹{item.price * item.quantity}</div>
            </div>
            <button
              className="ml-4 text-red-500 hover:text-red-700 font-semibold px-2 py-1 rounded"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-bold">Total:</span>
        <span className="text-2xl text-primary font-bold">₹{total}</span>
      </div>
      <div className="flex gap-4">
        <button
          className="flex-1 bg-primary text-white py-3 rounded-lg text-lg font-semibold shadow hover:bg-primary/90 transition"
          onClick={handleCheckout}
        >
          Checkout with PhonePe
        </button>
        <button
          className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg text-lg font-semibold shadow hover:bg-gray-300 transition"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
