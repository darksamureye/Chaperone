import { getAnalytics, Analytics } from 'firebase/analytics';
import app from './config';

let analytics: Analytics | null = null;

export const initializeAnalytics = (): void => {
  if (typeof window !== 'undefined' && !analytics) {
    try {
      analytics = getAnalytics(app);
    } catch (error) {
      console.warn('Analytics initialization failed:', error);
    }
  }
};

export const getAnalyticsInstance = (): Analytics | null => analytics;