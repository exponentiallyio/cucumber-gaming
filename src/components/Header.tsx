import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative h-48 overflow-hidden">
      <div className="absolute inset-0">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <linearGradient id="background" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00BFFF" />
              <stop offset="50%" stopColor="#00BFFF" />
              <stop offset="100%" stopColor="#FF69B4" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#background)" />
        </svg>
      </div>
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M50 0 L40 20 L55 40 L35 60 L50 80 L40 100" 
                fill="none" 
                stroke="yellow" 
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-lightning" />
        </svg>
      </div>
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900 animate-glow">
          Cucumber Gaming
        </h1>
      </div>
    </header>
  );
};

export default Header;