import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  BookOpen, 
  Clock, 
  Settings, 
  User,
  Sparkles
} from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-cosmic flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">AI Interview Prep</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant={isActive('/dashboard') ? 'default' : 'ghost'}
              size="sm"
              asChild
            >
              <Link to="/dashboard" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            
            <Button
              variant={isActive('/practice') ? 'default' : 'ghost'}
              size="sm"
              asChild
            >
              <Link to="/practice" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Practice
              </Link>
            </Button>
            
            <Button
              variant={isActive('/mock-test') ? 'default' : 'ghost'}
              size="sm"
              asChild
            >
              <Link to="/mock-test" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Mock Test
              </Link>
            </Button>
            
            <Button
              variant={isActive('/settings') ? 'default' : 'ghost'}
              size="sm"
              asChild
            >
              <Link to="/settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </Button>
          </div>

          {/* User Profile */}
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border">
        <div className="flex justify-around py-2">
          <Button
            variant={isActive('/dashboard') ? 'default' : 'ghost'}
            size="sm"
            asChild
            className="flex-1 mx-1"
          >
            <Link to="/dashboard" className="flex flex-col items-center gap-1">
              <Home className="h-4 w-4" />
              <span className="text-xs">Dashboard</span>
            </Link>
          </Button>
          
          <Button
            variant={isActive('/practice') ? 'default' : 'ghost'}
            size="sm"
            asChild
            className="flex-1 mx-1"
          >
            <Link to="/practice" className="flex flex-col items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs">Practice</span>
            </Link>
          </Button>
          
          <Button
            variant={isActive('/mock-test') ? 'default' : 'ghost'}
            size="sm"
            asChild
            className="flex-1 mx-1"
          >
            <Link to="/mock-test" className="flex flex-col items-center gap-1">
              <Clock className="h-4 w-4" />
              <span className="text-xs">Mock Test</span>
            </Link>
          </Button>
          
          <Button
            variant={isActive('/settings') ? 'default' : 'ghost'}
            size="sm"
            asChild
            className="flex-1 mx-1"
          >
            <Link to="/settings" className="flex flex-col items-center gap-1">
              <Settings className="h-4 w-4" />
              <span className="text-xs">Settings</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;