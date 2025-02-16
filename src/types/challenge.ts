export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Challenge {
  id: string;
  title: string;
  day: number;
  description: string;
  image: string;
  isCompleted: boolean;
  difficulty: Difficulty;
  path: string;
}

export type ChallengeFilter = 'all' | 'completed' | 'not-completed'; 