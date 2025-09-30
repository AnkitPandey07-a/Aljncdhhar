import React, { useState } from 'react';
import { Shield, CheckCircle, ExternalLink, AlertCircle, Info } from 'lucide-react';

const Verify = ({ language, translations }) => {
  const t = translations[language] || translations.en || {};
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10 text-white animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gradient font-display mb-6">
            {language === 'en' ? 'Account Verification' : 'खाता सत्यापन'}
          </h1>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl max-w-3xl mx-auto">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-green-800 mb-2">
                  {language === 'en' 
                    ? '✅ Want to receive government benefits directly into your bank account?' 
                    : '✅ क्या आप सरकारी लाभ सीधे अपने बैंक खाते में प्राप्त करना चाहते हैं?'
                  }
                </h2>
                <p className="text-green-700 font-medium">
                  {language === 'en'
                    ? 'Make sure your account is fully verified and Aadhaar-linked! Use the tools below to check your status in seconds:'
                    : 'सुनिश्चित करें कि आपका खाता पूरी तरह से सत्यापित और आधार-लिंक्ड है! सेकंडों में अपनी स्थिति जांचने के लिए नीचे दिए गए टूल का उपयोग करें:'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Tools */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* DBT Status Check */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 card-hover border-2 border-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-bl-full"></div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-display">
                {language === 'en' ? '🔹 DBT Status Check' : '🔹 डीबीटी स्थिति जांच'}
              </h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Confirm if your account is eligible for Direct Benefit Transfers (DBT)'
                    : 'पुष्टि करें कि क्या आपका खाता प्रत्यक्ष लाभ स्थानांतरण (डीबीटी) के लिए योग्य है'
                  }
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Check your bank account setup'
                    : 'अपने बैंक खाते की सेटअप जांचें'
                  }
                </p>
              </div>
            </div>
            <a
              href="https://dbtbharat.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Check DBT Status' : 'डीबीटी स्थिति जांचें'}
            </a>
          </div>

          {/* Aadhaar Link Check */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 card-hover border-2 border-green-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-bl-full"></div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-display">
                {language === 'en' ? '🔹 Aadhaar Link Check' : '🔹 आधार लिंक जांच'}
              </h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Verify if your Aadhaar is linked with your bank'
                    : 'सत्यापित करें कि क्या आपका आधार आपके बैंक से जुड़ा है'
                  }
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Confirm linkage with NPCI for seamless benefit transfers'
                    : 'निर्बाध लाभ स्थानांतरण के लिए NPCI के साथ लिंकेज की पुष्टि करें'
                  }
                </p>
              </div>
            </div>
            <a
              href="https://resident.uidai.gov.in/bank-mapper"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Check Aadhaar Link' : 'आधार लिंक जांचें'}
            </a>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">
                {language === 'en' ? '📌 Important:' : '📌 महत्वपूर्ण:'}
              </h3>
              <p className="text-yellow-700 font-medium">
                {language === 'en'
                  ? 'To receive DBT benefits, your Aadhaar must be linked with both your bank account and NPCI. Use the buttons above to check and update your status now!'
                  : 'डीबीटी लाभ प्राप्त करने के लिए, आपका आधार आपके बैंक खाते और NPCI दोनों के साथ जुड़ा होना चाहिए। अपनी स्थिति जांचने और अपडेट करने के लिए ऊपर दिए गए बटन का उपयोग करें!'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="text-center">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-xl font-bold hover:bg-gray-700 transition-colors"
          >
            <Info className="w-5 h-5 mr-2" />
            {language === 'en' ? '🛠️ Need help? Learn More' : '🛠️ सहायता चाहिए? और जानें'}
          </button>
          
          {showInfo && (
            <div className="mt-6 bg-white rounded-2xl shadow-lg p-8 text-left animate-slide-up">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Verification Requirements:' : 'सत्यापन आवश्यकताएं:'}
              </h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    {language === 'en'
                      ? 'Your Aadhaar number must be linked to your bank account'
                      : 'आपका आधार नंबर आपके बैंक खाते से जुड़ा होना चाहिए'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    {language === 'en'
                      ? 'Bank account should be active and operational'
                      : 'बैंक खाता सक्रिय और परिचालित होना चाहिए'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    {language === 'en'
                      ? 'Mobile number linked with both Aadhaar and bank account'
                      : 'मोबाइल नंबर आधार और बैंक खाते दोनों से जुड़ा होना चाहिए'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>
                    {language === 'en'
                      ? 'Complete KYC verification with your bank'
                      : 'अपने बैंक के साथ पूर्ण केवाईसी सत्यापन'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;