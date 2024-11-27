import React from 'react';
import { Card } from '../ui/Card';
import { Character } from '../../types/game';

interface PlayerStatusProps {
  player: Character;
  inventory: string[];
}

export function PlayerStatus({ player, inventory }: PlayerStatusProps) {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-2">Player Status</h3>
      <div className="space-y-2">
        <p className="text-gray-600">Name: {player.name}</p>
        <p className="text-gray-600">Health: {player.health}/{player.maxHealth}</p>
        <p className="text-gray-600">Level: {player.level}</p>
        <p className="text-gray-600">XP: {player.experience}</p>
        
        <div className="mt-4">
          <h4 className="font-medium mb-1">Inventory:</h4>
          {inventory.length === 0 ? (
            <p className="text-gray-500">Empty</p>
          ) : (
            <ul className="list-disc list-inside">
              {inventory.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item.replace('_', ' ')}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
}