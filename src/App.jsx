import React, { useState, useEffect, useRef } from 'react';
import './index.css';

import LandingPage from './components/LandingPage';
import Typewriter from './components/Typewriter';
import SoundManager from './utils/SoundManager';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState('System Ready');
  const [messages, setMessages] = useState([
    { text: "System Initialized. I am Echo. How may I assist?", sender: 'bot' }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'en-US';
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
        setStatus('Listening...');
        SoundManager.playHum();
      };

      recognition.onend = () => {
        setIsListening(false);
        setStatus('Processing...');
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setMessages(prev => [...prev, { text: transcript, sender: 'user' }]);
        SoundManager.playClick();

        // Simulate processing delay for bot response
        setTimeout(() => {
          // Simple keyword matching for demo purposes
          let botResponse = "Accessing database... No relevant data found.";
          if (transcript.toLowerCase().includes('hello') || transcript.toLowerCase().includes('hi')) {
            botResponse = "Greetings. Systems functional. Ready for input.";
          } else if (transcript.toLowerCase().includes('design')) {
            botResponse = "Analyzing trends... Detected: Neomorphism 2.0, Cyberpunk Aesthetics, and Holographic Interfaces.";
          } else if (transcript.toLowerCase().includes('time')) {
            botResponse = `Current temporal marker: ${new Date().toLocaleTimeString()}.`;
          }

          setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
          SoundManager.playClick();
          setStatus('System Ready');
        }, 1000);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
        setStatus('Error: ' + event.error);
        setTimeout(() => setStatus('System Ready'), 3000);
      };

      window.recognition = recognition;
    } else {
      setStatus('Speech API not supported');
    }
  }, []);

  const startListening = () => {
    SoundManager.playClick();
    if (isListening) return;
    if (window.recognition) {
      window.recognition.start();
    } else {
      alert("Speech Recognition API is not supported in this browser.");
    }
  };

  if (showLanding) {
    return <LandingPage onEnter={() => { SoundManager.playClick(); setShowLanding(false); }} />;
  }

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="echo-container" onMouseMove={handleMouseMove}>
      <header className="echo-header">
        <div className="header-title">ECHO / AI</div>
        <div className="status-indicator">
          <div className={`status-dot ${status === 'Listening...' ? 'active' : ''}`}></div>
          <span className="status-text">{status}</span>
        </div>
      </header>

      <main className="interface-circle">
        <div className={`visualizer ${isListening ? 'active' : ''}`}>
          <div className="visualizer-bar"></div>
        </div>

        <div className="conversation-area">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.sender === 'bot' ? (
                <Typewriter text={msg.text} speed={20} />
              ) : (
                msg.text
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="controls">
        <button
          className={`mic-btn ${isListening ? 'listening' : ''}`}
          onClick={startListening}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        </button>
        <p className="hint">Tap to Interact</p>
      </footer>
    </div>
  );
}

export default App;
