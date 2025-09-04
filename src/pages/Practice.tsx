import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AITutor from '@/components/AITutor';
import Navbar from '@/components/Navbar';
import { sampleMCQs, MCQ } from '@/data/sampleData';
import { 
  BookOpen, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Lightbulb, 
  Award,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const Practice: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const currentQuestion = sampleMCQs[currentQuestionIndex];
  const isAnswered = answeredQuestions.includes(currentQuestionIndex);

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < sampleMCQs.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(answeredQuestions.includes(currentQuestionIndex - 1) ? 
        sampleMCQs[currentQuestionIndex - 1].correctAnswer : null);
      setShowExplanation(answeredQuestions.includes(currentQuestionIndex - 1));
    }
  };

  const resetPractice = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-secondary text-secondary-foreground';
      case 'medium': return 'bg-accent text-accent-foreground';
      case 'hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const allQuestionsAnswered = answeredQuestions.length === sampleMCQs.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Practice Arena 🎯</h1>
                <p className="text-muted-foreground">Sharpen your LightX knowledge!</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{score}</div>
                <div className="text-xs text-muted-foreground">Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{answeredQuestions.length}</div>
                <div className="text-xs text-muted-foreground">Answered</div>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-cosmic h-2 rounded-full transition-all duration-300"
              style={{ width: `${(answeredQuestions.length / sampleMCQs.length) * 100}%` }}
            />
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            Question {currentQuestionIndex + 1} of {sampleMCQs.length}
          </div>
        </div>

        {allQuestionsAnswered ? (
          // Final Score Card
          <Card className="max-w-2xl mx-auto border-primary/20 shadow-cosmic">
            <CardHeader className="text-center">
              <Award className="h-16 w-16 text-accent mx-auto mb-4 animate-bounce" />
              <CardTitle className="text-2xl">Practice Complete! 🎉</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-primary/10">
                  <div className="text-3xl font-bold text-primary">{score}</div>
                  <div className="text-sm text-muted-foreground">Correct</div>
                </div>
                <div className="p-4 rounded-lg bg-destructive/10">
                  <div className="text-3xl font-bold text-destructive">{sampleMCQs.length - score}</div>
                  <div className="text-sm text-muted-foreground">Incorrect</div>
                </div>
                <div className="p-4 rounded-lg bg-accent/10">
                  <div className="text-3xl font-bold text-accent">{Math.round((score / sampleMCQs.length) * 100)}%</div>
                  <div className="text-sm text-muted-foreground">Score</div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground">
                {score === sampleMCQs.length 
                  ? "Perfect! You're truly stellar! 🌟" 
                  : score >= sampleMCQs.length * 0.8 
                    ? "Excellent work, cosmic explorer! 🚀"
                    : score >= sampleMCQs.length * 0.6
                      ? "Great progress! Keep reaching for the stars! ⭐"
                      : "Every cosmic journey starts with a single step! 🛸"
                }
              </p>
              
              <Button 
                onClick={resetPractice}
                className="bg-gradient-cosmic hover:opacity-90 shadow-cosmic"
                size="lg"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Practice Again
              </Button>
            </CardContent>
          </Card>
        ) : (
          // Question Card
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
                      {currentQuestion.difficulty}
                    </Badge>
                    <Badge variant="outline">{currentQuestion.category}</Badge>
                    {currentQuestion.company && (
                      <Badge variant="secondary">{currentQuestion.company}</Badge>
                    )}
                  </div>
                  
                  {isAnswered && (
                    <div className="flex items-center gap-2">
                      {selectedAnswer === currentQuestion.correctAnswer ? (
                        <CheckCircle className="h-6 w-6 text-primary animate-pulse" />
                      ) : (
                        <XCircle className="h-6 w-6 text-destructive animate-pulse" />
                      )}
                    </div>
                  )}
                </div>
                
                <CardTitle className="text-xl leading-relaxed">
                  {currentQuestion.question}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Answer Options */}
                <div className="grid gap-3">
                  {currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`p-4 h-auto text-left justify-start border-2 transition-all duration-300 ${
                        selectedAnswer === index
                          ? index === currentQuestion.correctAnswer
                            ? 'border-primary bg-primary/10 text-primary shadow-cosmic'
                            : 'border-destructive bg-destructive/10 text-destructive'
                          : isAnswered && index === currentQuestion.correctAnswer
                            ? 'border-primary bg-primary/10 text-primary shadow-cosmic'
                            : 'hover:border-primary/50'
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={isAnswered}
                    >
                      <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </Button>
                  ))}
                </div>

                {/* Explanation */}
                {showExplanation && (
                  <Card className="border-accent/20 bg-accent/5 animate-in slide-in-from-top-2">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-accent mt-0.5 animate-pulse" />
                        <div>
                          <h4 className="font-semibold text-accent mb-2">Cosmic Explanation:</h4>
                          <p className="text-foreground leading-relaxed">{currentQuestion.explanation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Navigation */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={previousQuestion}
                    disabled={currentQuestionIndex === 0}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  
                  <Button
                    onClick={nextQuestion}
                    disabled={currentQuestionIndex === sampleMCQs.length - 1}
                    className={isAnswered ? 'bg-gradient-cosmic hover:opacity-90' : ''}
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Floating AI Tutor */}
      <AITutor 
        currentPage="practice" 
        score={allQuestionsAnswered ? Math.round((score / sampleMCQs.length) * 100) : undefined}
        onQuestionExplain={(explanation) => alert(explanation)}
      />
    </div>
  );
};

export default Practice;