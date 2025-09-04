import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login - navigate to dashboard
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-space flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-cosmic border-primary/20">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-cosmic flex items-center justify-center animate-pulse-glow">
              <Sparkles className="h-6 w-6 text-white animate-cosmic-spin" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome Back, LightX Explorer! 🚀</CardTitle>
          <p className="text-muted-foreground">Login to continue your stellar journey</p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="cosmic.explorer@universe.com"
                  className="pl-10 border-primary/20 focus:border-primary"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your stellar password"
                  className="pl-10 pr-10 border-primary/20 focus:border-primary"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-cosmic hover:opacity-90 shadow-cosmic"
              size="lg"
            >
              Launch into Dashboard 🚀
            </Button>
          </form>
          
          <div className="mt-6 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Don't have an account? 
              <Button variant="link" className="p-1 h-auto text-primary hover:text-primary/80">
                Sign up for LightX adventures
              </Button>
            </p>
            
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Demo Credentials:</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <div>📧 Any email works for demo</div>
                <div>🔒 Any password works for demo</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;