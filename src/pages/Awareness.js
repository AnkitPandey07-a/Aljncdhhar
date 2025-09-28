import React from 'react';
import { Download, Calendar, Bell, FileText } from 'lucide-react';
import jsPDF from 'jspdf';

const Awareness = ({ language, translations }) => {
  const t = translations[language];

  const notices = [
    {
      title: language === 'en' ? 'Aadhaar Seeding Drive' : 'आधार सीडिंग अभियान',
      date: '2024-01-15',
      content: language === 'en' 
        ? 'All students must complete Aadhaar seeding by March 2024'
        : 'सभी छात्रों को मार्च 2024 तक आधार सीडिंग पूरी करनी होगी'
    },
    {
      title: language === 'en' ? 'DBT Benefits Update' : 'डीबीटी लाभ अपडेट',
      date: '2024-01-10',
      content: language === 'en'
        ? 'New scholarship amounts will be transferred directly to DBT accounts'
        : 'नई छात्रवृत्ति राशि सीधे डीबीटी खातों में स्थानांतरित की जाएगी'
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.awareness}</h1>
          <p className="text-xl text-gray-600">Stay informed about Aadhaar banking updates</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
              <div className="flex items-center mb-6">
                <Bell className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">{t.notices}</h2>
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

            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <Calendar className="w-6 h-6 text-green-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">{t.events}</h2>
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
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">{t.steps}</h2>
              </div>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Download Resources</h3>
              <button
                onClick={downloadPoster}
                className="w-full flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.downloadPoster}
              </button>
              <p className="text-sm text-gray-500 mt-3 text-center">
                {language === 'en' 
                  ? 'Printable poster for schools and communities'
                  : 'स्कूलों और समुदायों के लिए प्रिंट करने योग्य पोस्टर'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awareness;