class Player {
    constructor(startingRow, startingCol){
        this.col = startingCol;
        this.row = startingRow;
    }

    draw(){
        image(picturePlayerDown, this.col, this.row);
        picturePlayerDown.resize(100, 100);
    }
    
    moveUp(){
         this.row -= SQUARE_SIDE;
         if (this.row < 0) {
             this.row = 0;
         }
    }

    moveDown(){
        this.row += SQUARE_SIDE;
        if (this.row + SQUARE_SIDE > HEIGHT) {
            this.row = HEIGHT - SQUARE_SIDE;
        }
    }

    moveLeft(){
        this.col -= SQUARE_SIDE;
        if (this.col < 0) {
            this.col = 0;
        }
    }

    moveRight(){
        this.col += SQUARE_SIDE;
        if (this.col + SQUARE_SIDE > WIDTH) {
            this.col = WIDTH - SQUARE_SIDE;
        }
    }
}