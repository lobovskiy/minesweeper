const SCREEN_SIZES = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
};

const SCREEN_SIZES_MIN_WIDTHS = {
  [SCREEN_SIZES.mobile]: 500,
  [SCREEN_SIZES.tablet]: 768,
  [SCREEN_SIZES.desktop]: 992,
};

const SCREEN_SIZES_ASCENDING = Object.keys(SCREEN_SIZES_MIN_WIDTHS).sort(
  (a, b) => SCREEN_SIZES_MIN_WIDTHS[a] - SCREEN_SIZES_MIN_WIDTHS[b],
);

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

export {
  SCREEN_SIZES,
  SCREEN_SIZES_MIN_WIDTHS,
  SCREEN_SIZES_ASCENDING,
  DIFFICULTY,
  MINEFIELD_SIZE,
};
