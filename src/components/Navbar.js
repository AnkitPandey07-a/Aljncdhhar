import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Sparkles } from 'lucide-react';

const Navbar = ({ language, setLanguage, translations }) => {
  const location = useLocation();
  const t = translations[language] || translations.en || {};

  const navItems = [
    { path: '/', label: t.home },
    { path: '/learn', label: t.learn },
    { path: '/quiz', label: t.quiz },
    { path: '/awareness', label: t.awareness },
    { path: '/verify', label: t.verify }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <Link to="/" className="text-2xl font-black text-gradient font-display hover:scale-105 transition-transform animate-float">
              {t.title}
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 font-heading ${
                  location.pathname === item.path
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg animate-glow'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 hover:-translate-y-1'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-4 py-2 rounded-xl bg-white border-2 border-gray-300 hover:border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-sm font-bold appearance-none pr-10 cursor-pointer shadow-md hover:shadow-lg font-heading text-gray-800"
              style={{
                backgroundImage: 'none',
                color: '#1f2937'
              }}
            >
              <option value="en" style={{color: '#1f2937', backgroundColor: '#ffffff'}}>English</option>
              <option value="hi" style={{color: '#1f2937', backgroundColor: '#ffffff'}}>हिंदी</option>
              <option value="bn" style={{color: '#1f2937', backgroundColor: '#ffffff'}}>বাংলা</option>
              <option value="te" style={{color: '#1f2937', backgroundColor: '#ffffff'}}>తెలుగు</option>
              <option value="mr" style={{color: '#1f2937', backgroundColor: '#ffffff'}}>मराठी</option>
              <option value="ta" style={{color: '#1f2937', backgroundColor: '#ffffff'}}>தமிழ்</option>
              <option value="gu" style={{color: '#1f2937', backgroundColor: '#ffffff'}}>ગુજરાતી</option>
              <option value="kn" style={{color: '#1f2937', backgroundColor: '#ffffff'}}>ಕನ್ನಡ</option>
              <option value="or" style={{color: '#1f2937', backgroundColor: '#ffffff'}}>ଓଡ଼ିଆ</option>
              <option value="pa" style={{color: '#1f2937', backgroundColor: '#ffffff'}}>ਪੰਜਾਬੀ</option>
            </select>
            <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none animate-pulse" />
          </div>
        </div>

        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-primary bg-blue-50'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;