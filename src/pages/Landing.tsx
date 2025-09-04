import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Sparkles, 
  Brain, 
  Target, 
  Trophy, 
  Users, 
  Zap,
  ArrowRight,
  Star
} from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-space opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center animate-pulse-glow">
                <Sparkles className="h-8 w-8 text-white animate-cosmic-spin" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              AI Interview Prep
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              🚀 Master interviews with your cosmic AI tutor LightX! 
              <br />
              Practice, battle peers, and explore the universe of knowledge ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-cosmic hover:opacity-90 text-lg px-8 py-6 shadow-cosmic"
                asChild
              >
                <Link to="/login">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Your LightX Journey
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary hover:bg-primary/10"
                asChild
              >
                <Link to="/dashboard">
                  <Star className="mr-2 h-5 w-5" />
                  Explore Demo
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">LightX Learners</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-accent">1M+</div>
                <div className="text-sm text-muted-foreground">Questions Solved</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">LightX Features</h2>
            <p className="text-xl text-muted-foreground">Everything you need to ace your interviews</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-cosmic">
              <CardContent className="p-6 text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-3">AI Tutor</h3>
                <p className="text-muted-foreground">
                  Your personal cosmic guide with stellar explanations and encouragement
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-stellar">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-accent mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-3">Smart Practice</h3>
                <p className="text-muted-foreground">
                  Adaptive questions that evolve with your learning journey
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/20 hover:border-secondary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-3">Peer Battles</h3>
                <p className="text-muted-foreground">
                  Challenge fellow cosmic learners in real-time knowledge duels
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Visualize your LightX journey with detailed analytics
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-accent mx-auto mb-4 animate-cosmic-spin" />
                <h3 className="text-xl font-semibold mb-3">ML Recommendations</h3>
                <p className="text-muted-foreground">
                  AI-powered suggestions tailored to your learning patterns
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/20 hover:border-secondary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-secondary mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-semibold mb-3">Mock Tests</h3>
                <p className="text-muted-foreground">
                  Company-specific practice tests with real-time feedback
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-space">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Launch Your Career? 🚀</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of cosmic learners who've mastered their interviews
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-cosmic hover:opacity-90 text-lg px-8 py-6 shadow-cosmic"
            asChild
          >
            <Link to="/login">
              Begin Your LightX Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;