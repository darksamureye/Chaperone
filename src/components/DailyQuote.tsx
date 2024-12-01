import React from 'react';
import { Quote } from 'lucide-react';
import { quotes } from '../data/quotes';

export function DailyQuote() {
  // Get today's date and use it to select a quote
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const quoteIndex = dayOfYear % quotes.length;
  const quote = quotes[quoteIndex];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
        <div className="flex items-start gap-4">
          <Quote className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-gray-700 font-medium italic">"{quote.text}"</p>
            <p className="text-gray-500 text-sm mt-2">— {quote.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}