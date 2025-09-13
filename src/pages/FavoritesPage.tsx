import React from "react";
import { useFavorites } from "@/context/FavoritesContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Your Favorites</h1>
            <p className="text-muted-foreground text-lg">No favorites yet.</p>
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Your Favorites</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-lg p-6 flex flex-col items-center relative shadow-soft hover:shadow-warm transition-all">
                <button
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-yarn-coral text-white hover:bg-yarn-coral/80 transition-colors"
                  onClick={() => toggleFavorite(item)}
                  aria-label="Remove from favorites"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </button>
                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg mb-4 border border-border" />
                <h3 className="font-semibold text-lg mb-2 text-center text-foreground">{item.name}</h3>
                <p className="text-primary font-bold text-xl">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
