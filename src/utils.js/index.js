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

function formatDateTime(value) {
  const date = new Date(value);

  const addZero = (num) => {
    if (num < 10) {
      return `0${num}`;
    }

    return num;
  };

  const DD = addZero(date.getDate());
  const MM = addZero(date.getMonth() + 1);
  const YYYY = date.getFullYear();
  const hh = addZero(date.getHours());
  const mm = addZero(date.getMinutes());

  return `${DD}.${MM}.${YYYY} ${hh}:${mm}`;
}

function formatTime(milliseconds = 0) {
  const ISOStringMinutesStartIndex = 14;
  const ISOStringSecondsEndIndex = 18;

  const mmss = new Date(milliseconds)
    .toISOString()
    .slice(ISOStringMinutesStartIndex, ISOStringSecondsEndIndex + 1);

  return mmss;
}

export { shuffleArray, getAdjacentCellsIndexes, formatDateTime, formatTime };
