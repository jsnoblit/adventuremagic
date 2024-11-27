import React from 'react';
import { Compass } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Compass className="h-8 w-8 text-white" />
            <h1 className="ml-4 text-2xl font-bold text-white">Adventure Game</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-gray-200">New Game</a>
            <a href="#" className="text-white hover:text-gray-200">Save</a>
            <a href="#" className="text-white hover:text-gray-200">Load</a>
          </nav>
        </div>
      </div>
    </header>
  );
}