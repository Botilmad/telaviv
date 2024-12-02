import React from 'react';
import { PRESET_QUESTIONS } from '../constants/theme';

interface PresetQuestionsProps {
  onSelect: (question: string) => void;
}

export const PresetQuestions: React.FC<PresetQuestionsProps> = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-1 gap-2 mb-4">
      {PRESET_QUESTIONS.map((question) => (
        <button
          key={question.id}
          onClick={() => onSelect(question.text)}
          className="bg-white text-right p-3 rounded-lg shadow-sm hover:bg-gray-50 border border-gray-200 transition-colors"
        >
          {question.text}
        </button>
      ))}
    </div>
  );
};