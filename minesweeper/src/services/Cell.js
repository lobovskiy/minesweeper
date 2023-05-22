class Cell {
  constructor(props) {
    const initialCell = props || {};
    const {
      isOpen = false,
      isFlagged = false,
      isMine = false,
      isExploded = false,
      label = false,
    } = initialCell;

    this.isOpen = isOpen;
    this.isFlagged = isFlagged;
    this.isMine = isMine;
    this.isExploded = isExploded;
    this.label = label;
  }

  open() {
    this.isOpen = true;
  }

  setLabel(label) {
    this.label = label;
  }

  setMine() {
    this.isMine = true;
  }

  toggleFlag() {
    this.isFlagged = !this.isFlagged;
  }

  setExploded() {
    this.isExploded = true;
  }
}

export default Cell;
