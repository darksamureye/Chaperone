import React from 'react';

export function CartoonElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Bottom right stars */}
      <img 
        src="https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.1"
        alt=""
        className="absolute -bottom-20 -right-20 w-96 h-96 object-contain opacity-40 animate-float-delayed"
      />
      
      {/* Center decorative element */}
      <img 
        src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.1"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] object-contain opacity-30 animate-pulse-slow"
      />
    </div>
  );
}