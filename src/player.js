class Player {
  constructor(col, row) {
    this.x = col * 100;
    this.y = row * 100;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }

  draw() {
    image(playerImage, this.x, this.y, this.width, this.height);
  }

  moveUp() {
    this.y -= this.height;
    if (this.y < 0) {
      this.y = 0;
    }
  }

  moveDown() {
    this.y += this.height;
    if (this.y + this.height > HEIGHT) {
      this.y = HEIGHT - this.height;
    }
  }

  moveLeft() {
    this.x -= this.width;
    if (this.x < 0) {
      this.x = 0;
    }
  }

  moveRight() {
    this.x += this.width;
    if (this.x + this.width > WIDTH) {
      this.x = WIDTH - this.width;
    }
  }
}
