const game = new Game();

function draw() {
  clearInterval();
  background(220);
  game.drawGrid();
  game.player.draw();
  game.treasure.draw();
}

function preload() {
  playerDown = loadImage("../assets/character-down.png")
  treasure = loadImage("../assets/treasure.png")
}

function setup() {
  createCanvas(width, height);
}

function keyPressed() {
  game.keyPressed();
}
