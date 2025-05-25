/* msg_list.js*/
import React, { useRef, useEffect } from 'react';
import '../contents/msg_list.css';

function MessageList({ messages }) {
  const messageEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='message-list'>
      {messages.map((message, index) => (
        <div key={index} className={`message-box ${message.isBot ? 'bot-message' : 'user-message'}`}>
          <div className="message">
            {message.text}
          </div>
        </div>
      ))}
      <div ref={messageEndRef} /> {/* This div helps in auto-scrolling */}
    </div>
  );
}

export default MessageList;
