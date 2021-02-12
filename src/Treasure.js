class Treasure {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    setRandomPosition() {
        this.col = Math.floor(Math.random() * (WIDTH - SQUARE_SIDE)/100)*100;
        this.row = Math.floor(Math.random() * (WIDTH - SQUARE_SIDE)/100)*100;
    }

    drawTreasure() {
        image (pictureTreasure, this.col, this.row);
        pictureTreasure.resize(100, 100);
    }
}