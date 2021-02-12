class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.WIDTH = width / 10;
    this.HEIGHT = height / 10;
  }

  draw() {
    image(
      playerPicture,
      this.col * 100,
      this.row * 100,
      this.width,
      this.height
    );
  }

  moveUp() {
    this.row -= 1;
  }

  moveDown() {
    this.row += 1;
  }

  moveLeft() {
    this.col -= 1;
  }

  moveRight() {
    this.col += 1;
  }
}
