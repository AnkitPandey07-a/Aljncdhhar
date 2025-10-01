import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import Awareness from './pages/Awareness';
import Verify from './pages/Verify';
import { translations } from './utils/translations';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <div className="App min-h-screen flex flex-col scroll-smooth">
        <Navbar 
          language={language} 
          setLanguage={setLanguage} 
          translations={translations} 
        />
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<Home language={language} translations={translations} />} 
            />
            <Route 
              path="/learn" 
              element={<Learn language={language} translations={translations} />} 
            />
            <Route 
              path="/quiz" 
              element={<Quiz language={language} translations={translations} />} 
            />
            <Route 
              path="/awareness" 
              element={<Awareness language={language} translations={translations} />} 
            />
            <Route 
              path="/verify" 
              element={<Verify language={language} translations={translations} />} 
            />
          </Routes>
        </main>
        <Footer language={language} translations={translations} />
        <Chatbot language={language} translations={translations} />
      </div>
    </Router>
  );
}

export default App;