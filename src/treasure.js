class Treasure {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.width = width / 10;
        this.height = height / 10;
    }

    setRandomPosition() {
        this.col = Math.floor(Math.random() * 10);
        this.row = Math.floor(Math.random() * 10);
    }

    draw() {
        image(treasure, this.col*100, this.row*100, this.width, this.height);
    };
}