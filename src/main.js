const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  game.draw();
}

function preload() {
  pictureVariable = loadImage("../assets/character-down.png")
}