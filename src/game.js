

class Game {
  constructor(){
    this.player = new Player(0, 0);
    this.treasure = new Treasure() 
    this.score = 0
  }

  draw(){
    clear()
    this.drawGrid()
    this.player.draw()
    this.treasure.draw()
  }

drawGrid() {
  for (let i = 0; i < grid.length; i++){
    grid[i].show()
  }}

  



  
  keyPressed() {
  
    if (keyCode === 38) {
        this.player.moveUp();
    }
    if (keyCode === 37) {
        this.player.moveLeft();
    }
    if (keyCode === 40) {
        this.player.moveDown();
    }
    if (keyCode === 39) {
        this.player.moveRight();
    }

   
  };
  }



  
  

   
      
     
    // Iteration 1
    // Draw the grid
 
    // https://p5js.org/reference/#/p5/line

