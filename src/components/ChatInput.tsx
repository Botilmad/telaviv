import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="הקלד את שאלתך כאן..."
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-light text-right"
          dir="rtl"
        />
        <button
          type="submit"
          className="bg-primary-dark hover:bg-primary-light text-white p-3 rounded-lg transition-colors"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};