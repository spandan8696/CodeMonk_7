
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ChatBox.css';  

const MessageBubble = ({ message, isUser }) => {
  return (
    <motion.div
      className={`message-bubble ${isUser ? 'user' : 'chatbot'}`}
      initial={{ opacity: 0, x: isUser ? '100%' : '-100%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: isUser ? '100%' : '-100%' }}
    >
      {message}
    </motion.div>
  );
};


const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [chatboxHeight, setChatboxHeight] = useState(300); 

  useEffect(() => {
    // Calculate the height based on the number and length of messages
    const newHeight = Math.min(300 + messages.length * 30, 600);
    setChatboxHeight(newHeight);
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue('');
      
      setTimeout(() => {
        setMessages([...messages, { text: 'Chatbot response...', isUser: false }]);
      }, 500);
    }
  };

  return (
    <div className="chatgpt-container" id='ChatBox' style={{ height: `${chatboxHeight}px` }}>
      <div className="chatgpt-header">
        <h1>ChatBox</h1>
      </div>
      <div className="chatgpt-chat-area">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <MessageBubble key={index} message={msg.text} isUser={msg.isUser} />
          ))}
        </AnimatePresence>
      </div>
      <div className="chatgpt-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
