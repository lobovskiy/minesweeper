const DIFFICULTIES = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  expert: 'expert',
};

const MINEFIELD_SETTINGS_BY_DIFFICULTY = {
  [DIFFICULTIES.beginner]: {
    width: 8,
    height: 8,
    minesAmount: 10,
  },
  [DIFFICULTIES.intermediate]: {
    width: 16,
    height: 16,
    minesAmount: 40,
  },
  [DIFFICULTIES.expert]: {
    width: 30,
    height: 16,
    minesAmount: 99,
  },
};

export { DIFFICULTIES, MINEFIELD_SETTINGS_BY_DIFFICULTY };
