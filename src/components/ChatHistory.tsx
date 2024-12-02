import React from 'react';
import { ChatMessage } from './ChatMessage';
import { Message } from '../types';

interface ChatHistoryProps {
  messages: Message[];
}

export const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};