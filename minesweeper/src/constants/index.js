const DIFFICULTIES = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  expert: 'expert',
};

const MINEFIELD_SETTINGS_BY_DIFFICULTY = {
  [DIFFICULTIES.beginner]: {
    width: 10,
    height: 10,
    minesAmount: 10,
  },
  [DIFFICULTIES.intermediate]: {
    width: 15,
    height: 15,
    minesAmount: 40,
  },
  [DIFFICULTIES.expert]: {
    width: 25,
    height: 25,
    minesAmount: 99,
  },
};

export { DIFFICULTIES, MINEFIELD_SETTINGS_BY_DIFFICULTY };
