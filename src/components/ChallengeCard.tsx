import { Challenge } from '@/types/challenge';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

interface ChallengeCardProps {
  challenge: Challenge;
}

const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
  switch (difficulty) {
    case 'easy':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    case 'hard':
      return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
  }
};

const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const [imageError, setImageError] = useState(false);
  const difficultyColor = getDifficultyColor(challenge.difficulty);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Link
      href={challenge.path}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
      tabIndex={0}
      aria-label={`${challenge.title} challenge`}
    >
      <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        {!imageError ? (
          <Image
            src={challenge.image}
            alt={challenge.title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
          />
        ) : (
          <PlaceholderImage 
            title={challenge.title}
            initialSize="lg"
            className="group-hover:bg-gradient-to-br-accent"
          />
        )}
        <div className="absolute right-2 top-2">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${difficultyColor}`}>
            {challenge.difficulty}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{challenge.title}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">Day {challenge.day}</span>
        </div>
        <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-300">{challenge.description}</p>
        <div className="flex items-center justify-between">
          {challenge.isCompleted ? (
            <span className="flex items-center text-sm text-green-600 dark:text-green-400">
              <svg
                className="mr-1.5 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              완료
            </span>
          ) : (
            <span className="text-sm text-gray-500 dark:text-gray-400">미완료</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ChallengeCard; 