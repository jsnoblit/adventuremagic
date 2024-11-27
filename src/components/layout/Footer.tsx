import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Adventure Game. All rights reserved.
        </p>
      </div>
    </footer>
  );
}