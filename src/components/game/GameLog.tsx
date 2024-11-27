import React from 'react';
import { Card } from '../ui/Card';

interface GameLogProps {
  messages: string[];
}

export function GameLog({ messages }: GameLogProps) {
  return (
    <Card className="p-4 h-48 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-2">Game Log</h3>
      <div className="space-y-1">
        {messages.map((message, index) => (
          <p key={index} className="text-gray-600">
            {message}
          </p>
        ))}
      </div>
    </Card>
  );
}