import React from 'react';
import { Game } from '../types';

interface GameGridProps {
  games: Game[];
}

const GameGrid: React.FC<GameGridProps> = ({ games }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <a
          key={game.id}
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
          <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{game.title}</h2>
          </div>
        </a>
      ))}
    </div>
  );
};

export default GameGrid;