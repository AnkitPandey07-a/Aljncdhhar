import React from 'react';
import { Phone, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = ({ language, translations }) => {
  const t = translations[language] || translations.en || {};

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black font-display mb-4 text-gradient-light">
              {t.title || 'Aadhaar Banking Education'}
            </h3>
            <p className="text-gray-300 mb-6 font-body leading-relaxed">
              {language === 'en' 
                ? 'Empowering citizens with knowledge about Aadhaar banking and digital financial inclusion.'
                : 'आधार बैंकिंग और डिजिटल वित्तीय समावेश के बारे में नागरिकों को ज्ञान के साथ सशक्त बनाना।'
              }
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>for Digital India</span>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-display">
              {language === 'en' ? 'Important Links' : 'महत्वपूर्ण लिंक'}
            </h4>
            <div className="space-y-3">
              <a 
                href="https://scholarships.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors group"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                {language === 'en' ? 'Scholarship Portal' : 'छात्रवृत्ति पोर्टल'}
              </a>
              <a 
                href="https://dbtbharat.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors group"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                {language === 'en' ? 'DBT Information' : 'डीबीटी जानकारी'}
              </a>
              <a 
                href="https://uidai.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors group"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                {language === 'en' ? 'UIDAI Official' : 'UIDAI आधिकारिक'}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-display">
              {language === 'en' ? 'Support' : 'सहायता'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">1947 (Toll Free)</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">help@uidai.gov.in</span>
              </div>
              <div className="text-sm text-gray-400 mt-4">
                {language === 'en' 
                  ? 'Available 24/7 for assistance'
                  : 'सहायता के लिए 24/7 उपलब्ध'
                }
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Aadhaar Banking Education. {language === 'en' ? 'All rights reserved.' : 'सभी अधिकार सुरक्षित।'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;