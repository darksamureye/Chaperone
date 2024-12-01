import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}