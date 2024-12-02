export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface PresetQuestion {
  id: string;
  text: string;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}