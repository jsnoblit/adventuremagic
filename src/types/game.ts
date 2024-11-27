export interface Character {
  name: string;
  health: number;
  maxHealth: number;
  level: number;
  experience: number;
}

export interface GameState {
  player: Character;
  currentLocation: string;
  inventory: string[];
  gameLog: string[];
}

export interface Location {
  id: string;
  name: string;
  description: string;
  connections: string[];
  items?: string[];
}