import { getVertexAI, getGenerativeModel, GenerativeModel } from '@firebase/vertexai';
import app from './config';

let model: GenerativeModel | null = null;

export const initializeVertexAI = async () => {
  try {
    const vertexAI = getVertexAI(app, 'us-central1');
    model = getGenerativeModel(vertexAI, { model: 'gemini-1.5-flash' });
    return true;
  } catch (error) {
    console.error('Error initializing Vertex AI:', error);
    return false;
  }
};

export const generateStory = async (prompt: string): Promise<string> => {
  if (!model) {
    throw new Error('Vertex AI not initialized');
  }

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error generating story:', error);
    throw error;
  }
};

export const generateResponse = async (input: string): Promise<string> => {
  if (!model) {
    throw new Error('Vertex AI not initialized');
  }

  try {
    const result = await model.generateContent(input);
    return result.response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
};