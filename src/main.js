const game = new Game();

function draw() {
  clear();
  game.drawGrid();
  game.player.draw();
  game.treasure.draw();
}

function preload() {
  playerPicture = loadImage("../assets/character-down.png");
  treasure = loadImage("../assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(width, height);
  canvas.parent("canvas");
}

function keyPressed() {
  game.keyPressed();
}
