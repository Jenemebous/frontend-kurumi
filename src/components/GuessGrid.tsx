import React from 'react';
import { LetterStatus } from '../utils/wordle';

interface Props {
  guesses: string[];
  statuses: LetterStatus[][];
}

const GuessGrid: React.FC<Props> = ({ guesses, statuses }) => {
  const rows = Array.from({ length: 6 }).map((_, i) => {
    const guess = guesses[i] || '';
    const status = statuses[i] || [];
    return (
      <div key={i} className="flex justify-center mb-2">
        {Array.from({ length: 5 }).map((_, j) => {
          const char = guess[j] || '';
          const cls = status[j]
            ? status[j] === 'correct'
              ? 'bg-green-500 text-white'
              : status[j] === 'present'
              ? 'bg-yellow-500 text-white'
              : 'bg-gray-500 text-white'
            : 'bg-white border border-gray-400 text-black';
          return (
            <div
              key={j}
              className={`${cls} w-12 h-12 flex items-center justify-center mx-1 uppercase font-bold`}
            >
              {char}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className="bg-black bg-opacity-60 p-4 rounded-xl">
      {rows}
    </div>
  );
};

export default GuessGrid;
