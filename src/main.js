const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  game.draw();
}

function preload(){
  picturePlayerUp = loadImage("/assets/character-up.png");
  picturePlayerDown = loadImage("/assets/character-down.png");
  picturePlayerLeft = loadImage("/assets/character-left.png");
  picturePlayerRight = loadImage("/assets/character-right.png");
  pictureTreasure = loadImage("/assets/treasure.png");
}

function keyPressed() {
  game.keyPressed();
}