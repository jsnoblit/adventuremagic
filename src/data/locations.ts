import { Location } from '../types/game';

export const locations: Record<string, Location> = {
  forest: {
    id: 'forest',
    name: 'Mystic Forest',
    description: 'A dense forest with towering trees and mysterious sounds.',
    connections: ['cave', 'village'],
    items: ['healing_potion', 'wooden_sword']
  },
  cave: {
    id: 'cave',
    name: 'Dark Cave',
    description: 'A dark cave with echoing drips and glowing crystals.',
    connections: ['forest'],
    items: ['ancient_scroll']
  },
  village: {
    id: 'village',
    name: 'Peaceful Village',
    description: 'A small village with friendly inhabitants and thatched-roof houses.',
    connections: ['forest'],
    items: ['bread', 'torch']
  }
};