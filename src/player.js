class Player {
    constructor (col, row){
        this.col = col;
        this.row = row;
        this.width = SQUARE_SIDE;
        this.height = SQUARE_SIDE
        
    }

    moveUp(){
        this.row -= SQUARE_SIDE
        if (this.row < 0){
            this.row = 0
        }
    }
    moveDown(){
        this.row += SQUARE_SIDE
        if (this.row + this.height > HEIGHT){
            this.row =  this.height - HEIGHT
        }
    }
    moveLeft(){
        this.col -= SQUARE_SIDE 
        if(this.col < 0){
            this.col = 0
        }
    }
    moveRight(){
        this.col += SQUARE_SIDE
        if(this.col + this.width > WIDTH ){
            this.col = this.width - WIDTH
        }
    }

    draw(){
        image(playerDown, this.col, this.row, this.width, this.height);
        image(playerUp, this.col, this.row, this.width, this.height);
        image(playerLeft, this.col, this.row, this.width, this.height);
        image(playerRight, this.col, this.row, this.width, this.height);
      
    }
}