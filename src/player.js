class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = width / 10;
    this.height = height / 10;
  }

  draw() {
    image(playerPicture, this.col, this.row, this.width, this.height);
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
