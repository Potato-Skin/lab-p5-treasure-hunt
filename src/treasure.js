class Treasure {
  constructor(col, row) {
    this.x = col * 100;
    this.y = row * 100;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }

  draw() {
    image(treasureImage, this.x, this.y, this.width, this.height);
  }

  setRandomPosition() {
    this.x = Math.floor(Math.random() * (WIDTH - this.width));
    this.y = Math.floor(Math.random() * (HEIGHT - this.height));
  }
}
