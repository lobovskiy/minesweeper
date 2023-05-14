const DIFFICULTY = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  expert: 'expert',
};

const MINEFIELD_SIZE_BY_DIFFICULTY = {
  [DIFFICULTY.beginner]: {
    width: 8,
    height: 8,
  },
  [DIFFICULTY.intermediate]: {
    width: 16,
    height: 16,
  },
  [DIFFICULTY.expert]: {
    width: 30,
    height: 16,
  },
};

export { DIFFICULTY, MINEFIELD_SIZE_BY_DIFFICULTY };
