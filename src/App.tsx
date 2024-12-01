import React from 'react';
import { Layout } from './components/layout/Layout';
import { ChildRecorder } from './components/ChildRecorder';
import { ParentDashboard } from './components/ParentDashboard';
import { AuthPage } from './components/auth/AuthPage';
import { useAuth } from './store/authStore';
import { Toaster } from 'react-hot-toast';

function App() {
  const { user, isAuthenticated, isAnonymous } = useAuth();

  if (!isAuthenticated && !isAnonymous) {
    return (
      <>
        <Toaster position="top-center" />
        <AuthPage />
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" />
      <Layout>
        {isAnonymous || user?.role === 'guardian' ? (
          <ChildRecorder />
        ) : (
          <ParentDashboard />
        )}
      </Layout>
    </>
  );
}

export default App;