class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(2, 3);
    this.score = 0;
  }

  draw() {
    clear();
    this.drawGrid();
    this.player.draw();
    this.treasure.draw();
    if (this.gettingPoints(this.player, this.treasure)) {
      noLoop();
      this.score++;
      score.innerText = this.score;
      this.treasure.setRandomPosition();
      loop();
    }
  }

  drawGrid() {
    let x;
    for (x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(0, x, WIDTH, x);
      strokeWeight(2);
    }
    let y;
    for (y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
      line(y, 0, y, HEIGHT);
      strokeWeight(2);
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

  gettingPoints(player, treasure) {
    const isTouchingOnLeft = treasure.x + treasure.width > player.x;
    const isTouchingOnBottom = treasure.y < player.y + player.height;
    const isTouchingOnRight = treasure.x < player.x + player.width;
    const isTouchingOnTop = treasure.y + treasure.height > player.y;
    return (
      isTouchingOnLeft &&
      isTouchingOnBottom &&
      isTouchingOnRight &&
      isTouchingOnTop
    );
  }
}
