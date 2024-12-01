import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initializeAuth } from './services/firebase/auth';
import { initializeAnalytics } from './services/firebase/config';
import { dataConnect } from './services/firebase/dataConnect';

// Initialize Firebase services
Promise.all([
  initializeAnalytics(),
  initializeAuth(),
  dataConnect.initializeConnection()
]).catch(console.error);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);