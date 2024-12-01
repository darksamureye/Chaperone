import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PinDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (pin: string) => void;
  title: string;
}

export function PinDialog({ isOpen, onClose, onSubmit, title }: PinDialogProps) {
  const [pin, setPin] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(pin);
    setPin('');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl mb-4
                     focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                     transition-all duration-200"
            maxLength={4}
            pattern="[0-9]*"
            inputMode="numeric"
            autoFocus
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500
                     text-white py-3 rounded-xl font-medium
                     hover:from-indigo-600 hover:to-purple-600
                     transform transition-all duration-200
                     hover:shadow-lg active:scale-98"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}