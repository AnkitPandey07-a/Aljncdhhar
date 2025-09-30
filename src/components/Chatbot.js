import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const Chatbot = ({ language, translations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: language === 'en' 
        ? '👋 Welcome to Aadhaar Banking Education!\n\nI\'m here to help you explore how Aadhaar can simplify your banking experience and unlock direct government benefits.\n\n✨ Here\'s what you can learn today:\n- Why Aadhaar banking matters for financial inclusion and security\n- How to link your Aadhaar to your bank account\n- Steps to verify your account for DBT eligibility\n- Take quizzes to test your knowledge\n- Compare account types and choose what\'s best for you\n\n💬 Ask me anything—from "How do I link my Aadhaar?" to "What\'s the difference between DBT and Aadhaar-linked accounts?"\n\nReady to get started? Just type your question or click a section below:\n🔹 [Learn] 🔹 [Verify] 🔹 [Assess] 🔹 [Resources]'
        : '👋 आधार बैंकिंग शिक्षा में आपका स्वागत है!\n\nमैं यहाँ आपकी मदद करने के लिए हूँ कि आधार कैसे आपके बैंकिंग अनुभव को सरल बना सकता है और प्रत्यक्ष सरकारी लाभ अनलॉक कर सकता है।\n\n✨ आज आप यह सीख सकते हैं:\n- वित्तीय समावेश और सुरक्षा के लिए आधार बैंकिंग क्यों महत्वपूर्ण है\n- अपने आधार को अपने बैंक खाते से कैसे लिंक करें\n- डीबीटी पात्रता के लिए अपने खाते को सत्यापित करने के चरण\n- अपने ज्ञान का परीक्षण करने के लिए प्रश्नोत्तरी लें\n- खाता प्रकारों की तुलना करें और चुनें कि आपके लिए सबसे अच्छा क्या है\n\n💬 मुझसे कुछ भी पूछें—"मैं अपना आधार कैसे लिंक करूं?" से लेकर "डीबीटी और आधार-लिंक्ड खातों में क्या अंतर है?" तक\n\nशुरू करने के लिए तैयार हैं? बस अपना प्रश्न टाइप करें या नीचे किसी सेक्शन पर क्लिक करें:\n🔹 [सीखें] 🔹 [सत्यापित करें] 🔹 [मूल्यांकन] 🔹 [संसाधन]'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    { text: language === 'en' ? 'How to link Aadhaar?' : 'आधार कैसे लिंक करें?', response: language === 'en' ? 'To link your Aadhaar to your bank account:\n\n1. Visit your bank branch with Aadhaar card\n2. Fill the Aadhaar seeding form\n3. Provide biometric verification\n4. Receive SMS confirmation\n\nYou can also do this online through NPCI website at www.npci.org.in' : 'अपने आधार को अपने बैंक खाते से लिंक करने के लिए:\n\n1. आधार कार्ड के साथ अपनी बैंक शाखा में जाएं\n2. आधार सीडिंग फॉर्म भरें\n3. बायोमेट्रिक सत्यापन प्रदान करें\n4. एसएमएस पुष्टि प्राप्त करें\n\nआप इसे NPCI वेबसाइट www.npci.org.in के माध्यम से ऑनलाइन भी कर सकते हैं' },
    { text: language === 'en' ? 'DBT vs Aadhaar difference?' : 'डीबीटी बनाम आधार अंतर?', response: language === 'en' ? 'Key differences:\n\n🔹 Aadhaar-Linked Account:\n- Basic identity verification\n- Standard banking features\n- Limited government benefits\n\n🔹 DBT-Enabled Account:\n- Full Aadhaar + DBT verification\n- Direct benefit transfers\n- Complete government scheme access\n- Enhanced security features' : 'मुख्य अंतर:\n\n🔹 आधार-लिंक्ड खाता:\n- बुनियादी पहचान सत्यापन\n- मानक बैंकिंग सुविधाएं\n- सीमित सरकारी लाभ\n\n🔹 डीबीटी-सक्षम खाता:\n- पूर्ण आधार + डीबीटी सत्यापन\n- प्रत्यक्ष लाभ स्थानांतरण\n- पूर्ण सरकारी योजना पहुंच\n- बेहतर सुरक्षा सुविधाएं' },
    { text: language === 'en' ? 'Check account status?' : 'खाता स्थिति जांचें?', response: language === 'en' ? 'You can check your account status through:\n\n🔹 DBT Status: Visit dbtbharat.gov.in\n🔹 Aadhaar Link Status: Visit resident.uidai.gov.in/bank-mapper\n\nOr use our Verify section for direct links to these official portals!' : 'आप अपने खाते की स्थिति इनके माध्यम से जांच सकते हैं:\n\n🔹 डीबीटी स्थिति: dbtbharat.gov.in पर जाएं\n🔹 आधार लिंक स्थिति: resident.uidai.gov.in/bank-mapper पर जाएं\n\nया इन आधिकारिक पोर्टल के सीधे लिंक के लिए हमारे सत्यापन अनुभाग का उपयोग करें!' }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessages = [...messages, { type: 'user', content: inputMessage }];
    
    // Simple response logic
    let botResponse = language === 'en' 
      ? 'Thank you for your question! For detailed information, please visit our Learn section or use the Verify tools to check your account status.'
      : 'आपके प्रश्न के लिए धन्यवाद! विस्तृत जानकारी के लिए, कृपया हमारे सीखें अनुभाग पर जाएं या अपने खाते की स्थिति जांचने के लिए सत्यापन उपकरण का उपयोग करें।';

    // Check for quick replies
    const quickReply = quickReplies.find(reply => 
      inputMessage.toLowerCase().includes(reply.text.toLowerCase().split('?')[0])
    );
    
    if (quickReply) {
      botResponse = quickReply.response;
    }

    setTimeout(() => {
      setMessages([...newMessages, { type: 'bot', content: botResponse }]);
    }, 1000);

    setMessages(newMessages);
    setInputMessage('');
  };

  const handleQuickReply = (reply) => {
    const newMessages = [...messages, { type: 'user', content: reply.text }];
    setTimeout(() => {
      setMessages([...newMessages, { type: 'bot', content: reply.response }]);
    }, 1000);
    setMessages(newMessages);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed top-6 right-6 w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-125 hover:rotate-12 transition-all duration-500 z-50 ${isOpen ? 'hidden' : 'flex'} items-center justify-center animate-bounce group`}
      >
        <MessageCircle className="w-10 h-10 animate-pulse group-hover:animate-spin" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-ping">
          <span className="text-xs font-bold">!</span>
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed top-28 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">
                  {language === 'en' ? 'Aadhaar Assistant' : 'आधार सहायक'}
                </h3>
                <p className="text-xs opacity-90">
                  {language === 'en' ? 'Online now' : 'अभी ऑनलाइन'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <div className="flex items-start space-x-2">
                    {message.type === 'bot' && (
                      <Bot className="w-4 h-4 mt-1 flex-shrink-0 text-blue-600" />
                    )}
                    {message.type === 'user' && (
                      <User className="w-4 h-4 mt-1 flex-shrink-0" />
                    )}
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="p-4 border-t bg-gray-50">
              <p className="text-xs text-gray-600 mb-2">
                {language === 'en' ? 'Quick questions:' : 'त्वरित प्रश्न:'}
              </p>
              <div className="space-y-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="w-full text-left text-xs bg-white border border-gray-200 rounded-lg p-2 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={language === 'en' ? 'Type your question...' : 'अपना प्रश्न टाइप करें...'}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;