class Treasure {
    constructor(xPosition, yPosition){
        this.x = xPosition;
        this.y = yPosition;
        this.width = SQUARE_SIDE;
        this.height = SQUARE_SIDE;
    }
    draw(){
        image(treasureVariable, this.x, this.y, this.width, this.height);
    }

    setRandomPosition(){
        this.x = Math.floor(Math.random() * (WIDTH - this.width));
        this.y = Math.floor(Math.random() * (HEIGHT - this.height));
    }
}