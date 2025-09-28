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
          <p className="text-2xl font-semibold text-gray-700 max-w-3xl mx-auto">Understanding different account types</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl shadow-2xl p-10 animate-slide-up card-hover border-2 border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-bl-full"></div>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <CreditCard className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 font-display">{t.aadhaarLinked}</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg font-medium leading-relaxed">{t.aadhaarDesc}</p>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <Check className="w-6 h-6 text-green-500 mr-4 animate-bounce" />
                <span className="text-gray-800 font-semibold">
                  {language === 'en' ? 'Identity verification' : 'पहचान सत्यापन'}
                </span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <Shield className="w-6 h-6 text-green-500 mr-4 animate-pulse" />
                <span className="text-gray-800 font-semibold">
                  {language === 'en' ? 'Secure banking' : 'सुरक्षित बैंकिंग'}
                </span>
              </div>
              <div className="flex items-center p-3 bg-red-50 rounded-xl">
                <X className="w-6 h-6 text-red-500 mr-4 animate-wiggle" />
                <span className="text-gray-800 font-semibold">
                  {language === 'en' ? 'No direct DBT benefits' : 'कोई प्रत्यक्ष डीबीटी लाभ नहीं'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-10 animate-slide-up card-hover border-2 border-secondary/10 relative overflow-hidden" style={{animationDelay: '0.1s'}}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-orange-600/10 rounded-bl-full"></div>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <Banknote className="w-8 h-8 text-secondary animate-pulse" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 font-display">{t.dbtEnabled}</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg font-medium leading-relaxed">{t.dbtDesc}</p>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <Zap className="w-6 h-6 text-green-500 mr-4 animate-bounce" />
                <span className="text-gray-800 font-semibold">
                  {language === 'en' ? 'Direct benefit transfer' : 'प्रत्यक्ष लाभ स्थानांतरण'}
                </span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <Check className="w-6 h-6 text-green-500 mr-4 animate-pulse" />
                <span className="text-gray-800 font-semibold">
                  {language === 'en' ? 'Government subsidies' : 'सरकारी सब्सिडी'}
                </span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <Shield className="w-6 h-6 text-green-500 mr-4 animate-wiggle" />
                <span className="text-gray-800 font-semibold">
                  {language === 'en' ? 'Aadhaar verification' : 'आधार सत्यापन'}
                </span>
              </div>
            </div>
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