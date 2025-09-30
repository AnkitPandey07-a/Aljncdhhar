import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Bell, Shield, ArrowRight, Zap, Star, TrendingUp, CheckCircle, Users, Target, Lightbulb } from 'lucide-react';


const Home = ({ language, translations }) => {
  const t = translations[language];
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000);
    return () => clearTimeout(timer);
  }, []);

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
          <h1 className="header-modern mb-8 animate-bounce-in">
            {t.title}
          </h1>
          <p className="subtitle-modern mb-8 max-w-4xl mx-auto">
            {t.subtitle}
          </p>
          
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 mb-12 max-w-3xl mx-auto border border-white/20 shadow-xl">
            <h2 className="text-xl md:text-2xl font-display font-bold text-gray-800 mb-4">
              {language === 'en' ? 'Our Mission' : 'हमारा मिशन'}
            </h2>
            <p className="text-gray-700 font-body leading-relaxed">
              {language === 'en' 
                ? 'Empowering every Indian citizen with knowledge about Aadhaar banking, ensuring seamless access to government benefits through digital financial inclusion.'
                : 'आधार बैंकिंग के बारे में ज्ञान के साथ हर भारतीय नागरिक को सशक्त बनाना, डिजिटल वित्तीय समावेश के माध्यम से सरकारी लाभों तक निर्बाध पहुंच सुनिश्चित करना।'
              }
            </p>
          </div>
          

          
          <div className="flex justify-center">
            <TrendingUp className="w-12 h-12 text-accent animate-float" />
          </div>
        </div>

        {/* Welcome Toast */}
        {showWelcome && (
          <div className="fixed top-20 right-4 bg-white shadow-2xl rounded-2xl p-4 border-l-4 border-primary animate-slide-up z-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <span className="text-xl">👋</span>
              </div>
              <div>
                <p className="font-bold text-gray-800">
                  {language === 'en' ? 'Welcome!' : 'स्वागत है!'}
                </p>
                <p className="text-sm text-gray-600">
                  {language === 'en' ? "Let's learn about Aadhaar Banking" : 'आधार बैंकिंग के बारे में जानें'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Why It Matters Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 mb-16 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black text-gradient font-display mb-4">
              {language === 'en' ? 'Why It Matters' : 'यह क्यों महत्वपूर्ण है'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Understanding Aadhaar banking helps you access government benefits faster and more securely'
                : 'आधार बैंकिंग को समझना आपको सरकारी लाभ तेज़ी और सुरक्षित रूप से प्राप्त करने में मदद करता है'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {language === 'en' ? 'Direct Money Transfer' : 'प्रत्यक्ष धन स्थानांतरण'}
              </h3>
              <p className="text-gray-700 text-sm">
                {language === 'en' 
                  ? 'Get scholarships, pensions, and subsidies directly in your bank account without any middleman'
                  : 'छात्रवृत्ति, पेंशन, और सब्सिडी बिना किसी बिचौलिए के सीधे अपने बैंक खाते में प्राप्त करें'
                }
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {language === 'en' ? 'Safe & Secure' : 'सुरक्षित और सेफ'}
              </h3>
              <p className="text-gray-700 text-sm">
                {language === 'en' 
                  ? 'Your identity is protected with biometric verification, making transactions completely secure'
                  : 'बायोमेट्रिक सत्यापन के साथ आपकी पहचान सुरक्षित है, जो लेनदेन को पूरी तरह से सुरक्षित बनाता है'
                }
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {language === 'en' ? 'Faster Processing' : 'तेज़ प्रक्रिया'}
              </h3>
              <p className="text-gray-700 text-sm">
                {language === 'en' 
                  ? 'No more waiting in long queues or paperwork delays. Get your benefits within minutes'
                  : 'अब लंबी कतारों में इंतजार या कागजी कार्रवाई की देरी नहीं। मिनटों में अपने लाभ प्राप्त करें'
                }
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {language === 'en' ? 'For Everyone' : 'सभी के लिए'}
              </h3>
              <p className="text-gray-700 text-sm">
                {language === 'en' 
                  ? 'Students, farmers, senior citizens - everyone can benefit from Aadhaar banking services'
                  : 'छात्र, किसान, वरिष्ठ नागरिक - हर कोई आधार बैंकिंग सेवाओं का लाभ उठा सकता है'
                }
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {language === 'en' ? 'No Corruption' : 'कोई भ्रष्टाचार नहीं'}
              </h3>
              <p className="text-gray-700 text-sm">
                {language === 'en' 
                  ? 'Direct transfer means your money reaches you without any deduction or corruption'
                  : 'प्रत्यक्ष स्थानांतरण का मतलब है कि आपका पैसा बिना किसी कटौती या भ्रष्टाचार के आप तक पहुंचता है'
                }
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {language === 'en' ? 'Easy to Use' : 'इस्तेमाल में आसान'}
              </h3>
              <p className="text-gray-700 text-sm">
                {language === 'en' 
                  ? 'Simple process that can be completed online or at your nearest bank branch'
                  : 'सादा प्रक्रिया जो ऑनलाइन या आपकी निकटतम बैंक शाखा में पूरी की जा सकती है'
                }
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-black text-center text-gradient font-display mb-4">
            {language === 'en' ? 'How It Works' : 'यह कैसे काम करता है'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Choose between offline (bank visit) or online (NPCI website) process'
              : 'ऑफलाइन (बैंक विजिट) या ऑनलाइन (NPCI वेबसाइट) प्रक्रिया के बीच चुनें'
            }
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Offline Process */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-black text-blue-600 mb-6 font-display text-center">
                {language === 'en' ? 'Offline Process' : 'ऑफलाइन प्रक्रिया'}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{language === 'en' ? 'Visit Bank' : 'बैंक जाएं'}</h4>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' 
                        ? 'Go to your nearest bank branch with Aadhaar card'
                        : 'आधार कार्ड के साथ अपनी निकटतम बैंक शाखा में जाएं'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{language === 'en' ? 'Complete Forms' : 'फॉर्म भरें'}</h4>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' 
                        ? 'Fill Aadhaar seeding form and provide biometric verification'
                        : 'आधार सीडिंग फॉर्म भरें और बायोमेट्रिक सत्यापन प्रदान करें'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{language === 'en' ? 'Get Confirmation' : 'पुष्टि प्राप्त करें'}</h4>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' 
                        ? 'Receive SMS confirmation and start receiving benefits'
                        : 'SMS पुष्टि प्राप्त करें और लाभ प्राप्त करना शुरू करें'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Process */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-black text-green-600 mb-6 font-display text-center">
                {language === 'en' ? 'Online Process' : 'ऑनलाइन प्रक्रिया'}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{language === 'en' ? 'Visit NPCI Website' : 'NPCI वेबसाइट पर जाएं'}</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {language === 'en' 
                        ? 'Go to www.npci.org.in and open Consumer section'
                        : 'www.npci.org.in पर जाएं और Consumer सेक्शन खोलें'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{language === 'en' ? 'Access BASE' : 'BASE एक्सेस करें'}</h4>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' 
                        ? 'Open Bharat Aadhaar Seeding Enabler (BASE) portal'
                        : 'Bharat Aadhaar Seeding Enabler (BASE) पोर्टल खोलें'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{language === 'en' ? 'Complete Seeding' : 'सीडिंग पूरी करें'}</h4>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' 
                        ? 'Go to Aadhaar Seeding/Deseeding section and complete process'
                        : 'Aadhaar Seeding/Deseeding सेक्शन में जाएं और प्रक्रिया पूरी करें'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <Link to="/learn" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover border-2 border-transparent group-hover:border-primary/20 animate-slide-up relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-bl-full"></div>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                <BookOpen className="w-10 h-10 text-primary group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black text-gray-900 mb-4 text-center">
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
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-500/25">
                <Award className="w-10 h-10 text-secondary group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black text-gray-900 mb-4 text-center">
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
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-green-500/25">
                <Bell className="w-10 h-10 text-accent group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black text-gray-900 mb-4 text-center">
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
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/25">
                <Shield className="w-10 h-10 text-purple-600 group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black text-gray-900 mb-4 text-center">
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