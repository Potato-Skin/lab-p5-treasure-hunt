const game = new Game();



function draw() {
  game.drawGrid();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  score1.innerText = game.score1;
  score2.innerText = game.score2;
}

function preload() {
  characterImageDown=loadImage('../assets/character-down.png')
  characterImageLeft=loadImage('../assets/character-left.png')
  characterImageRight=loadImage('../assets/character-right.png')
  characterImageLeft=loadImage('../assets/character-up.png')
  treasureImage=loadImage('../assets/treasure.png')
}

function keyPressed() { 
  game.keyPressed() 
}