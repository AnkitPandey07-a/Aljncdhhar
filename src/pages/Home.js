import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Bell, Shield, ArrowRight, Zap, Star, TrendingUp } from 'lucide-react';

const Home = ({ language, translations }) => {
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Star className="w-16 h-16 text-yellow-400 animate-pulse absolute -top-2 -right-2" />
              <Zap className="w-20 h-20 text-primary animate-bounce" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gradient font-display mb-8 animate-bounce-in">
            {t.title}
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <div className="flex justify-center mb-12">
            <TrendingUp className="w-12 h-12 text-accent animate-float" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <Link to="/learn" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover border-2 border-transparent group-hover:border-primary/20 animate-slide-up relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-bl-full"></div>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                <BookOpen className="w-10 h-10 text-primary group-hover:animate-wiggle" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4 text-center font-display">
                {t.learn}
              </h3>
              <p className="text-gray-600 text-center mb-8 font-medium leading-relaxed">
                Understand the differences between account types
              </p>
              <div className="flex items-center justify-center text-primary group-hover:text-blue-700 font-bold">
                <span className="mr-3 text-lg">Learn More</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/quiz" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover border-2 border-transparent group-hover:border-secondary/20 animate-slide-up relative overflow-hidden" style={{animationDelay: '0.1s'}}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/10 to-orange-600/10 rounded-bl-full"></div>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Award className="w-10 h-10 text-secondary group-hover:animate-wiggle" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4 text-center font-display">
                {t.quiz}
              </h3>
              <p className="text-gray-600 text-center mb-8 font-medium leading-relaxed">
                Test your knowledge and earn certificates
              </p>
              <div className="flex items-center justify-center text-secondary group-hover:text-orange-700 font-bold">
                <span className="mr-3 text-lg">{t.startQuiz}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/awareness" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover border-2 border-transparent group-hover:border-accent/20 animate-slide-up relative overflow-hidden" style={{animationDelay: '0.2s'}}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-green-600/10 rounded-bl-full"></div>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Bell className="w-10 h-10 text-accent group-hover:animate-wiggle" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4 text-center font-display">
                {t.awareness}
              </h3>
              <p className="text-gray-600 text-center mb-8 font-medium leading-relaxed">
                Stay updated with notices and download resources
              </p>
              <div className="flex items-center justify-center text-accent group-hover:text-green-700 font-bold">
                <span className="mr-3 text-lg">View Updates</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/verify" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover border-2 border-transparent group-hover:border-purple-500/20 animate-slide-up relative overflow-hidden" style={{animationDelay: '0.3s'}}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-bl-full"></div>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-purple-600 group-hover:animate-wiggle" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4 text-center font-display">
                {t.verify}
              </h3>
              <p className="text-gray-600 text-center mb-8 font-medium leading-relaxed">
                Check account authorization and Aadhaar linking status
              </p>
              <div className="flex items-center justify-center text-purple-600 group-hover:text-purple-700 font-bold">
                <span className="mr-3 text-lg">Check Status</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;