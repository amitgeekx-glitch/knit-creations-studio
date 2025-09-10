import React from "react";
import { useFavorites } from "@/context/FavoritesContext";

const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0)
    return <div className="p-8 text-center text-lg">No favorites yet.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Favorites</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {favorites.map((item) => (
          <li key={item.id} className="border rounded-lg p-4 flex flex-col items-center relative">
            <button
              className="absolute top-2 right-2 z-10 p-1 rounded-full bg-yarn-coral text-white"
              onClick={() => toggleFavorite(item)}
              aria-label="Remove from favorites"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </button>
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mb-2 border" />
            <div className="font-semibold text-lg mb-1">{item.name}</div>
            <div className="text-primary font-bold">₹{item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
