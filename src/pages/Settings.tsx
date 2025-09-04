import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import AITutor from '@/components/AITutor';
import Navbar from '@/components/Navbar';
import { 
  Settings as SettingsIcon, 
  User, 
  Target, 
  Bell, 
  Palette,
  Save,
  Sparkles
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Settings: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: 'LightX Explorer',
    email: 'LightX.explorer@universe.com',
    bio: 'Passionate about exploring the vast universe of knowledge and mastering the art of interviews!',
    targetCompany: 'Google',
    targetRole: 'Software Engineer',
    experience: 'Mid-level (3-5 years)',
    preferredTopics: ['Technical', 'System Design'],
    notifications: {
      dailyReminders: true,
      weeklyProgress: true,
      peerBattles: false,
      achievements: true
    },
    theme: 'LightX',
    difficulty: 'medium'
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    toast({
      title: "Settings Saved! 🌟",
      description: "Your cosmic preferences have been updated successfully!",
    });
  };

  const companies = [
    'Google', 'Microsoft', 'Amazon', 'Meta (Facebook)', 'Apple', 
    'Netflix', 'Tesla', 'Uber', 'Airbnb', 'Stripe', 'Other'
  ];

  const roles = [
    'Software Engineer', 'Senior Software Engineer', 'Staff Engineer',
    'Engineering Manager', 'Product Manager', 'Data Scientist',
    'DevOps Engineer', 'Frontend Developer', 'Backend Developer',
    'Full Stack Developer', 'Mobile Developer', 'Security Engineer'
  ];

  const experienceLevels = [
    'Entry-level (0-2 years)', 'Mid-level (3-5 years)', 
    'Senior-level (6-10 years)', 'Staff-level (10+ years)'
  ];

  const topics = [
    'Technical', 'System Design', 'Behavioral', 'Aptitude', 
    'Reasoning', 'Verbal', 'Data Structures', 'Algorithms'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-cosmic flex items-center justify-center">
              <SettingsIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">LightX Settings ⚙️</h1>
              <p className="text-muted-foreground">Customize your interstellar learning experience</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Profile Settings */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your cosmic name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="cosmic.explorer@universe.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  placeholder="Tell us about your cosmic journey..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select 
                  value={formData.experience} 
                  onValueChange={(value) => handleInputChange('experience', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Career Goals */}
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                Career Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="targetCompany">Target Company</Label>
                <Select 
                  value={formData.targetCompany} 
                  onValueChange={(value) => handleInputChange('targetCompany', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select target company" />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map((company) => (
                      <SelectItem key={company} value={company}>{company}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetRole">Target Role</Label>
                <Select 
                  value={formData.targetRole} 
                  onValueChange={(value) => handleInputChange('targetRole', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select target role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>{role}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Preferred Practice Topics</Label>
                <div className="grid grid-cols-2 gap-3">
                  {topics.map((topic) => (
                    <div key={topic} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={topic}
                        checked={formData.preferredTopics.includes(topic)}
                        onChange={(e) => {
                          const newTopics = e.target.checked
                            ? [...formData.preferredTopics, topic]
                            : formData.preferredTopics.filter(t => t !== topic);
                          handleInputChange('preferredTopics', newTopics);
                        }}
                        className="rounded border-primary"
                      />
                      <Label htmlFor={topic} className="text-sm font-medium">
                        {topic}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="difficulty">Preferred Difficulty</Label>
                <Select 
                  value={formData.difficulty} 
                  onValueChange={(value) => handleInputChange('difficulty', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy - Building Foundation</SelectItem>
                    <SelectItem value="medium">Medium - Steady Progress</SelectItem>
                    <SelectItem value="hard">Hard - Challenge Mode</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-secondary" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Daily Practice Reminders</Label>
                    <p className="text-xs text-muted-foreground">Get notified to maintain your cosmic streak</p>
                  </div>
                  <Switch
                    checked={formData.notifications.dailyReminders}
                    onCheckedChange={(checked) => handleNotificationChange('dailyReminders', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Weekly Progress Reports</Label>
                    <p className="text-xs text-muted-foreground">Summary of your cosmic journey progress</p>
                  </div>
                  <Switch
                    checked={formData.notifications.weeklyProgress}
                    onCheckedChange={(checked) => handleNotificationChange('weeklyProgress', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Peer Battle Invitations</Label>
                    <p className="text-xs text-muted-foreground">Challenges from fellow cosmic warriors</p>
                  </div>
                  <Switch
                    checked={formData.notifications.peerBattles}
                    onCheckedChange={(checked) => handleNotificationChange('peerBattles', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Achievement Unlocks</Label>
                    <p className="text-xs text-muted-foreground">Celebrate your stellar milestones</p>
                  </div>
                  <Switch
                    checked={formData.notifications.achievements}
                    onCheckedChange={(checked) => handleNotificationChange('achievements', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select 
                  value={formData.theme} 
                  onValueChange={(value) => handleInputChange('theme', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LightX">🌌 LightX (Current)</SelectItem>
                    <SelectItem value="stellar">⭐ Stellar</SelectItem>
                    <SelectItem value="nebula">🌟 Nebula</SelectItem>
                    <SelectItem value="galaxy">🌠 Galaxy</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-4 rounded-lg bg-gradient-space border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-5 w-5 text-primary animate-cosmic-spin" />
                  <span className="font-semibold">Cosmic Theme Preview</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Experience the beauty of deep space with cosmic purples, stellar golds, and nebula effects.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <Button 
            onClick={handleSave}
            size="lg"
            className="bg-gradient-cosmic hover:opacity-90 shadow-cosmic px-8"
          >
            <Save className="mr-2 h-5 w-5" />
            Save Cosmic Settings
          </Button>
        </div>
      </div>

      <AITutor currentPage="settings" />
    </div>
  );
};

export default Settings;