class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.width = width / 10;
        this.height = height / 10;
    };

    draw() {
        image(playerDown, this.col*100, this.row*100, this.width, this.height);
    };

    moveUp() {
        this.row -= 1;
    };

    moveDown() {
        this.row += 1;
    };

    moveLeft() {
        this.col -= 1;
    };

    moveRight() {
        this.col += 1;
    };
}