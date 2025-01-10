// File: src/components/ui/Onboarding/GenreStep.tsx

import { Genre } from '@/types';

interface Props {
  selectedGenre: Genre;
  onSelect: (genre: Genre) => void;
}

const genres: Genre[] = [
  'Aventura', 'Fantasía', 'Ciencia Ficción', 'Misterio',
  'Romance', 'Terror', 'Histórico', 'Humor',
  'Superhéroes', 'Drama'
];

export default function GenreStep({ selectedGenre, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-xl mb-4">Select the Genre</h2>
      <div className="grid grid-cols-2 gap-2">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`p-2 border rounded ${selectedGenre === genre ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => onSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}