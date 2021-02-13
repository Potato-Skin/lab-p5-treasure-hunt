class Player {
    constructor(col, row) {
        this.x = col;
        this.y = row;        
        this.width = SQUARE_SIDE;
        this.height = SQUARE_SIDE;
    }    
    moveUp() {
        this.orientation = 'up';
        this.y -= SQUARE_SIDE;
        if (this.y < 0) {
            this.y = 0;
        }
    }
    moveDown() {
        this.orientation = 'down';
        this.y += SQUARE_SIDE;
        if (this.y + this.height > HEIGHT) {
            this.y = HEIGHT - this.height;
        }
    }
    moveLeft() {
        this.orientation = 'left';
        this.x -= SQUARE_SIDE;
        if (this.x < 0) {
            this.x = 0;
        }
    }
    moveRight() {
        this.orientation = 'right';
        this.x += SQUARE_SIDE;
        if (this.x + this.width > WIDTH) {
            this.x = WIDTH -this.width;
        }
    }
    draw() {
        if (this.orientation ==='up') {
            image(characterImageUp, this.x, this.y, this.width,this.height);
        } else if (this.orientation ==='down') {
            image(characterImageDown, this.x, this.y, this.width,this.height);
        } else if (this.orientation ==='left') {
            image(characterImageLeft, this.x, this.y, this.width,this.height);
        } else if (this.orientation ==='right') {
            image(characterImageRight, this.x, this.y, this.width,this.height);
        }
        else {
        image(characterImageDown, this.x, this.y, this.width,this.height);}
    }
}