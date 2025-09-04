import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, ArrowRight, Lightbulb, Target } from 'lucide-react';
import { recommendations } from '@/data/sampleData';

const MLRecommendations: React.FC = () => {
  const [selectedRec, setSelectedRec] = useState<number | null>(null);

  const handleRecommendationClick = (id: number) => {
    setSelectedRec(selectedRec === id ? null : id);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-accent text-accent-foreground';
      case 'low': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          ML Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {recommendations.map((rec) => (
            <div 
              key={rec.id}
              className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                selectedRec === rec.id 
                  ? 'border-primary bg-primary/5 shadow-cosmic' 
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => handleRecommendationClick(rec.id)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{rec.icon}</span>
                  <h3 className="font-semibold text-sm">{rec.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={`text-xs ${getPriorityColor(rec.priority)}`}>
                    {rec.priority}
                  </Badge>
                  <ArrowRight className={`h-4 w-4 transition-transform ${selectedRec === rec.id ? 'rotate-90' : ''}`} />
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mb-3">
                {rec.description}
              </p>

              {selectedRec === rec.id && (
                <div className="space-y-3 border-t pt-3 animate-in slide-in-from-top-2">
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <Lightbulb className="h-3 w-3" />
                    <span>AI Insight:</span>
                  </div>
                  
                  {rec.type === 'company' ? (
                    <div className="space-y-2">
                      <p className="text-xs text-foreground">
                        🎯 <strong>Focus Areas:</strong> Based on your performance patterns, prioritize data structures and system design.
                      </p>
                      <p className="text-xs text-foreground">
                        📈 <strong>Success Probability:</strong> 85% based on your cosmic learning trajectory!
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-xs h-7">
                          <Target className="h-3 w-3 mr-1" />
                          Start Prep
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-xs text-foreground">
                        📊 <strong>Difficulty Level:</strong> Your current skill level suggests medium complexity topics.
                      </p>
                      <p className="text-xs text-foreground">
                        ⏱️ <strong>Estimated Time:</strong> 2-3 weeks of focused practice should boost your cosmic knowledge!
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-xs h-7">
                          <Target className="h-3 w-3 mr-1" />
                          Practice Now
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center pt-4 border-t">
          <Button variant="outline" size="sm" className="w-full">
            <Brain className="h-4 w-4 mr-2" />
            Generate New Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MLRecommendations;