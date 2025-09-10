import React from "react";
import { useCart } from "@/context/CartContext";

const CartDisplay = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) return <div>Your cart is empty.</div>;

  return (
    <div className="p-4 border rounded mt-4 bg-white shadow">
      <h2 className="font-bold mb-2">Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex items-center justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <button className="text-red-500 ml-2" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="mt-2 px-2 py-1 bg-gray-200 rounded" onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartDisplay;
