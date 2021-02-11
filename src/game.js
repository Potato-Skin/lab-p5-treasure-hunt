class Game {
  constructor() {
    this.player = new Player(5,5);
    this.treasure = new Treasure(0,0);
    this.treasure.setRandomPosition();
  }
  drawGrid() {
    for (let x = 0; x <= width; x += width / 10) {
      for (let y = 0; y <= height; y += height / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      };
    };
  };
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
  };
};

