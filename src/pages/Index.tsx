import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-space">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center animate-pulse-glow">
            <Sparkles className="h-8 w-8 text-white animate-cosmic-spin" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          AI Interview Prep
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          🚀 Master interviews with your cosmic AI tutor LightX! ✨
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-cosmic hover:opacity-90 shadow-cosmic"
            asChild
          >
            <Link to="/login">
              Start Your Journey
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary hover:bg-primary/10"
            asChild
          >
            <Link to="/dashboard">
              Explore Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
