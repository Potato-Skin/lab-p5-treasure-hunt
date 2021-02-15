class Treasure {
    constructor(col,row) {
        this.x = col;
        this.y = row;        
        this.width = SQUARE_SIDE;
        this.height = SQUARE_SIDE;
    }    
    draw() {
        image(treasureImage, this.x, this.y, this.width,this.height);
    }
    setRandomPosition() {
        this.x = Math.floor((Math.random() * (WIDTH- this.width))/100)*100;
        this.y = Math.floor((Math.random() * (HEIGHT- this.height))/100)*100;
    }
}