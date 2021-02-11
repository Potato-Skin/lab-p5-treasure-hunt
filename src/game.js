class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    line(0, HEIGHT / 10, WIDTH, HEIGHT / 10);
    line(0, (HEIGHT / 10) * 2, WIDTH, (HEIGHT / 10) * 2);
    line(0, (HEIGHT / 10) * 3, WIDTH, (HEIGHT / 10) * 3);
    line(0, (HEIGHT / 10) * 4, WIDTH, (HEIGHT / 10) * 4);
    line(0, (HEIGHT / 10) * 5, WIDTH, (HEIGHT / 10) * 5);
    line(0, (HEIGHT / 10) * 6, WIDTH, (HEIGHT / 10) * 6);
    line(0, (HEIGHT / 10) * 7, WIDTH, (HEIGHT / 10) * 7);
    line(0, (HEIGHT / 10) * 8, WIDTH, (HEIGHT / 10) * 8);
    line(0, (HEIGHT / 10) * 9, WIDTH, (HEIGHT / 10) * 9);
    
    line(WIDTH / 10, 0, WIDTH / 10, HEIGHT);
    line((WIDTH / 10) * 2, 0, (WIDTH / 10) * 2, HEIGHT);
    line((WIDTH / 10) * 3, 0, (WIDTH / 10) * 3, HEIGHT);
    line((WIDTH / 10) * 4, 0, (WIDTH / 10) * 4, HEIGHT);
    line((WIDTH / 10) * 5, 0, (WIDTH / 10) * 5, HEIGHT);
    line((WIDTH / 10) * 6, 0, (WIDTH / 10) * 6, HEIGHT);
    line((WIDTH / 10) * 7, 0, (WIDTH / 10) * 7, HEIGHT);
    line((WIDTH / 10) * 8, 0, (WIDTH / 10) * 8, HEIGHT);
    line((WIDTH / 10) * 9, 0, (WIDTH / 10) * 9, HEIGHT);
  }
}

