const DIFFICULTIES = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  expert: 'expert',
};

const NUMBER_OF_MINES = {
  min: 10,
  max: 99,
  [DIFFICULTIES.beginner]: 10,
  [DIFFICULTIES.intermediate]: 40,
  [DIFFICULTIES.expert]: 99,
};

const MINEFIELD_SETTINGS_BY_DIFFICULTY = {
  [DIFFICULTIES.beginner]: {
    width: 10,
    height: 10,
  },
  [DIFFICULTIES.intermediate]: {
    width: 15,
    height: 15,
  },
  [DIFFICULTIES.expert]: {
    width: 25,
    height: 25,
  },
};

export { DIFFICULTIES, NUMBER_OF_MINES, MINEFIELD_SETTINGS_BY_DIFFICULTY };
