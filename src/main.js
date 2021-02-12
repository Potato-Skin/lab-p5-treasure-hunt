const game = new Game();
const player = new Player();
const treasure = new Treasure()


function preload() {
  playerDown = loadImage("/assets/character-down.png")
  playerUp = loadImage("/assets/character-up.png")
  playerLeft = loadImage("/assets/character-left.png")
  playerRight = loadImage("/assets/character-right.png")
  tesoro = loadImage("/assets/treasure.png")
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  cols = floor(WIDTH/SQUARE_SIDE)
  rows = floor(HEIGHT/SQUARE_SIDE)

  for (let   x = 0; x < rows; x++){
    for (let y = 0; y < cols; y++){
      let cell = new Cell(x, y);
      grid.push(cell)
    }
  }
}

function draw() {
  game.draw()
}

function Cell (x, y) {
  this.x = x;
  this.y = y;
  this.show = function() {
    let j = this.x * SQUARE_SIDE;
    let i = this.y * SQUARE_SIDE;
    stroke(0)
   
    line(j, i, j + SQUARE_SIDE, i);
    line(j+SQUARE_SIDE, i, j+SQUARE_SIDE, i+SQUARE_SIDE)
    line(j+SQUARE_SIDE, i+SQUARE_SIDE, j, i+SQUARE_SIDE)
    line(j, i+SQUARE_SIDE, j, i)
  }
}
function keyPressed(){
  game.keyPressed()
}