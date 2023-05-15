import { MINEFIELD_SETTINGS_BY_DIFFICULTY } from '../constants';

function shuffleArray(arr) {
  return [...arr].sort(() => 0.5 - Math.random());
}

function getAdjacentCellsIndexes(index, difficulty) {
  const currentRow =
    Math.floor(index / MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width) + 1;
  const currentColumn =
    index -
    (currentRow - 1) * MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width +
    1;
  const adjacentIndexes = [];

  if (currentRow > 1) {
    adjacentIndexes.push(
      index - MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width,
    );

    if (currentColumn > 1) {
      adjacentIndexes.push(
        index - MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width - 1,
      );
    }

    if (currentColumn < MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width) {
      adjacentIndexes.push(
        index - MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width + 1,
      );
    }
  }

  if (currentRow < MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].height) {
    adjacentIndexes.push(
      index + MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width,
    );

    if (currentColumn > 1) {
      adjacentIndexes.push(
        index + MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width - 1,
      );
    }

    if (currentColumn < MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width) {
      adjacentIndexes.push(
        index + MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width + 1,
      );
    }
  }

  if (currentColumn > 1) {
    adjacentIndexes.push(index - 1);
  }

  if (currentColumn < MINEFIELD_SETTINGS_BY_DIFFICULTY[difficulty].width) {
    adjacentIndexes.push(index + 1);
  }

  return adjacentIndexes.sort((a, b) => a - b);
}

function formatDateTimeOnlyString(string) {
  const date = new Date(string);

  const addZero = (num) => {
    if (num < 10) {
      return `0${num}`;
    }

    return num;
  };

  return `${addZero(date.getDate())}.${addZero(
    date.getMonth() + 1,
  )}.${date.getFullYear()} ${addZero(date.getHours())}:${addZero(
    date.getMinutes(),
  )}`;
}

export { shuffleArray, getAdjacentCellsIndexes, formatDateTimeOnlyString };
