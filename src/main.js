const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.player.draw();
  game.treasure.draw();
}

function preload() {
  vikingDown = loadImage("./assets/character-down.png");
  treasure = loadImage("./assets/treasure.png");
}

function keyPressed() {
  game.keyPressed();
}
