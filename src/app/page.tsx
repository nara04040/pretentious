'use client';

import { useState } from 'react';
import { Challenge, ChallengeFilter } from '@/types/challenge';
import { challenges } from '@/lib/challenges';
import ChallengeCard from '@/components/ChallengeCard';
import FilterBar from '@/components/FilterBar';

export default function Home() {
  const [filter, setFilter] = useState<ChallengeFilter>('all');

  const filteredChallenges = challenges.filter((challenge) => {
    switch (filter) {
      case 'completed':
        return challenge.isCompleted;
      case 'not-completed':
        return !challenge.isCompleted;
      default:
        return true;
    }
  });

  const handleFilterChange = (newFilter: ChallengeFilter) => {
    setFilter(newFilter);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 transition-colors dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Pretentious</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            프론트엔드 개발 스킬을 보여주는 UI 챌린지 모음
          </p>
        </div>

        <FilterBar currentFilter={filter} onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </main>
  );
}
