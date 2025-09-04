import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sword, Trophy, Zap, Users } from 'lucide-react';

const PeerBattleDemo: React.FC = () => {
  const [battleActive, setBattleActive] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [battleComplete, setBattleComplete] = useState(false);

  const startBattle = () => {
    setBattleActive(true);
    setBattleComplete(false);
    setUserScore(0);
    setOpponentScore(0);

    // Simulate battle progression
    let userProgress = 0;
    let opponentProgress = 0;
    
    const battleInterval = setInterval(() => {
      userProgress += Math.floor(Math.random() * 15) + 10;
      opponentProgress += Math.floor(Math.random() * 12) + 8;
      
      setUserScore(Math.min(userProgress, 100));
      setOpponentScore(Math.min(opponentProgress, 100));
      
      if (userProgress >= 100 || opponentProgress >= 100) {
        clearInterval(battleInterval);
        setBattleComplete(true);
        setBattleActive(false);
      }
    }, 800);
  };

  const getResultMessage = () => {
    if (userScore > opponentScore) {
      return "🏆 Victory! You've conquered the cosmic challenge!";
    } else if (userScore < opponentScore) {
      return "⭐ Great effort! Every star learns from its LightX journey!";
    } else {
      return "🤝 LightX tie! Two bright stars shining equally!";
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sword className="h-5 w-5 text-primary" />
          Peer Battle Arena
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!battleActive && !battleComplete && (
          <div className="text-center py-8">
            <Users className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-glow" />
            <h3 className="text-lg font-semibold mb-2">Ready for LightX Combat?</h3>
            <p className="text-muted-foreground mb-4">
              Challenge cosmic peers in real-time knowledge battles!
            </p>
            <Button onClick={startBattle} className="bg-gradient-LightX hover:opacity-90">
              <Zap className="h-4 w-4 mr-2" />
              Start Battle Demo
            </Button>
          </div>
        )}

        {battleActive && (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary animate-pulse">
                🚀 LightX Battle in Progress! 🚀
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">You</span>
                <span className="text-primary font-bold">{userScore}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-lightX h-3 rounded-full transition-all duration-300 shadow-LightX"
                  style={{ width: `${userScore}%` }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium">LightXRival_42</span>
                <span className="text-secondary font-bold">{opponentScore}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-secondary h-3 rounded-full transition-all duration-300"
                  style={{ width: `${opponentScore}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {battleComplete && (
          <div className="text-center py-6">
            <Trophy className="h-16 w-16 text-accent mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold mb-2">Battle Complete!</h3>
            <p className="text-muted-foreground mb-4">{getResultMessage()}</p>
            <div className="flex justify-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{userScore}%</div>
                <div className="text-xs text-muted-foreground">Your Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{opponentScore}%</div>
                <div className="text-xs text-muted-foreground">Opponent</div>
              </div>
            </div>
            <Button 
              onClick={() => setBattleComplete(false)} 
              variant="outline"
              className="mr-2"
            >
              New Battle
            </Button>
            <Button onClick={startBattle} className="bg-gradient-LightX hover:opacity-90">
              Battle Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PeerBattleDemo;