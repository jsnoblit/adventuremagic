import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { locations } from '../../data/locations';

interface LocationProps {
  locationId: string;
  onMove: (locationId: string) => void;
  onPickup: (item: string) => void;
}

export function Location({ locationId, onMove, onPickup }: LocationProps) {
  const location = locations[locationId];

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{location.name}</h2>
      <p className="text-gray-600 mb-4">{location.description}</p>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Available Paths:</h3>
        <div className="flex flex-wrap gap-2">
          {location.connections.map(path => (
            <Button
              key={path}
              variant="primary"
              onClick={() => onMove(path)}
            >
              Go to {locations[path].name}
            </Button>
          ))}
        </div>
      </div>

      {location.items && location.items.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Items:</h3>
          <div className="flex flex-wrap gap-2">
            {location.items.map(item => (
              <Button
                key={item}
                variant="outline"
                onClick={() => onPickup(item)}
              >
                Pick up {item.replace('_', ' ')}
              </Button>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}