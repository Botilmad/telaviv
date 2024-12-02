import React, { useState } from 'react';
import { ChatHistory } from './components/ChatHistory';
import { ChatInput } from './components/ChatInput';
import { PresetQuestions } from './components/PresetQuestions';
import { Message } from './types';
import { Building2 } from 'lucide-react';
import { getChatResponse } from './services/chatService';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'שלום! אני כאן כדי לעזור לך בנושא ועדות זכאות ואפיון של עיריית תל אביב-יפו. במה אוכל לסייע?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Get response from chatService
    const response = getChatResponse(content);
    
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="max-w-3xl mx-auto p-4 h-screen flex flex-col">
        <header className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 text-primary-dark">
            <Building2 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">צ'אטבוט עיריית תל אביב-יפו</h1>
          </div>
          <p className="text-gray-600">ועדות זכאות ואפיון</p>
        </header>

        <div className="flex-1 bg-white rounded-lg shadow-lg flex flex-col">
          <ChatHistory messages={messages} />
          <div className="p-4 border-t">
            <PresetQuestions onSelect={handleSendMessage} />
            <ChatInput onSend={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;