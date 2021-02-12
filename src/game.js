class Game {
  constructor() {
    this.player = new Player(0,0, picturePlayerDown);
    this.treasure = new Treasure(500, 500);
    this.score = 0;
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    clear();
    for (let xGrid = 0; xGrid <= WIDTH; xGrid += WIDTH / 10) {
      for (let yGrid = 0; yGrid <= HEIGHT; yGrid += HEIGHT / 10) {
        line(xGrid, 0, xGrid, HEIGHT);
        line(0, yGrid, WIDTH, yGrid);
      }
    }
  }

  draw() {
    this.player.draw();
    this.treasure.drawTreasure();
    if (this.collisionCheck(this.player, this.treasure)) {
      this.treasure.setRandomPosition();
      this.score++;
      score.innerText = this.score;
    }
  }

  collisionCheck(player, treasure) {
    const playerTopArea = player.col;
    const playerLeftArea = player.row;
    const playerRightArea = player.row + SQUARE_SIDE;
    const playerBottomArea = player.col + SQUARE_SIDE;

    const obsTopArea = treasure.col;
    const obsLeftArea = treasure.row;
    const obsRightArea = treasure.row + SQUARE_SIDE;
    const obsBottomArea = treasure.col + SQUARE_SIDE;
    const isTouchingOnLeft = obsRightArea > playerLeftArea;
    const isTouchingOnBottom = obsTopArea < playerBottomArea;
    const isTouchingOnRight = obsLeftArea < playerRightArea;
    const isTouchingOnTop = obsBottomArea > playerTopArea;

    return (
      isTouchingOnRight &&
      isTouchingOnTop &&
      isTouchingOnBottom &&
      isTouchingOnLeft
    );
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
