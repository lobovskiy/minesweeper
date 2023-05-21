class Cell {
  constructor() {
    this.isOpen = false;
    this.isFlagged = false;
    this.isMine = false;
    this.label = null;
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
}

export default Cell;
