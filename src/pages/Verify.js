import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, AlertCircle, CreditCard, Banknote, Shield } from 'lucide-react';

const Verify = ({ language, translations }) => {
  const t = translations[language];
  const [dbtAccountNumber, setDbtAccountNumber] = useState('');
  const [dbtAadhaarNumber, setDbtAadhaarNumber] = useState('');
  const [dbtResult, setDbtResult] = useState(null);
  const [dbtLoading, setDbtLoading] = useState(false);
  
  const [aadhaarAccountNumber, setAadhaarAccountNumber] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [aadhaarResult, setAadhaarResult] = useState(null);
  const [aadhaarLoading, setAadhaarLoading] = useState(false);

  const handleDbtVerify = (e) => {
    e.preventDefault();
    if (!dbtAccountNumber || !dbtAadhaarNumber) return;
    
    setDbtLoading(true);
    
    setTimeout(() => {
      const isDbtEnabled = Math.random() > 0.4;
      setDbtResult({
        isDbtEnabled,
        accountNumber: dbtAccountNumber.slice(-4),
        aadhaarNumber: dbtAadhaarNumber.slice(-4)
      });
      setDbtLoading(false);
    }, 2000);
  };

  const handleAadhaarVerify = (e) => {
    e.preventDefault();
    if (!aadhaarAccountNumber || !aadhaarNumber) return;
    
    setAadhaarLoading(true);
    
    setTimeout(() => {
      const isLinked = Math.random() > 0.3;
      setAadhaarResult({
        isLinked,
        accountNumber: aadhaarAccountNumber.slice(-4),
        aadhaarNumber: aadhaarNumber.slice(-4)
      });
      setAadhaarLoading(false);
    }, 2000);
  };



  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Verify Account Status' : 'खाता स्थिति सत्यापित करें'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Check if your account is linked and authorized with Aadhaar'
              : 'जांचें कि आपका खाता आधार से जुड़ा और अधिकृत है या नहीं'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* DBT Status Check Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-2 border-secondary/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mr-4">
                <Banknote className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-display">
                {language === 'en' ? 'DBT Status Check' : 'डीबीटी स्थिति जांच'}
              </h3>
            </div>
            
            <form onSubmit={handleDbtVerify} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {language === 'en' ? 'Bank Account Number' : 'बैंक खाता संख्या'}
                </label>
                <input
                  type="text"
                  value={dbtAccountNumber}
                  onChange={(e) => setDbtAccountNumber(e.target.value)}
                  placeholder={language === 'en' ? 'Enter account number' : 'खाता संख्या दर्ज करें'}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent font-medium"
                  maxLength="16"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {language === 'en' ? 'Aadhaar Number' : 'आधार संख्या'}
                </label>
                <input
                  type="text"
                  value={dbtAadhaarNumber}
                  onChange={(e) => setDbtAadhaarNumber(e.target.value)}
                  placeholder={language === 'en' ? 'Enter Aadhaar number' : 'आधार संख्या दर्ज करें'}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent font-medium"
                  maxLength="12"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={dbtLoading || !dbtAccountNumber || !dbtAadhaarNumber}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all ${
                  dbtLoading || !dbtAccountNumber || !dbtAadhaarNumber
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-secondary text-white hover:bg-orange-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {dbtLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {dbtLoading 
                  ? (language === 'en' ? 'Checking...' : 'जांच रहे हैं...')
                  : (language === 'en' ? 'Check DBT Status' : 'डीबीटी स्थिति जांचें')
                }
              </button>
            </form>

            {dbtResult && (
              <div className="mt-6 p-6 bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl border-2 border-orange-100">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {dbtResult.isDbtEnabled ? 
                      <CheckCircle className="w-12 h-12 text-green-500" /> : 
                      <XCircle className="w-12 h-12 text-red-500" />
                    }
                  </div>
                  <h4 className="text-lg font-black text-gray-900 mb-2">
                    {dbtResult.isDbtEnabled ?
                      (language === 'en' ? 'DBT Enabled' : 'डीबीटी सक्षम') :
                      (language === 'en' ? 'DBT Not Enabled' : 'डीबीटी सक्षम नहीं')
                    }
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">****{dbtResult.accountNumber}</p>
                  {!dbtResult.isDbtEnabled && (
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-xs font-medium text-yellow-800">
                        {language === 'en' ? 'Visit bank to enable DBT' : 'डीबीटी सक्षम करने के लिए बैंक जाएं'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Aadhaar Link Check Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-2 border-primary/20" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-display">
                {language === 'en' ? 'Aadhaar Link Check' : 'आधार लिंक जांच'}
              </h3>
            </div>
            
            <form onSubmit={handleAadhaarVerify} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {language === 'en' ? 'Bank Account Number' : 'बैंक खाता संख्या'}
                </label>
                <input
                  type="text"
                  value={aadhaarAccountNumber}
                  onChange={(e) => setAadhaarAccountNumber(e.target.value)}
                  placeholder={language === 'en' ? 'Enter account number' : 'खाता संख्या दर्ज करें'}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent font-medium"
                  maxLength="16"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {language === 'en' ? 'Aadhaar Number' : 'आधार संख्या'}
                </label>
                <input
                  type="text"
                  value={aadhaarNumber}
                  onChange={(e) => setAadhaarNumber(e.target.value)}
                  placeholder={language === 'en' ? 'Enter Aadhaar number' : 'आधार संख्या दर्ज करें'}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent font-medium"
                  maxLength="12"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={aadhaarLoading || !aadhaarAccountNumber || !aadhaarNumber}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all ${
                  aadhaarLoading || !aadhaarAccountNumber || !aadhaarNumber
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {aadhaarLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {aadhaarLoading 
                  ? (language === 'en' ? 'Checking...' : 'जांच रहे हैं...')
                  : (language === 'en' ? 'Check Aadhaar Link' : 'आधार लिंक जांचें')
                }
              </button>
            </form>

            {aadhaarResult && (
              <div className="mt-6 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-blue-100">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {aadhaarResult.isLinked ? 
                      <CheckCircle className="w-12 h-12 text-green-500" /> : 
                      <XCircle className="w-12 h-12 text-red-500" />
                    }
                  </div>
                  <h4 className="text-lg font-black text-gray-900 mb-2">
                    {aadhaarResult.isLinked ?
                      (language === 'en' ? 'Aadhaar Linked' : 'आधार जुड़ा है') :
                      (language === 'en' ? 'Aadhaar Not Linked' : 'आधार जुड़ा नहीं है')
                    }
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">****{aadhaarResult.accountNumber}</p>
                  {!aadhaarResult.isLinked && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-xs font-medium text-red-800">
                        {language === 'en' ? 'Visit bank to link Aadhaar' : 'आधार लिंक करने के लिए बैंक जाएं'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
          <h4 className="font-semibold text-blue-900 mb-2">
            {language === 'en' ? 'Important Note' : 'महत्वपूर्ण सूचना'}
          </h4>
          <p className="text-sm text-blue-800">
            {language === 'en'
              ? 'This is a demo verification system. In real implementation, this would connect to official banking APIs with proper security measures.'
              : 'यह एक डेमो सत्यापन प्रणाली है। वास्तविक कार्यान्वयन में, यह उचित सुरक्षा उपायों के साथ आधिकारिक बैंकिंग एपीआई से जुड़ेगा।'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;