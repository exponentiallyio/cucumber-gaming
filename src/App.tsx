import React, { useState } from 'react';
import { Search } from 'lucide-react';
import GameGrid from './components/GameGrid';
import Header from './components/Header';
import { Game } from './types';

const GAMES: Game[] = [
  {
    id: 1,
    title: 'Battle Ships',
    image:
      'https://res.cloudinary.com/dlqxmxrkn/image/upload/v1729334104/Screenshot_2024-10-19_at_11.29.18_g2di6s.png',
    url: 'https://www.calculators.org/games/battleship/',
  },
  {
    id: 2,
    title: 'Battle Royale',
    image: 'https://source.unsplash.com/random/300x200?battle',
    url: 'https://example.com/battle-royale',
  },
  {
    id: 3,
    title: 'Puzzle Master',
    image: 'https://source.unsplash.com/random/300x200?puzzle',
    url: 'https://example.com/puzzle-master',
  },
  {
    id: 4,
    title: 'Racing Fever',
    image: 'https://source.unsplash.com/random/300x200?racing',
    url: 'https://example.com/racing-fever',
  },
  {
    id: 5,
    title: 'Strategy Empire',
    image: 'https://source.unsplash.com/random/300x200?strategy',
    url: 'https://example.com/strategy-empire',
  },
  {
    id: 6,
    title: 'Zombie Survival',
    image: 'https://source.unsplash.com/random/300x200?zombie',
    url: 'https://example.com/zombie-survival',
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = GAMES.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search games..."
            className="w-full py-2 px-4 pr-10 rounded-full text-gray-800 bg-white shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className="absolute right-3 top-2.5 text-gray-500"
            size={20}
          />
        </div>
      </div>
      <main className="container mx-auto px-4 py-8">
        <GameGrid games={filteredGames} />
      </main>
    </div>
  );
}

export default App;
