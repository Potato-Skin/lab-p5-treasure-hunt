const game = new Game();

function preload() {
  pictureVariable = loadImage("../assets/character-down.png");
  treasureVariable = loadImage("../assets/treasure.png")
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.draw();
  game.drawGrid();
}

function keyPressed(){
  game.keyPressed();
}