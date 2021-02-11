class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(7, 9);
  }

  draw() {
    clear();
    this.drawGrid();
    this.player.draw();
    this.treasure.draw();
  }

  drawGrid() {
    line(0, 0, 1000, 0);
    line(0, 100, 1000, 100);
    line(0, 200, 1000, 200);
    line(0, 300, 1000, 300);
    line(0, 400, 1000, 400);
    line(0, 500, 1000, 500);
    line(0, 600, 1000, 600);
    line(0, 700, 1000, 700);
    line(0, 800, 1000, 800);
    line(0, 900, 1000, 900);
    line(0, 1000, 1000, 1000);

    line(0, 0, 0, 1000);
    line(100, 0, 100, 1000);
    line(200, 0, 200, 1000);
    line(300, 0, 300, 1000);
    line(400, 0, 400, 1000);
    line(500, 0, 500, 1000);
    line(600, 0, 600, 1000);
    line(700, 0, 700, 1000);
    line(800, 0, 800, 1000);
    line(900, 0, 900, 1000);
    line(1000, 0, 1000, 1000);

    strokeWeight(3);
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
