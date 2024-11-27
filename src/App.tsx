import React from 'react';
import { Layout } from './components/layout/Layout';
import { Location } from './components/game/Location';
import { GameLog } from './components/game/GameLog';
import { PlayerStatus } from './components/game/PlayerStatus';
import { useGame } from './hooks/useGame';

function App() {
  const { gameState, actions } = useGame();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Adventure Game</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Location
              locationId={gameState.currentLocation}
              onMove={actions.move}
              onPickup={actions.pickupItem}
            />
            <div className="mt-8">
              <GameLog messages={gameState.gameLog} />
            </div>
          </div>
          
          <div>
            <PlayerStatus
              player={gameState.player}
              inventory={gameState.inventory}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;