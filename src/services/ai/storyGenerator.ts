import { httpsCallable, getFunctions } from 'firebase/functions';
import { AIResponse, AIError } from './types';

const generateStoryContent = async (prompt: string): Promise<AIResponse> => {
  try {
    const functions = getFunctions();
    const generateStory = httpsCallable(functions, 'generateStory');
    
    const result = await generateStory({ prompt });
    return result.data as AIResponse;
  } catch (error) {
    const aiError: AIError = {
      code: 'ai-generation-failed',
      message: 'Failed to generate story content',
      details: error
    };
    throw aiError;
  }
};