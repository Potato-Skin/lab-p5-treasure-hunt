class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(5, 8);
  }
  drawGrid() {
    for (let i = 0; i <= 10; i++) {
      line(0, SQUARE_SIDE * i, WIDTH, SQUARE_SIDE * i);
      line(SQUARE_SIDE * i, 0, SQUARE_SIDE * i, HEIGHT);
    }
  }
  keyPressed() {
    if (keyCode === 38) {
      this.player.moveUp();
    }
    if (keyCode === 37) {
      this.player.moveLeft();
    }
    if (keyCode === 39) {
      this.player.moveRight();
    }
    if (keyCode === 40) {
      this.player.moveDown();
    }
  }
}
