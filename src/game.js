class Game {
  constructor() {
    this.player = new Player(0, 0)
    this.treasure = new Treasure(100, 100);
    this.score = 0;
  }

  draw(){
    clear();
    this.player.draw();
    this.treasure.draw();
    if(this.collisionCheck(this.player, this.treasure)){
      noLoop();
      const button = document.createElement("button");
      button.innerText = "You Won. Let's play again?";
      button.style.background = "grey";
      document.body.appendChild(button);
      button.onclick = () => {
          this.treasure.setRandomPosition();
          button.parentNode.removeChild(button);
          this.score ++;
          score.innerText = this.score;
          loop();
      }
  }
  }

  drawGrid() {
    for(let i = 0; i<=10; i++){
      line(0, SQUARE_SIDE * i, WIDTH, SQUARE_SIDE * i);
      line(SQUARE_SIDE * i, 0, SQUARE_SIDE * i, HEIGHT);
    }
  }

  collisionCheck(player, obstacle){

    const playerTopArea = player.y;
    const playerLeftArea = player.x;
    const playerRightArea = player.x + player.width;
    const playerBottomArea = player.y + player.height;

    const obsTopArea = obstacle.y;
    const obsLeftArea = obstacle.x;
    const obsRightArea = obstacle.x + obstacle.width;
    const obsBottomArea = obstacle.y + obstacle.height;

    const isTouchingOnLeft = obsRightArea > playerLeftArea;
    const isTouchingOnBottom = obsTopArea < playerBottomArea;
    const isTouchingOnRight = obsLeftArea < playerRightArea;
    const isTouchingOnTop = obsBottomArea > playerTopArea;

    return (
        isTouchingOnRight && 
        isTouchingOnTop && 
        isTouchingOnBottom && 
        isTouchingOnLeft
        );
}

  keyPressed(){
    if (keyCode === 38){
        this.player.moveUp();
    }
    if (keyCode === 40){
        this.player.moveDown();
    }
    if (keyCode === 37){
        this.player.moveLeft();
    }
    if (keyCode === 39){
        this.player.moveRight();
    }
}
}

