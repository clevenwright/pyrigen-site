"use client";

import { useId } from "react";

export function PyrigenMark({ className = "" }: { className?: string }) {
  const id = useId();
  const lg = `pyrL-${id}`;
  const rg = `pyrR-${id}`;
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Pyrigen"
    >
      <defs>
        <linearGradient id={lg} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2e5081" />
          <stop offset="1" stopColor="#14294a" />
        </linearGradient>
        <linearGradient id={rg} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d3a5f" />
          <stop offset="1" stopColor="#0b1c33" />
        </linearGradient>
      </defs>
      <polygon points="50,5 74.5,60 50,93" fill={`url(#${rg})`} />
      <polygon points="50,5 50,93 25.5,60" fill={`url(#${lg})`} />
      <line x1="50" y1="5" x2="50" y2="93" stroke="#c6a44a" strokeWidth="1.6" />
    </svg>
  );
}

export function PyrigenLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <PyrigenMark className="h-8 w-auto" />
      <span className="text-xl font-semibold tracking-tight">Pyrigen</span>
    </div>
  );
}