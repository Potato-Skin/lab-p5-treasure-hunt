class Player {
    constructor(col, row, characterImage) {
        this.x = col;
        this.y = row;        
        this.width = SQUARE_SIDE;
        this.height = SQUARE_SIDE;
        this.playerImage = characterImage;
    }    
    moveUp() {
        this.y -= SQUARE_SIDE;
        if (this.y < 0) {
            this.y = 0;
        }
        this.playerImage = characterImageUp;
    }
    moveDown() {
        this.y += SQUARE_SIDE;
        if (this.y + this.height > HEIGHT) {
            this.y = HEIGHT - this.height;
        }
        this.playerImage = characterImageDown;
    }
    moveLeft() {
        this.x -= SQUARE_SIDE;
        if (this.x < 0) {
            this.x = 0;
        }
        this.playerImage = characterImageLeft;
    }
    moveRight() {
        this.x += SQUARE_SIDE;
        if (this.x + this.width > WIDTH) {
            this.x = WIDTH -this.width;
        }
        this.playerImage = characterImageRight;
    }
    draw() {
        image(characterImageDown, this.x, this.y, this.width,this.height);
        //image(this.playerImage, this.x, this.y, this.width,this.height);
    }
}