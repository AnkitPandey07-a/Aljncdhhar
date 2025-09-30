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

  if (currentQuestion === 0 && selectedAnswer === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gradient font-display mb-6">
              {language === 'en' ? 'Banking Knowledge Quiz' : 'बैंकिंग ज्ञान प्रश्नोत्तरी'}
            </h1>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl mb-8">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <h2 className="text-xl font-bold text-blue-800 mb-2">
                    {language === 'en' 
                      ? 'Ready to level up your banking knowledge?' 
                      : 'अपने बैंकिंग ज्ञान को बढ़ाने के लिए तैयार हैं?'}
                  </h2>
                  <p className="text-blue-700 font-medium">
                    {language === 'en'
                      ? 'This quick quiz will help you understand why linking Aadhaar to your bank account is more than just a formality—it\'s the key to unlocking secure, seamless access to government benefits and financial services.'
                      : 'यह त्वरित प्रश्नोत्तरी आपको समझने में मदद करेगी कि आधार को अपने बैंक खाते से जोड़ना केवल एक औपचारिकता से कहीं अधिक है—यह सरकारी लाभ और वित्तीय सेवाओं तक सुरक्षित, निर्बाध पहुंच की कुंजी है।'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-gray-900 font-display">
                {language === 'en' ? '🔍 Question 1 of 5:' : '🔍 प्रश्न 1 का 5:'}
              </h3>
              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                1 / {questions.length}
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[0].question}
            </h4>
            
            <div className="space-y-3 mb-8">
              {questions[0].options.map((option, index) => (
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
            
            <p className="text-center text-gray-600 mb-6">
              {language === 'en'
                ? 'Choose wisely! Each question is designed to boost your awareness and help you make informed decisions.'
                : 'समझदारी से चुनें! प्रत्येक प्रश्न आपकी जागरूकता बढ़ाने और सूचित निर्णय लेने में मदद करने के लिए डिज़ाइन किया गया है।'}
            </p>
            
            <div className="flex justify-center">
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  selectedAnswer !== null
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                ✅ {language === 'en' ? 'Next' : 'अगला'}
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
              <p className="text-yellow-800 font-medium text-sm">
                <span className="font-bold">📚 {language === 'en' ? 'Need a refresher?' : 'रिफ्रेशर चाहिए?'}</span><br/>
                {language === 'en' 
                  ? 'Visit the "Learn" section before you begin.'
                  : 'शुरू करने से पहले "सीखें" अनुभाग पर जाएं।'}
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
              <p className="text-green-800 font-medium text-sm">
                <span className="font-bold">💡 {language === 'en' ? 'Tip:' : 'सुझाव:'}</span><br/>
                {language === 'en'
                  ? 'Aadhaar linkage is essential for identity verification and receiving Direct Benefit Transfers (DBT).'
                  : 'पहचान सत्यापन और प्रत्यक्ष लाभ स्थानांतरण (डीबीटी) प्राप्त करने के लिए आधार लिंकेज आवश्यक है।'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-12">
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