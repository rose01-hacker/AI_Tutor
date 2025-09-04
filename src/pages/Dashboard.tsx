import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AITutor from '@/components/AITutor';
import ProgressChart from '@/components/ProgressChart';
import PeerBattleDemo from '@/components/PeerBattleDemo';
import MLRecommendations from '@/components/MLRecommendations';
import Navbar from '@/components/Navbar';
import { 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Users, 
  Target,
  Sparkles,
  Award,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const quickStats = [
    { label: 'Tests Completed', value: '23', icon: Award, color: 'text-primary' },
    { label: 'Current Streak', value: '7 days', icon: Zap, color: 'text-accent' },
    { label: 'Avg Score', value: '78%', icon: TrendingUp, color: 'text-secondary' },
    { label: 'Rank', value: '#142', icon: Target, color: 'text-primary' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-cosmic flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white animate-cosmic-spin" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">LightX Command Center 🚀</h1>
              <p className="text-muted-foreground">Welcome back, space explorer! Ready to conquer the universe?</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Button 
            size="lg" 
            className="h-20 bg-gradient-cosmic hover:opacity-90 shadow-cosmic"
            asChild
          >
            <Link to="/practice" className="flex flex-col items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span>Practice Questions</span>
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="h-20 border-accent text-accent hover:bg-accent/10"
            asChild
          >
            <Link to="/mock-test" className="flex flex-col items-center gap-2">
              <Clock className="h-6 w-6" />
              <span>Mock Test</span>
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="h-20 border-secondary text-secondary hover:bg-secondary/10"
          >
            <div className="flex flex-col items-center gap-2">
              <Users className="h-6 w-6" />
              <span>Find Peers</span>
            </div>
          </Button>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <ProgressChart />
            <PeerBattleDemo />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <MLRecommendations />
            
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Recent LightX Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Completed Technical Practice</div>
                      <div className="text-xs text-muted-foreground">Score: 88% • 2 hours ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Won Peer Battle vs CosmicCoder_99</div>
                      <div className="text-xs text-muted-foreground">Victory margin: 12% • 5 hours ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Unlocked Achievement: "Stellar Streak"</div>
                      <div className="text-xs text-muted-foreground">7-day learning streak! • 1 day ago</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating AI Tutor */}
      <AITutor currentPage="dashboard" />
    </div>
  );
};

export default Dashboard;