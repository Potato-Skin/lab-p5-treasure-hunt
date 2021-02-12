class Treasure {
  constructor(randomCol, randomRow) {
    this.col = randomCol;
    this.row = randomRow;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }

  draw() {
    image(treasure, this.col * 100, this.row * 100, this.width, this.height);
  }
}
