class Treasure{
   constructor(){
    this.col = this.setRandomPosition()
    this.row = this.setRandomPosition()
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
   }
setRandomPosition(){
    return Math.floor(Math.random () * 10) * SQUARE_SIDE
    
}
draw(){
    image(tesoro, this.col, this.row, this.width, this.height) 
}

}
