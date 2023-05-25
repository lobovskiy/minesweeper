import { openCell, toggleFlag } from './cellController';
import { refreshMinefieldCells } from '../view/minefiled/minefiled';

function updateMinefield() {
  const minefieldCallbacks = {
    openCell: (id) => {
      openCell(id);
      updateMinefield();
    },
    toggleFlag: (id) => {
      toggleFlag(id);
      updateMinefield();
    },
  };

  refreshMinefieldCells(minefieldCallbacks);
}

export default updateMinefield;
