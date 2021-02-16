const game = new Game();
function preload() {
    playerImage = loadImage("../assets/character-down.png");
    treasureImage = loadImage("../assets/treasure.png");
}
function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
}
function draw() {
    clear();
    game.draw();
    game.drawGrid();

}

function keyPressed() {
    game.keyPressed();
}
