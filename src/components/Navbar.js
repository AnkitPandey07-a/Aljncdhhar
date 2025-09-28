import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Sparkles } from 'lucide-react';

const Navbar = ({ language, setLanguage, translations }) => {
  const location = useLocation();
  const t = translations[language];

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
            <Link to="/" className="text-xl font-black text-gradient font-display hover:scale-105 transition-transform">
              {t.title}
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white bg-gradient-to-r from-primary to-blue-600 shadow-lg animate-glow'
                    : 'text-gray-700 hover:text-primary hover:bg-blue-50 hover:scale-105'
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
              className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-primary hover:to-blue-600 hover:text-white transition-all duration-300 text-sm font-bold appearance-none pr-10 cursor-pointer shadow-md hover:shadow-lg"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="bn">বাংলা</option>
              <option value="te">తెలుగు</option>
              <option value="mr">मराठी</option>
              <option value="ta">தமிழ்</option>
              <option value="gu">ગુજરાતી</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="or">ଓଡ଼ିଆ</option>
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