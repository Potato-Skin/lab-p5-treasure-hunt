class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.width = WIDTH / 10;
        this.height = HEIGHT / 10;
    }
    draw() {
        image(playerImage, this.col, this.row, this.width, this.height);
    }

    moveUp() {
        this.row -= 100;
        if (this.row < 0) {
            this.row = 0;
        }
    }
    moveDown() {
        this.row += 100;
        if (this.row + this.height > HEIGHT) {
            this.row = HEIGHT - this.height;
        }
    }
    moveLeft() {
        this.col -= 100;
        if (this.col < 0) {
            this.col = 0;
        }
    }
    moveRight() {
        this.col += 100;
        if (this.col + this.width > WIDTH) {
            this.col = WIDTH - this.width;
        }
    }
}
