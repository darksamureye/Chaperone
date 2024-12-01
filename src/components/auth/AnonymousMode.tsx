import React from 'react';
import { EyeOff } from 'lucide-react';
import { useAuth } from '../../store/authStore';
import { toast } from 'react-hot-toast';

export function AnonymousMode() {
  const { setAnonymous } = useAuth();

  const handleAnonymousAccess = () => {
    setAnonymous(true);
    toast.success('Entered anonymous mode');
  };

  return (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <button
        onClick={handleAnonymousAccess}
        className="w-full flex justify-center items-center gap-2 py-2 px-4
                 bg-gray-600 hover:bg-gray-700 text-white rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                 transition-colors"
      >
        <EyeOff className="h-5 w-5" />
        Continue Anonymously
      </button>
      <p className="mt-2 text-xs text-center text-gray-500">
        Access basic features without an account. Some features may be limited.
      </p>
    </div>
  );
}