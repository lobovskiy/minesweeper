const SCREEN_SIZES = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
};

const SCREEN_SIZES_MIN_WIDTH = {
  [SCREEN_SIZES.mobile]: 500,
  [SCREEN_SIZES.tablet]: 768,
  [SCREEN_SIZES.desktop]: 992,
};

const DIFFICULTY = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  expert: 'expert',
};

const MINEFIELD_SIZE = {
  [DIFFICULTY.beginner]: {
    width: 9,
    height: 9,
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

export { SCREEN_SIZES, SCREEN_SIZES_MIN_WIDTH, DIFFICULTY, MINEFIELD_SIZE };
