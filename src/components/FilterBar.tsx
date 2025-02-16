import { ChallengeFilter } from '@/types/challenge';

interface FilterBarProps {
  currentFilter: ChallengeFilter;
  onFilterChange: (filter: ChallengeFilter) => void;
}

const FilterBar = ({ currentFilter, onFilterChange }: FilterBarProps) => {
  const filters: { value: ChallengeFilter; label: string }[] = [
    { value: 'all', label: '전체 챌린지' },
    { value: 'completed', label: '완료' },
    { value: 'not-completed', label: '미완료' },
  ];

  return (
    <div className="mb-8 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">UI 챌린지</h2>
      <div className="flex space-x-2">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors
              ${
                currentFilter === value
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            aria-pressed={currentFilter === value}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar; 