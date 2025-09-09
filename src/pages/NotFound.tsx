import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="text-center max-w-md px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-4">
            404
          </div>
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-4 h-4 bg-yarn-pink rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-yarn-lavender rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-4 h-4 bg-yarn-mint rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Oops! This page got tangled up</h1>
        <p className="text-muted-foreground mb-8">
          Looks like this page dropped a few stitches along the way. 
          Let's get you back to our beautiful yarn collection!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="group shadow-warm">
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </a>
          </Button>
          <Button variant="outline" size="lg" className="group">
            <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            View Favorites
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
