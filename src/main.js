const game = new Game();

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(220)
  game.drawGrid();
}
