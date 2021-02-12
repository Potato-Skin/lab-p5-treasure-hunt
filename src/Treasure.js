class Treasure {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    setRandomPosition() {
        this.col = random(0, 1000-SQUARE_SIDE);
        this.row = random(0, 1000-SQUARE_SIDE);
    }

    drawTreasure() {
        image (pictureTreasure, this.col, this.row);
        pictureTreasure.resize(100, 100);
    }
}