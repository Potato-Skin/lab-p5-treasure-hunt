class Treasure {
    constructor(col, row){
        this.x = col;
        this.y = row;
        this.width = SQUARE_SIDE;
        this.height = SQUARE_SIDE;
    }
    draw(){
        image(treasureVariable, this.x, this.y, this.width, this.height);
    }

    setRandomPosition(){
        this.x = ((Math.floor(random(10))) * SQUARE_SIDE);
        this.y = ((Math.floor(random(10))) * SQUARE_SIDE);
    }
}