class Game {
    constructor() {
        this.player = new Player(0, 0);
        this.treasure = new Treasure(500, 500);
    }
    draw() {
        clear();
        game.player.draw();
        game.treasure.draw();
        background("pink");
        this.player.draw();
        this.treasure.draw();
        if (this.collisionCheck(this.player, this.treasure)) {
            noLoop();
            const button = document.createElement("button");
            button.innterText = "NEW GAME?";
            button.style.background = "white";
            document.body.appendChild(button);
            button.onclick = () => {
                this.treasure.setRandomPosition();
                button.parentNode.removeChild(button);
                loop();
            };
        }
    }

    drawGrid() {
        for (let i = 0; i <= 10; i++) {
            line(0, SQUARE_SIDE * i, WIDTH, SQUARE_SIDE * i);
            line(SQUARE_SIDE * i, 0, SQUARE_SIDE * i, HEIGHT);
        }
    }

    keyPressed() {
        switch (keyCode) {
            case 39: {
                this.player.moveRight();
                break;
            }
            case 38: {
                this.player.moveUp();
                break;
            }
            case 40: {
                this.player.moveDown();
                break;
            }
            case 37: {
                this.player.moveLeft();
                break;
            }
        }
    }

    collisionCheck(player, treasure) {
        const playerTopArea = player.row;
        const playerLeftArea = player.col;
        const playerRightArea = player.col + player.width;
        const playerBottomArea = player.row + player.height;

        const obsTopArea = treasure.row;
        const obsLeftArea = treasure.col;
        const obsRightArea = treasure.col + treasure.width;
        const obsBottomArea = treasure.row + treasure.height;

        const isTouchingOnLeft = obsRightArea > playerLeftArea;
        const isTouchingOnBottom = obsTopArea < playerBottomArea;
        const isTouchingOnRight = obsLeftArea < playerRightArea;
        const isTouchingOnTop = obsBottomArea > playerTopArea;

        return (
            isTouchingOnRight &&
            isTouchingOnTop &&
            isTouchingOnBottom &&
            isTouchingOnLeft
        );
    }
}
