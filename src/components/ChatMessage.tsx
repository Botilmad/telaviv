import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`max-w-[80%] p-4 rounded-lg ${
          isBot
            ? 'bg-primary-dark text-white rounded-tr-lg'
            : 'bg-white text-text rounded-tl-lg'
        } shadow-md`}
      >
        <p className="text-right">{message.content}</p>
      </div>
    </div>
  );
};