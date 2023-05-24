const DIFFICULTIES = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  expert: 'expert',
};

const NUMBER_OF_MINES = {
  min: 10,
  max: 99,
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

export { DIFFICULTIES, NUMBER_OF_MINES, MINEFIELD_SETTINGS_BY_DIFFICULTY };
