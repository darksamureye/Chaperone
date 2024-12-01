import React from 'react';
import { Circle, Sun } from 'lucide-react';

interface HaloIconProps {
  className?: string;
}

export function HaloIcon({ className = "h-16 w-16" }: HaloIconProps) {
  return (
    <div className={`relative ${className}`}>
      <Sun className="absolute inset-0 w-full h-full text-white opacity-50 animate-spin-slow" />
      <Circle className="absolute inset-0 w-full h-full text-white animate-pulse-slow" strokeWidth={1.5} />
      <Circle className="absolute inset-0 w-full h-full text-white/80" strokeWidth={2} />
    </div>
  );
}