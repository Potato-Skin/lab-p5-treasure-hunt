const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.draw();
}

function preload() {
  playerImage = loadImage("/lab-p5-treasure-hunt/assets/character-down.png");
  treasureImage = loadImage("/lab-p5-treasure-hunt/assets/treasure.png");
  playerUpImage = loadImage("/lab-p5-treasure-hunt/assets/character-up.png");
  playerLeftImage = loadImage(
    "/lab-p5-treasure-hunt/assets/character-left.png"
  );
  playerRightImage = loadImage(
    "/lab-p5-treasure-hunt/assets/character-right.png"
  );
}

function keyPressed() {
  game.keyPressed();
}
