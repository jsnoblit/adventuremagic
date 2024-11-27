import { useState, useCallback } from 'react';
import { GameState, Character } from '../types/game';
import { locations } from '../data/locations';

const initialPlayer: Character = {
  name: 'Hero',
  health: 100,
  maxHealth: 100,
  level: 1,
  experience: 0
};

const initialState: GameState = {
  player: initialPlayer,
  currentLocation: 'forest',
  inventory: [],
  gameLog: ['Welcome to the Adventure!']
};

export function useGame() {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const addToLog = useCallback((message: string) => {
    setGameState(prev => ({
      ...prev,
      gameLog: [...prev.gameLog, message]
    }));
  }, []);

  const move = useCallback((locationId: string) => {
    if (locations[locationId]) {
      setGameState(prev => ({
        ...prev,
        currentLocation: locationId,
        gameLog: [...prev.gameLog, `Moved to ${locations[locationId].name}`]
      }));
    }
  }, []);

  const pickupItem = useCallback((item: string) => {
    setGameState(prev => ({
      ...prev,
      inventory: [...prev.inventory, item],
      gameLog: [...prev.gameLog, `Picked up ${item}`]
    }));
  }, []);

  return {
    gameState,
    actions: {
      move,
      pickupItem,
      addToLog
    }
  };
}