import React from 'react';
import { BookOpen } from 'lucide-react';

const Header = () => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center gap-3 mb-4">
      <BookOpen size={32} className="text-blue-400" />
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Vim C IDE Cheatsheet
      </h1>
    </div>
    <p className="text-gray-400 text-lg">Interactive reference for your C development environment</p>
    <p className="text-gray-500 text-sm mt-2">Use ← → arrow keys to navigate between pages</p>
  </div>
);

export default Header;