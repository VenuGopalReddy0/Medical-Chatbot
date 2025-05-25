/* msg_inpt.js*/
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../contents/msg_inpt.css';

function MessageInput({ input, setInput, handleSubmit, isBotResponding }) {
  const handleKeyDown = (e) => {
    if (e.shiftKey && e.key === 'Enter') {
      return;
    }
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <textarea
        className="message-textarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your prompt"
        disabled={isBotResponding}
      />
      <button type="submit" disabled={isBotResponding}>
        <i className="bi bi-arrow-right-square-fill icon-button"></i>
      </button>
    </form>
  );
}

export default MessageInput;
