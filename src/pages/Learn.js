import React from 'react';
import { CreditCard, Banknote, Check, X, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';

const Learn = ({ language, translations }) => {
  const t = translations[language];

  const comparisonData = [
    {
      feature: t.purpose,
      aadhaar: language === 'en' ? 'Identity verification' : 'पहचान सत्यापन',
      dbt: language === 'en' ? 'Receive government benefits' : 'सरकारी लाभ प्राप्त करना'
    },
    {
      feature: t.benefits,
      aadhaar: language === 'en' ? 'Secure transactions' : 'सुरक्षित लेनदेन',
      dbt: language === 'en' ? 'Direct subsidy transfer' : 'प्रत्यक्ष सब्सिडी स्थानांतरण'
    },
    {
      feature: t.requirements,
      aadhaar: language === 'en' ? 'Aadhaar number' : 'आधार नंबर',
      dbt: language === 'en' ? 'Aadhaar seeding + verification' : 'आधार सीडिंग + सत्यापन'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse absolute -top-2 -right-2" />
              <TrendingUp className="w-16 h-16 text-primary animate-bounce" />
            </div>
          </div>
          <h1 className="text-5xl font-black text-gradient font-display mb-6 animate-bounce-in">{t.learn}</h1>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl max-w-4xl mx-auto mb-8">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">💡</div>
              <div>
                <h2 className="text-xl font-bold text-blue-800 mb-2">
                  {language === 'en' 
                    ? 'Not sure which account type suits your needs?' 
                    : 'निश्चित नहीं हैं कि कौन सा खाता प्रकार आपकी आवश्यकताओं के अनुकूल है?'}
                </h2>
                <p className="text-blue-700 font-medium">
                  {language === 'en'
                    ? "We've made it easy to compare ✅ Aadhaar Linked Accounts and ✅ DBT Enabled Accounts so you can choose the right one for secure and seamless banking."
                    : 'हमने ✅ आधार लिंक्ड खातों और ✅ डीबीटी सक्षम खातों की तुलना करना आसान बना दिया है ताकि आप सुरक्षित और निर्बाध बैंकिंग के लिए सही विकल्प चुन सकें।'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-up card-hover border-2 border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-bl-full"></div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 font-display">
                {language === 'en' ? '🔹 Aadhaar Linked Account' : '🔹 आधार लिंक्ड खाता'}
              </h2>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-800 font-medium">
                  {language === 'en' ? 'Aadhaar Verification' : 'आधार सत्यापन'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-800 font-medium">
                  {language === 'en' ? 'Seamless Transactions' : 'निर्बाध लेनदेन'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-800 font-medium">
                  {language === 'en' ? 'Enhanced Security' : 'बेहतर सुरक्षा'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-up card-hover border-2 border-secondary/10 relative overflow-hidden" style={{animationDelay: '0.1s'}}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-orange-600/10 rounded-bl-full"></div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mr-4">
                <Banknote className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 font-display">
                {language === 'en' ? '🔸 DBT Enabled Account' : '🔸 डीबीटी सक्षम खाता'}
              </h2>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-800 font-medium">
                  {language === 'en' ? 'Direct Benefit Transfer' : 'प्रत्यक्ष लाभ स्थानांतरण'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-800 font-medium">
                  {language === 'en' ? 'Government Benefits' : 'सरकारी लाभ'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-800 font-medium">
                  {language === 'en' ? 'Maximum Security' : 'अधिकतम सुरक्षा'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <h3 className="text-3xl font-black text-center text-gradient font-display mb-8">
            {language === 'en' ? '📊 Key Differences at a Glance:' : '📊 एक नज़र में मुख्य अंतर:'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-orange-50">
                  <th className="px-6 py-4 text-left font-bold text-gray-900">
                    {language === 'en' ? 'Feature' : 'विशेषता'}
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-blue-700">
                    {language === 'en' ? 'Aadhaar Linked' : 'आधार लिंक्ड'}
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-orange-700">
                    {language === 'en' ? 'DBT Enabled' : 'डीबीटी सक्षम'}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {language === 'en' ? 'Verification' : 'सत्यापन'}
                  </td>
                  <td className="px-6 py-4 text-center text-blue-700 font-medium">
                    {language === 'en' ? 'Aadhaar' : 'आधार'}
                  </td>
                  <td className="px-6 py-4 text-center text-orange-700 font-medium">
                    {language === 'en' ? 'Aadhaar + DBT' : 'आधार + डीबीटी'}
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {language === 'en' ? 'Security' : 'सुरक्षा'}
                  </td>
                  <td className="px-6 py-4 text-center text-blue-700 font-medium">
                    {language === 'en' ? 'High' : 'उच्च'}
                  </td>
                  <td className="px-6 py-4 text-center text-orange-700 font-medium">
                    {language === 'en' ? 'Maximum' : 'अधिकतम'}
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {language === 'en' ? 'Features' : 'विशेषताएं'}
                  </td>
                  <td className="px-6 py-4 text-center text-blue-700 font-medium">
                    {language === 'en' ? 'Standard' : 'मानक'}
                  </td>
                  <td className="px-6 py-4 text-center text-orange-700 font-medium">
                    {language === 'en' ? 'Full Access' : 'पूर्ण पहुंच'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {language === 'en' ? 'Government Benefits' : 'सरकारी लाभ'}
                  </td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">
                    {language === 'en' ? 'Limited' : 'सीमित'}
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">
                    {language === 'en' ? 'Full Access' : 'पूर्ण पहुंच'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why It Matters & Tip Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl">
            <h4 className="text-lg font-bold text-yellow-800 mb-3">
              {language === 'en' ? '📌 Why it matters:' : '📌 यह क्यों महत्वपूर्ण है:'}
            </h4>
            <p className="text-yellow-700 font-medium">
              {language === 'en'
                ? 'DBT-enabled accounts offer stronger security and smoother transactions—ideal for receiving government benefits and managing funds efficiently. Aadhaar-linked accounts provide basic security but come with limitations.'
                : 'डीबीटी-सक्षम खाते मजबूत सुरक्षा और निर्बाध लेनदेन प्रदान करते हैं—सरकारी लाभ प्राप्त करने और फंड का कुशल प्रबंधन के लिए आदर्श। आधार-लिंक्ड खाते बुनियादी सुरक्षा प्रदान करते हैं लेकिन सीमाओं के साथ आते हैं।'}
            </p>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl">
            <h4 className="text-lg font-bold text-green-800 mb-3">
              {language === 'en' ? '🎯 Tip:' : '🎯 सुझाव:'}
            </h4>
            <p className="text-green-700 font-medium mb-4">
              {language === 'en'
                ? "If you're eligible, enable DBT on your Aadhaar-linked account to unlock full banking features and benefit access."
                : 'यदि आप योग्य हैं, तो पूर्ण बैंकिंग सुविधाओं और लाभ तक पहुंच के लिए अपने आधार-लिंक्ड खाते पर डीबीटी सक्षम करें।'}
            </p>
            <p className="text-sm text-green-600 font-medium">
              {language === 'en'
                ? '🔧 Want help linking your Aadhaar? Click "Learn More" or head to the verification section.'
                : '🔧 आधार लिंक करने में मदद चाहिए? "और जानें" पर क्लिक करें या सत्यापन अनुभाग में जाएं।'}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up" style={{animationDelay: '0.2s'}}>
          <div className="px-8 py-6 bg-gray-50 border-b">
            <h3 className="text-2xl font-semibold text-gray-900">{t.differences}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {t.aadhaarLinked}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {t.dbtEnabled}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {row.aadhaar}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {row.dbt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;