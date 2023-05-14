const DIFFICULTIES = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  expert: 'expert',
};

const MINEFIELD_SIZE_BY_DIFFICULTY = {
  [DIFFICULTIES.beginner]: {
    width: 8,
    height: 8,
  },
  [DIFFICULTIES.intermediate]: {
    width: 16,
    height: 16,
  },
  [DIFFICULTIES.expert]: {
    width: 30,
    height: 16,
  },
};

export { DIFFICULTIES, MINEFIELD_SIZE_BY_DIFFICULTY };
