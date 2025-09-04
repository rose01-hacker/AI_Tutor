import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-space">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center animate-pulse-glow">
            <Sparkles className="h-8 w-8 text-white animate-cosmic-spin" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Lost in Space? 🛸</h2>
        <p className="text-xl text-muted-foreground mb-8">
          This cosmic page seems to have drifted into a black hole!
        </p>
        
        <Button 
          size="lg"
          className="bg-gradient-cosmic hover:opacity-90 shadow-cosmic"
          asChild
        >
          <Link to="/">
            Return to Base 🚀
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
