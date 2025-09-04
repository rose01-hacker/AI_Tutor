// Sample data for AI Interview Prep platform

export interface MCQ {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  company?: string;
}

export interface ProgressData {
  date: string;
  score: number;
  category: string;
}

export interface Recommendation {
  id: number;
  type: "company" | "topic";
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  icon: string;
}

export const sampleMCQs: MCQ[] = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    explanation:
      "Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity.",
    category: "Technical",
    difficulty: "medium",
    company: "Google",
  },
  {
    id: 2,
    question:
      "Which of the following is NOT a principle of Object-Oriented Programming?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
    correctAnswer: 3,
    explanation:
      "Compilation is a process of converting code to machine language, not an OOP principle.",
    category: "Technical",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "A train travels 120 km in 2 hours. What is its average speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    correctAnswer: 1,
    explanation: "Speed = Distance / Time = 120 km / 2 hours = 60 km/h",
    category: "Aptitude",
    difficulty: "easy",
  },
  {
    id: 4,
    question:
      "If all roses are flowers and some flowers are red, which statement is true?",
    options: [
      "All roses are red",
      "Some roses are red",
      "No roses are red",
      "Cannot be determined",
    ],
    correctAnswer: 3,
    explanation:
      "We cannot determine if roses are red from the given statements alone.",
    category: "Reasoning",
    difficulty: "medium",
  },
  {
    id: 5,
    question: "Choose the synonym for 'Ephemeral':",
    options: ["Permanent", "Temporary", "Beautiful", "Strong"],
    correctAnswer: 1,
    explanation:
      "Ephemeral means lasting for a very short time, so temporary is the correct synonym.",
    category: "Verbal",
    difficulty: "hard",
  },
];

export const mockTestQuestions: MCQ[] = [
  {
    id: 6,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: 1,
    explanation:
      "CSS stands for Cascading Style Sheets, used for styling web pages.",
    category: "Technical",
    difficulty: "easy",
    company: "Meta",
  },
  {
    id: 7,
    question: "Which data structure follows LIFO principle?",
    options: ["Queue", "Stack", "Array", "Tree"],
    correctAnswer: 1,
    explanation: "Stack follows Last In First Out (LIFO) principle.",
    category: "Technical",
    difficulty: "medium",
    company: "Amazon",
  },
  {
    id: 8,
    question: "If 15% of x is 45, what is x?",
    options: ["200", "250", "300", "350"],
    correctAnswer: 2,
    explanation: "15% of x = 45, so x = 45 / 0.15 = 300",
    category: "Aptitude",
    difficulty: "medium",
    company: "Microsoft",
  },
];

export const progressData: ProgressData[] = [
  { date: "2024-01-01", score: 65, category: "Technical" },
  { date: "2024-01-02", score: 72, category: "Aptitude" },
  { date: "2024-01-03", score: 68, category: "Reasoning" },
  { date: "2024-01-04", score: 78, category: "Technical" },
  { date: "2024-01-05", score: 82, category: "Verbal" },
  { date: "2024-01-06", score: 85, category: "Technical" },
  { date: "2024-01-07", score: 88, category: "Aptitude" },
];

export const recommendations: Recommendation[] = [
  {
    id: 1,
    type: "company",
    title: "Google Interview Prep",
    description:
      "Focus on system design and algorithms. Your recent scores show strong potential!",
    priority: "high",
    icon: "🚀",
  },
  {
    id: 2,
    type: "topic",
    title: "Data Structures Deep Dive",
    description:
      "Strengthen your knowledge in trees and graphs for better technical performance.",
    priority: "high",
    icon: "🌳",
  },
  {
    id: 3,
    type: "company",
    title: "Microsoft Behavioral Prep",
    description:
      "Practice STAR method responses for leadership and teamwork questions.",
    priority: "medium",
    icon: "💼",
  },
  {
    id: 4,
    type: "topic",
    title: "Verbal Reasoning Boost",
    description: "Improve your vocabulary and reading comprehension skills.",
    priority: "medium",
    icon: "📚",
  },
];

export const Messages = [
  "🌟 Welcome, cosmic learner! Ready to explore the universe of knowledge?",
  "✨ Every question is a star in your constellation of wisdom!",
  "🚀 Blast off into learning! The cosmos of knowledge awaits you!",
  "🌌 Like distant galaxies, complex problems become clear with the right perspective!",
  "⭐ You're shining brighter with each correct answer! Keep up the stellar work!",
  "🛸 Navigate through these questions like a skilled space explorer!",
  "🌠 Shooting for the stars! Your progress is out of this world!",
  "🪐 Each topic is a new planet to explore. Let's discover them together!",
  "☄️ Meteoric improvement! Your dedication is truly cosmic!",
  "🌟 Remember: Even the brightest stars started as cosmic dust. Keep learning!",
];
