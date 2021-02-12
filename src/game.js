class Game {
  constructor() {
    this.player = new Player(0, 0)
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for(let i = 0; i<=10; i++){
      line(0, SQUARE_SIDE * i, WIDTH, SQUARE_SIDE * i);
      line(SQUARE_SIDE * i, 0, SQUARE_SIDE * i, HEIGHT);
    }
  }

  draw(){
    this.player.draw();
  }

  keyPressed(){
    if (keyCode === 38){
        this.player.moveUp();
    }
    if (keyCode === 40){
        this.player.moveDown();
    }
    if (keyCode === 37){
        this.player.moveLeft();
    }
    if (keyCode === 39){
        this.player.moveRight();
    }
}
}

