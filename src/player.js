class Player {
  constructor(startingCol, startingRow) {
    this.col = startingCol;
    this.row = startingRow;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }
  draw() {
    image(vikingDown, this.col * 100, this.row * 100, this.width, this.height);
  }

  moveUp() {
    this.row -= 1;
    if (this.row < 0) {
      this.row = 0;
    }
  }
  moveDown() {
    this.row += 1;
    if (this.row > 10) {
      this.row = 10;
    }
  }
  moveRight() {
    this.col += 1;
    if (this.col > 10) {
      this.col = 10;
    }
  }
  moveLeft() {
    this.col -= 1;
    if (this.col < 0) {
      this.col = 0;
    }
  }
}

// const player = new Player();
// console.log(player.col, player.row);
