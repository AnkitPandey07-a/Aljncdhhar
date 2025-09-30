import React, { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, Users, Award } from 'lucide-react';

const InteractiveElements = ({ language }) => {
  const [stats, setStats] = useState({ users: 0, accounts: 0, benefits: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const targets = { users: 50000, accounts: 25000, benefits: 15000 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        users: Math.floor(targets.users * progress),
        accounts: Math.floor(targets.accounts * progress),
        benefits: Math.floor(targets.benefits * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, stepTime);
  };

  const statsData = [
    {
      icon: Users,
      value: stats.users.toLocaleString(),
      label: language === 'hi' ? 'उपयोगकर्ता' : 'Users',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      value: stats.accounts.toLocaleString(),
      label: language === 'hi' ? 'लिंक्ड खाते' : 'Linked Accounts',
      color: 'text-green-600'
    },
    {
      icon: Award,
      value: stats.benefits.toLocaleString(),
      label: language === 'hi' ? 'लाभार्थी' : 'Beneficiaries',
      color: 'text-purple-600'
    }
  ];

  return (
    <div id="stats-section" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
            <h2 className="text-4xl font-black text-gradient font-display">
              {language === 'hi' ? 'हमारी उपलब्धियां' : 'Our Impact'}
            </h2>
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
          </div>
          <p className="text-gray-600 text-lg font-body max-w-2xl mx-auto">
            {language === 'hi' 
              ? 'लाखों भारतीयों को डिजिटल बैंकिंग से जोड़ने में हमारी भूमिका'
              : 'Connecting millions of Indians to digital banking solutions'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`interactive-card text-center group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform`} />
              </div>
              <div className={`text-4xl font-black ${stat.color} mb-2 font-display`}>
                {stat.value}+
              </div>
              <div className="text-gray-600 font-semibold font-heading">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveElements;