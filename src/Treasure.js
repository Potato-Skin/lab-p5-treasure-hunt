class Treasure {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.width = WIDTH / 11;
        this.height = HEIGHT / 11;
    }

    setRandomPosition() {
        this.col = Math.floor(Math.random() * 10) * (WIDTH / 10);
        this.row = Math.floor(Math.random() * 10) * (HEIGHT / 10);
    }

    draw() {
        image(treasureImage, this.col, this.row, this.width, this.height);
    }
}
