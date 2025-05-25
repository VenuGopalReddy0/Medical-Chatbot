import React, { useState } from 'react';
import MessageList from './users/contents/msg_list';
import MessageInput from './users/contents/msg_inpt';
import Head from './users/contents/head_position';
import './App.css';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [showMessageList, setShowMessageList] = useState(false);
  const [input, setInput] = useState('');
  const [isBotResponding, setIsBotResponding] = useState(false);

  const addMessage = (text, isBot = false) => {
    const newMessage = { text, timestamp: new Date().toLocaleTimeString(), isBot };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setShowMessageList(true); // Show message list after entering a message
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '' || isBotResponding) return;

    // Add user message
    addMessage(input, false);
    setIsBotResponding(true);

    try {
      // Send the message to the Flask backend with key 'question'
      const response = await axios.post('http://localhost:5000/query', { question: input });
      // Add bot response
      addMessage(response.data.response, true);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      // Add error message
      addMessage('Error fetching chatbot response', true);
    }

    setInput('');
    setIsBotResponding(false);
  };

  const clearChat = () => {
    setMessages([]);
    setShowMessageList(false);
  };

  return (
    <>
      <Head onClearChat={clearChat} />
      <div className="app">
        <div className="main-content">
          {showMessageList && <MessageList messages={messages} />}
          <MessageInput
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isBotResponding={isBotResponding}
          />
        </div>
      </div>
    </>
  );
}

export default App;


