class Game {
  constructor() {
    this.treasure = new Treasure(3,3);
    this.treasure.setRandomPosition();
    this.player1 = new Player(0,0,characterImageDown);
    this.player2 = new Player(900,0,characterImageDown);
    this.score1 = 0;
    this.score2 = 0;
  }

  drawGrid() {
    clear();
    for (let i=0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, HEIGHT);
    };
    for (let i=0; i <= WIDTH; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
    };
    this.treasure.draw();
    this.player1.draw();
    this.player2.draw();
    if (this.collisionCheck(this.player1, this.treasure)) {
      this.treasure.setRandomPosition();
      this.score1++;
      score1.innerText = this.score1;
    }
    if (this.collisionCheck(this.player2, this.treasure)) {
      this.treasure.setRandomPosition();
      this.score2++;
      score2.innerText = this.score2;
    }
  }
  keyPressed() {
    if (keyCode === 38) {
        this.player1.moveUp();
    }
    if (keyCode === 37) {
        this.player1.moveLeft();
    }
    if (keyCode === 39) {
        this.player1.moveRight();
    }
    if (keyCode === 40) {
        this.player1.moveDown();
    }
    if (keyCode === 87) {
      this.player2.moveUp();
    }
    if (keyCode === 65) {
        this.player2.moveLeft();
    }
    if (keyCode === 68) {
        this.player2.moveRight();
    }
    if (keyCode === 83) {
        this.player2.moveDown();
    }
  }
  collisionCheck(player, treasure) {
    const player1TopArea = player.y;
    const player1LeftArea = player.x;
    const player1RightArea = player.x + player.width;
    const player1BottomArea = player.y + player.height;

    const obsTopArea = treasure.y;
    const obsLeftArea = treasure.x;
    const obsRightArea = treasure.x + treasure.width;
    const obsBottomArea = treasure.y + treasure.height;

    const isTouchingOnLeft = obsRightArea > player1LeftArea;
    const isTouchingOnBottom = obsTopArea < player1BottomArea;
    const isTouchingOnRight = obsLeftArea < player1RightArea;
    const isTouchingOnTop = obsBottomArea > player1TopArea;

    return (isTouchingOnBottom && isTouchingOnLeft && isTouchingOnRight && isTouchingOnTop);
  }

}
