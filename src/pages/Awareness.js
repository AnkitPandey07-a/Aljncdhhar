import React from 'react';
import { Download, Calendar, Bell, FileText, Play } from 'lucide-react';
import jsPDF from 'jspdf';

const Awareness = ({ language, translations }) => {
  const t = translations[language];

  const notices = [
    {
      title: language === 'en' ? 'Aadhaar Seeding Drive' : 'आधार सीडिंग अभियान',
      date: '2024-01-15',
      content: language === 'en' 
        ? 'All students must complete Aadhaar seeding by March 2024. Visit your nearest bank branch with required documents including Aadhaar card and bank passbook.'
        : 'सभी छात्रों को मार्च 2024 तक आधार सीडिंग पूरी करनी होगी। आधार कार्ड और बैंक पासबुक सहित आवश्यक दस्तावेजों के साथ अपनी निकटतम बैंक शाखा में जाएं।'
    },
    {
      title: language === 'en' ? 'DBT Benefits Update' : 'डीबीटी लाभ अपडेट',
      date: '2024-01-10',
      content: language === 'en'
        ? 'New scholarship amounts will be transferred directly to DBT accounts. Ensure your account is Aadhaar-linked and DBT-enabled to receive benefits without delay.'
        : 'नई छात्रवृत्ति राशि सीधे डीबीटी खातों में स्थानांतरित की जाएगी। बिना देरी के लाभ प्राप्त करने के लिए सुनिश्चित करें कि आपका खाता आधार-लिंक्ड और डीबीटी-सक्षम है।'
    },
    {
      title: language === 'en' ? 'Account Verification Mandatory' : 'खाता सत्यापन अनिवार्य',
      date: '2024-01-05',
      content: language === 'en'
        ? 'All bank account holders must verify their Aadhaar linking status before February 2024. Use our verification tool or visit your bank branch for assistance.'
        : 'सभी बैंक खाताधारकों को फरवरी 2024 से पहले अपने आधार लिंकिंग स्थिति की पुष्टि करनी होगी। सहायता के लिए हमारे सत्यापन टूल का उपयोग करें या अपनी बैंक शाखा में जाएं।'
    },
    {
      title: language === 'en' ? 'Digital Banking Security Alert' : 'डिजिटल बैंकिंग सुरक्षा चेतावनी',
      date: '2024-01-01',
      content: language === 'en'
        ? 'Never share your Aadhaar OTP, bank PIN, or personal details with anyone. Banks will never ask for sensitive information over phone or email.'
        : 'कभी भी अपना आधार OTP, बैंक PIN, या व्यक्तिगत विवरण किसी के साथ साझा न करें। बैंक कभी भी फोन या ईमेल पर संवेदनशील जानकारी नहीं मांगते।'
    }
  ];

  const events = [
    {
      title: language === 'en' ? 'Banking Awareness Workshop' : 'बैंकिंग जागरूकता कार्यशाला',
      date: '2024-02-01',
      location: language === 'en' ? 'Community Center' : 'सामुदायिक केंद्र'
    },
    {
      title: language === 'en' ? 'Aadhaar Seeding Camp' : 'आधार सीडिंग शिविर',
      date: '2024-02-15',
      location: language === 'en' ? 'School Premises' : 'स्कूल परिसर'
    }
  ];

  const steps = language === 'en' ? [
    'Visit your bank branch with Aadhaar card',
    'Fill the Aadhaar seeding form',
    'Provide biometric verification',
    'Receive confirmation SMS',
    'Check account status online'
  ] : [
    'आधार कार्ड के साथ अपनी बैंक शाखा में जाएं',
    'आधार सीडिंग फॉर्म भरें',
    'बायोमेट्रिक सत्यापन प्रदान करें',
    'पुष्टिकरण एसएमएस प्राप्त करें',
    'ऑनलाइन खाता स्थिति जांचें'
  ];

  const downloadPoster = () => {
    const pdf = new jsPDF();
    
    pdf.setFillColor(0, 102, 204);
    pdf.rect(0, 0, 210, 40, 'F');
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.text(t.title, 105, 25, { align: 'center' });
    
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(18);
    pdf.text(t.steps, 20, 60);
    
    pdf.setFontSize(12);
    let yPos = 80;
    steps.forEach((step, index) => {
      pdf.text(`${index + 1}. ${step}`, 20, yPos);
      yPos += 15;
    });
    
    pdf.text('For more information, visit your nearest bank branch', 20, yPos + 20);
    
    pdf.save('aadhaar-seeding-poster.pdf');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Bell className="w-16 h-16 text-yellow-400 animate-pulse absolute -top-2 -right-2" />
              <FileText className="w-20 h-20 text-primary animate-bounce" />
            </div>
          </div>
          <h1 className="header-awareness mb-8 animate-bounce-in">
            {t.awareness}
          </h1>
          <p className="subtitle-awareness max-w-4xl mx-auto">
            {language === 'en' ? '🚨 Stay Updated with Latest Banking Information' : '🚨 नवीनतम बैंकिंग जानकारी के साथ अपडेट रहें'}
          </p>
        </div>

        {/* Aadhaar Seeding Steps - Top Priority */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 animate-slide-up card-hover border-2 border-blue-500/20 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-bl-full"></div>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl font-black text-gradient font-display mb-4">{t.steps}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Follow these simple steps to complete your Aadhaar seeding process'
                : 'अपनी आधार सीडिंग प्रक्रिया पूरी करने के लिए इन सरल चरणों का पालन करें'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Offline Steps */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-black text-blue-700 mb-6 font-display flex items-center">
                <span className="mr-2">🏢</span>
                {language === 'en' ? 'Offline Steps' : 'ऑफलाइन चरण'}
              </h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Online Steps */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <h3 className="text-xl font-black text-green-700 mb-6 font-display flex items-center">
                <span className="mr-2">💻</span>
                {language === 'en' ? 'Online Steps' : 'ऑनलाइन चरण'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                  <div>
                    <p className="text-gray-700 text-sm mb-2">
                      {language === 'en' ? 'Visit NPCI website:' : 'NPCI वेबसाइट पर जाएं:'}
                    </p>
                    <a href="https://www.npci.org.in/" target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1 bg-green-600 text-white rounded-lg text-xs hover:bg-green-700 transition-colors">
                      www.npci.org.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                  <p className="text-gray-700 text-sm">{language === 'en' ? 'Open Consumer section' : 'Consumer सेक्शन खोलें'}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                  <p className="text-gray-700 text-sm">{language === 'en' ? 'Open Bharat Aadhaar Seeding Enabler (BASE)' : 'Bharat Aadhaar Seeding Enabler (BASE) खोलें'}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                  <p className="text-gray-700 text-sm">{language === 'en' ? 'Go to Aadhaar Seeding/Deseeding section' : 'Aadhaar Seeding/Deseeding सेक्शन में जाएं'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-up card-hover border-2 border-pink-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-bl-full"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📢</span>
                </div>
                <h2 className="text-2xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent font-display">{t.notices}</h2>
              </div>
              <div className="space-y-6">
                {notices.map((notice, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{notice.title}</h3>
                      <span className="text-sm text-gray-500">{notice.date}</span>
                    </div>
                    <p className="text-gray-600">{notice.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-up card-hover border-2 border-blue-500/20 relative overflow-hidden" style={{animationDelay: '0.1s'}}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-bl-full"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h2 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-display">{t.events}</h2>
              </div>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="w-4 h-4 mr-2">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">


            <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-up card-hover border-2 border-red-500/10 relative overflow-hidden" style={{animationDelay: '0.3s'}}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-bl-full"></div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mr-3">
                  <Play className="w-5 h-5 text-red-500 animate-bounce" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 font-display">
                  {language === 'en' ? 'Video Guide' : 'वीडियो गाइड'}
                </h3>
              </div>
              <div className="mb-6">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/gjPkUF23UTg"
                  title="Aadhaar Banking Guide"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mb-4 text-center">
                {language === 'en'
                  ? 'Complete guide on Aadhaar banking and DBT'
                  : 'आधार बैंकिंग और डीबीटी पर पूरी गाइड'
                }
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-up card-hover border-2 border-purple-500/20 relative overflow-hidden" style={{animationDelay: '0.3s'}}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-bl-full"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h2 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-display">
                  {language === 'en' ? 'Download Resources' : 'डाउनलोड संसाधन'}
                </h2>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 border-2 border-dashed border-gray-300">
                <div className="text-center mb-4">
                  <img 
                    src="/dbt-awareness.jpg" 
                    alt="Aadhaar vs DBT Awareness Infographic"
                    className="w-full max-w-sm mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl items-center justify-center flex-col">
                    <FileText className="w-16 h-16 text-gray-400 mb-4" />
                    <p className="text-gray-500 text-center font-medium">
                      {language === 'en' ? 'Preview Coming Soon' : 'पूर्वावलोकन जल्द आ रहा है'}
                    </p>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mb-4">
                  {language === 'en' 
                    ? 'Best for schools & awareness drives'
                    : 'स्कूलों और जागरूकता अभियानों के लिए सर्वोत्तम'
                  }
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/dbt-awareness.jpg';
                    link.download = 'dbt-awareness.jpg';
                    link.click();
                  }}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  <Download className="w-6 h-6 mr-3" />
                  <span className="text-lg">
                    {language === 'en' ? '📊 Download Infographic' : '📊 इन्फोग्राफिक डाउनलोड करें'}
                  </span>
                </button>
                
                <button
                  onClick={downloadPoster}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  <Download className="w-6 h-6 mr-3" />
                  <span className="text-lg">
                    {language === 'en' ? '📜 Download Poster' : '📜 पोस्टर डाउनलोड करें'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awareness;