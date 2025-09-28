import React, { useState } from 'react';
import { Award, RotateCcw, Download } from 'lucide-react';
import { quizQuestions } from '../utils/quizData';

const Quiz = ({ language, translations }) => {
  const t = translations[language];
  const questions = quizQuestions[language];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    const newAnswers = [...answers, { question: currentQuestion, selected: selectedAnswer, correct: isCorrect }];
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const downloadCertificate = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, 800, 600);
    
    ctx.fillStyle = '#0066cc';
    ctx.fillRect(0, 0, 800, 100);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(t.certificate, 400, 60);
    
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 28px Arial';
    ctx.fillText(t.congratulations, 400, 200);
    
    ctx.font = '20px Arial';
    ctx.fillText(t.quizComplete, 400, 250);
    
    ctx.font = 'bold 24px Arial';
    ctx.fillText(`${t.score}: ${score}/${questions.length}`, 400, 320);
    
    ctx.font = '16px Arial';
    ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, 400, 450);

    const link = document.createElement('a');
    link.download = 'aadhaar-quiz-certificate.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-bounce-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.congratulations}</h1>
            <p className="text-xl text-gray-600 mb-8">{t.quizComplete}</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t.score}</h2>
              <div className="text-4xl font-bold text-primary mb-2">{score}/{questions.length}</div>
              <div className="text-lg text-gray-600">{percentage}%</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={downloadCertificate}
                className="flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.downloadPoster}
              </button>
              
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">{t.quiz}</h1>
            <div className="text-sm text-gray-500">
              {currentQuestion + 1} / {questions.length}
            </div>
          </div>

          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? 'border-primary bg-blue-50 text-primary'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedAnswer !== null
                  ? 'bg-primary text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;