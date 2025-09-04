import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CosmiAITutor from '@/components/AITutor';
import Navbar from '@/components/Navbar';
import { mockTestQuestions, MCQ } from '@/data/sampleData';
import { 
  Clock, 
  Play, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Award,
  AlertCircle,
  Timer
} from 'lucide-react';

const MockTest: React.FC = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(mockTestQuestions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [score, setScore] = useState(0);

  const currentQuestion = mockTestQuestions[currentQuestionIndex];
  const totalQuestions = mockTestQuestions.length;

  // Timer effect
  useEffect(() => {
    if (testStarted && !testCompleted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setTestCompleted(true);
            calculateScore();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [testStarted, testCompleted, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const startTest = () => {
    setTestStarted(true);
    setTestCompleted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(mockTestQuestions.length).fill(null));
    setTimeLeft(600);
    setScore(0);
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === mockTestQuestions[index].correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    return correctAnswers;
  };

  const submitTest = () => {
    calculateScore();
    setTestCompleted(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-secondary text-secondary-foreground';
      case 'medium': return 'bg-accent text-accent-foreground';
      case 'hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTimeColor = () => {
    if (timeLeft > 300) return 'text-primary'; // > 5 minutes
    if (timeLeft > 120) return 'text-accent'; // > 2 minutes
    return 'text-destructive'; // < 2 minutes
  };

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto border-primary/20 shadow-cosmic">
            <CardHeader className="text-center">
              <Clock className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-glow" />
              <CardTitle className="text-3xl mb-2">Mock Test Challenge 🚀</CardTitle>
              <p className="text-muted-foreground">Test your cosmic knowledge under time pressure!</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Timer className="h-4 w-4 text-primary" />
                    Test Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Questions:</span>
                      <span className="font-semibold">{totalQuestions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time Limit:</span>
                      <span className="font-semibold">10 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Categories:</span>
                      <span className="font-semibold">Mixed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Companies:</span>
                      <span className="font-semibold">FAANG Focus</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-accent" />
                    Instructions
                  </h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Answer all questions within time limit</li>
                    <li>• You can navigate between questions</li>
                    <li>• No negative marking</li>
                    <li>• Submit before time runs out</li>
                    <li>• Review answers after completion</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center pt-4 border-t">
                <Button 
                  onClick={startTest}
                  size="lg"
                  className="bg-gradient-cosmic hover:opacity-90 shadow-cosmic"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Cosmic Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <CosmiAITutor currentPage="mock-test" />
      </div>
    );
  }

  if (testCompleted) {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-cosmic">
            <CardHeader className="text-center">
              <Award className="h-16 w-16 text-accent mx-auto mb-4 animate-bounce" />
              <CardTitle className="text-3xl mb-2">Test Complete! 🎉</CardTitle>
              <p className="text-muted-foreground">Your cosmic performance analysis</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Score Summary */}
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-lg bg-primary/10">
                  <div className="text-3xl font-bold text-primary">{score}</div>
                  <div className="text-sm text-muted-foreground">Correct</div>
                </div>
                <div className="p-4 rounded-lg bg-destructive/10">
                  <div className="text-3xl font-bold text-destructive">{totalQuestions - score}</div>
                  <div className="text-sm text-muted-foreground">Incorrect</div>
                </div>
                <div className="p-4 rounded-lg bg-accent/10">
                  <div className="text-3xl font-bold text-accent">{percentage}%</div>
                  <div className="text-sm text-muted-foreground">Score</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/10">
                  <div className="text-3xl font-bold text-secondary">{formatTime(600 - timeLeft)}</div>
                  <div className="text-sm text-muted-foreground">Time Taken</div>
                </div>
              </div>

              {/* Questions Review */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Question Review</h3>
                <div className="space-y-3">
                  {mockTestQuestions.map((question, index) => {
                    const userAnswer = selectedAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    
                    return (
                      <Card key={index} className={`border-2 ${isCorrect ? 'border-primary/20' : 'border-destructive/20'}`}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">Q{index + 1}.</span>
                              <Badge className={getDifficultyColor(question.difficulty)}>
                                {question.difficulty}
                              </Badge>
                              <Badge variant="outline">{question.category}</Badge>
                              {question.company && (
                                <Badge variant="secondary">{question.company}</Badge>
                              )}
                            </div>
                            {isCorrect ? (
                              <CheckCircle className="h-5 w-5 text-primary" />
                            ) : (
                              <XCircle className="h-5 w-5 text-destructive" />
                            )}
                          </div>
                          
                          <p className="text-sm mb-3 font-medium">{question.question}</p>
                          
                          <div className="grid gap-2">
                            {question.options.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className={`text-xs p-2 rounded border ${
                                  optionIndex === question.correctAnswer
                                    ? 'bg-primary/10 border-primary text-primary'
                                    : userAnswer === optionIndex
                                      ? 'bg-destructive/10 border-destructive text-destructive'
                                      : 'bg-muted'
                                }`}
                              >
                                {String.fromCharCode(65 + optionIndex)}. {option}
                                {optionIndex === question.correctAnswer && ' ✓'}
                                {userAnswer === optionIndex && optionIndex !== question.correctAnswer && ' ✗'}
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-3 p-3 rounded bg-accent/5 border-l-4 border-accent">
                            <p className="text-xs text-foreground">{question.explanation}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
              
              <div className="text-center pt-4 border-t">
                <Button 
                  onClick={() => {
                    setTestStarted(false);
                    setTestCompleted(false);
                  }}
                  className="bg-gradient-cosmic hover:opacity-90 shadow-cosmic"
                  size="lg"
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Take Another Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <CosmiAITutor 
          currentPage="mock-test" 
          score={percentage}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-4">
        {/* Test Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Mock Test in Progress</h1>
            <p className="text-muted-foreground">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`text-2xl font-bold ${getTimeColor()}`}>
              {formatTime(timeLeft)}
            </div>
            <Button 
              onClick={submitTest}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Submit Test
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 mb-6">
          <div 
            className="bg-gradient-cosmic h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Question Card */}
        <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
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
              
              <div className="text-sm text-muted-foreground">
                {selectedAnswers[currentQuestionIndex] !== null ? 'Answered' : 'Not Answered'}
              </div>
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
                    selectedAnswers[currentQuestionIndex] === index
                      ? 'border-primary bg-primary/10 text-primary shadow-cosmic'
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => selectAnswer(index)}
                >
                  <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4 border-t">
              <Button
                variant="outline"
                onClick={previousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              
              <div className="flex gap-2">
                {mockTestQuestions.map((_, index) => (
                  <Button
                    key={index}
                    variant={index === currentQuestionIndex ? "default" : "outline"}
                    size="sm"
                    className={`w-8 h-8 p-0 ${
                      selectedAnswers[index] !== null && index !== currentQuestionIndex
                        ? 'bg-primary/20 border-primary' 
                        : ''
                    }`}
                    onClick={() => setCurrentQuestionIndex(index)}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
              
              <Button
                onClick={nextQuestion}
                disabled={currentQuestionIndex === totalQuestions - 1}
                className="bg-gradient-cosmic hover:opacity-90"
              >
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <CosmiAITutor 
        currentPage="mock-test"
        onQuestionExplain={(explanation) => alert(explanation)}
      />
    </div>
  );
};

export default MockTest;