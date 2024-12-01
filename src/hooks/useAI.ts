import { useState } from 'react';
import { generateStoryContent } from '../services/ai/storyGenerator';
import { AIResponse, AIError } from '../services/ai/types';
import { toast } from 'react-hot-toast';

export function useAI() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<AIError | null>(null);

  const generateStory = async (prompt: string): Promise<AIResponse | null> => {
    setIsGenerating(true);
    setError(null);

    try {
      const response = await generateStoryContent(prompt);
      return response;
    } catch (err) {
      const error = err as AIError;
      setError(error);
      toast.error(error.message);
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generateStory,
    isGenerating,
    error
  };
}