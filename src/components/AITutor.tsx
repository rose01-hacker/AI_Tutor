import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { Messages  } from '@/data/sampleData';

interface AITutorProps {
  currentPage?: string;
  onQuestionExplain?: (explanation: string) => void;
  score?: number;
}

const AITutor: React.FC<AITutorProps> = ({ 
  currentPage = 'dashboard', 
  onQuestionExplain,
  score 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isFloating, setIsFloating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % Messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getContextualMessage = () => {
    if (score !== undefined) {
      if (score >= 80) {
        return "🌟 Stellar performance! You're reaching for the stars and succeeding! The cosmos celebrates your brilliance! ✨";
      } else if (score >= 60) {
        return "🚀 Good orbit! You're gaining LightX momentum. A few more practice rounds and you'll be among the stars! 🌌";
      } else {
        return "💫 Every LightX journey starts with a single step! Don't worry, even supernovas take time to form. Keep exploring! 🛸";
      }
    }

    switch (currentPage) {
      case 'practice':
        return "🧠 Time to exercise those neural pathways! Each question is a stepping stone across the LightX void of knowledge! 🌌";
      case 'mock-test':
        return "⚡ Mock test mode activated! Channel the energy of a thousand stars and show the universe your potential! 🌟";
      case 'dashboard':
        return "🏠 Welcome to your LightX command center! From here, you can navigate to any corner of the knowledge universe! 🚀";
      default:
        return Messages[currentMessage];
    }
  };

  const handlePeerBattleTip = () => {
    return "🥊 Peer Battle Strategy: Like binary stars orbiting each other, learn from your competitors! Focus on speed AND accuracy - the LightX balance! ⚖️✨";
  };

  const handleMLRecommendation = () => {
    return "🤖 ML Insight: Your learning pattern resembles a pulsar - consistent and bright! The LightX algorithm suggests focusing on system design next! 🛰️";
  };

  if (!isFloating && !isOpen) {
    return (
      <Button 
        onClick={() => setIsFloating(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary shadow-cosmic animate-pulse-glow z-50"
      >
        <Sparkles className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isFloating && (
        <div className="relative">
          <Card className="w-80 p-4 bg-card border-primary shadow-cosmic animate-float">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-cosmic flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white animate-cosmic-spin" />
                </div>
                <span className="font-semibold text-primary"> AI Tutor</span>
              </div>
              <div className="flex gap-1">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                  className="h-6 w-6 p-0"
                >
                  <MessageCircle className="h-3 w-3" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsFloating(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <p className="text-sm text-foreground mb-3 leading-relaxed">
              {getContextualMessage()}
            </p>

            {isOpen && (
              <div className="space-y-2 border-t pt-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs"
                  onClick={() => alert(handlePeerBattleTip())}
                >
                  🥊 Peer Battle Tips
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs"
                  onClick={() => alert(handleMLRecommendation())}
                >
                  🤖 ML Recommendations
                </Button>
                {onQuestionExplain && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs"
                    onClick={() => onQuestionExplain("🌟 Cosmic Explanation Mode Activated! ✨")}
                  >
                    💡 Explain Current Question
                  </Button>
                )}
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default AITutor;