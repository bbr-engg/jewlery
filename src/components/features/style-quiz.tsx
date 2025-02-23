import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import Image from 'next/image';

interface StyleQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (preferences: any) => void;
}

const quizQuestions = [
  {
    id: 'occasion',
    question: 'What occasions do you typically wear jewelry for?',
    options: [
      { id: 'casual', label: 'Casual/Daily', image: '/images/occasions/casual.jpg' },
      { id: 'work', label: 'Work/Professional', image: '/images/occasions/work.jpg' },
      { id: 'special', label: 'Special Events', image: '/images/occasions/special.jpg' },
      { id: 'party', label: 'Party/Night Out', image: '/images/occasions/party.jpg' },
    ],
    multiple: true,
  },
  {
    id: 'style',
    question: 'Which style resonates with you the most?',
    options: [
      { id: 'minimal', label: 'Minimal & Modern', image: '/images/styles/minimal.jpg' },
      { id: 'classic', label: 'Classic & Elegant', image: '/images/styles/classic.jpg' },
      { id: 'bohemian', label: 'Bohemian & Free-spirited', image: '/images/styles/bohemian.jpg' },
      { id: 'glamorous', label: 'Glamorous & Bold', image: '/images/styles/glamorous.jpg' },
    ],
    multiple: false,
  },
  {
    id: 'metal',
    question: 'What\'s your preferred metal tone?',
    options: [
      { id: 'yellow-gold', label: 'Yellow Gold', image: '/images/metals/yellow-gold.jpg' },
      { id: 'white-gold', label: 'White Gold/Silver', image: '/images/metals/white-gold.jpg' },
      { id: 'rose-gold', label: 'Rose Gold', image: '/images/metals/rose-gold.jpg' },
      { id: 'mixed', label: 'Mixed Metals', image: '/images/metals/mixed.jpg' },
    ],
    multiple: false,
  },
];

export function StyleQuiz({ isOpen, onClose, onComplete }: StyleQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers(prev => {
      const question = quizQuestions[currentQuestion];
      if (question.multiple) {
        const current = (prev[questionId] as string[]) || [];
        const updated = current.includes(answerId)
          ? current.filter(id => id !== answerId)
          : [...current, answerId];
        return { ...prev, [questionId]: updated };
      }
      return { ...prev, [questionId]: answerId };
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete(answers);
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const currentQuestionData = quizQuestions[currentQuestion];
  const isAnswered = answers[currentQuestionData.id];
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="p-6">
              <div className="mb-8">
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1 rounded-full mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    className="h-full bg-purple-600 rounded-full"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2 dark:text-white">
                  {currentQuestionData.question}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {currentQuestionData.options.map((option) => {
                  const isSelected = currentQuestionData.multiple
                    ? (answers[currentQuestionData.id] as string[] || []).includes(option.id)
                    : answers[currentQuestionData.id] === option.id;

                  return (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(currentQuestionData.id, option.id)}
                      className={`relative aspect-square rounded-lg overflow-hidden group ${
                        isSelected
                          ? 'ring-2 ring-purple-600 dark:ring-purple-400'
                          : 'ring-1 ring-gray-200 dark:ring-gray-700'
                      }`}
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-semibold text-center px-4">
                          {option.label}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                    currentQuestion === 0
                      ? 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600'
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                    isAnswered
                      ? 'bg-black dark:bg-white text-white dark:text-black hover:opacity-90'
                      : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600'
                  }`}
                >
                  {isLastQuestion ? 'Complete' : 'Next'}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 