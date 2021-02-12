class Game {
  constructor() {
    this.player = new Player(3, 5);
    this.treasure = new Treasure(10, 0);
    this.treasure.setRandomPosition();
  }
  draw() {
    clear();
    this.player.draw();
    this.treasure.draw();
    if (this.collisionCheck(this.player, this.treasure)) {
      noLoop();
      const button = document.createElement("button");
      button.innerText = "You Won. Let's play again?";
      button.style.background = "grey";
      document.body.appendChild(button);
      button.onclick = () => {
        this.treasure.setRandomPosition();
        button.parentNode.removeChild(button);
        this.score++;
        score.innerText = this.score;
        loop();
      };
    }
  }

  drawGrid() {
    for (let i = 0; i <= 10; i++) {
      line(0, square_side * i, width, square_side * i);
      line(square_side * i, 0, square_side * i, height);
    }
  }
  keyPressed() {
    console.log("KEY PRESSED, keyCode");
    if (keyCode === 38) {
      this.player.moveUp();
    }
    if (keyCode === 37) {
      this.player.moveLeft();
    }
    if (keyCode === 40) {
      this.player.moveDown();
    }
    if (keyCode === 39) {
      this.player.moveRight();
    }
  }
}
