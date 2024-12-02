import { intents } from './intentService';
import { getResponse, getNoAnswerResponse, getDefaultResponse } from './responseService';

const findIntent = (question: string): string | null => {
  // Convert question to lowercase and remove special characters for better matching
  const normalizedQuestion = question.toLowerCase().trim();
  
  // Check each intent for matches
  for (const intent of intents) {
    // Check if question contains any patterns from the intent
    const hasPattern = intent.patterns.some(pattern => 
      normalizedQuestion.includes(pattern)
    );
    
    // Check if question contains any keywords from the intent
    const hasKeyword = intent.keywords.some(keyword => 
      normalizedQuestion.includes(keyword)
    );
    
    // If both pattern and keyword match, return this intent
    if (hasPattern && hasKeyword) {
      return intent.id;
    }
  }
  
  return null;
};

export const getChatResponse = (question: string): string => {
  if (!question.trim()) {
    return getDefaultResponse();
  }

  const intentId = findIntent(question);
  
  if (intentId) {
    return getResponse(intentId);
  }
  
  return getNoAnswerResponse();
};