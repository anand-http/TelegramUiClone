import React from 'react';

const ChatMessage = ({ message, sender }) => {
  const isSender = sender === 1;

  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs rounded-lg p-3 ${isSender ? 'bg-lime-100 text-black' : 'bg-white'}`}>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
