//variable circle
let xCircle = 500
let yCircle = 350
let diameter = 25
let ray = diameter / 2

//speedcircle
let speedXCircle = 6
let speedYCircle = 6


//variable Rect
let xRect = 5
let yRect = 300
let Rectlarge = 10
let Rectheight = 90

function setup() {
  createCanvas(945, 700);
}

function draw() {
  background(0);
  showCircle()
  movementcircle()
  verifycolission() 
  showrect()
  movementmyrect()
  //verifycolisisionrect()
}

function showCircle(){
  circle(xCircle, yCircle, diameter)
}

function movementcircle(){
   xCircle += speedXCircle
   yCircle += speedYCircle
}

function verifycolission(){
  if (xCircle + ray > width ||
     xCircle - ray < 0){
    speedXCircle *= -1
  }
  if (yCircle + ray > height ||
     yCircle - ray < 0){
    speedYCircle *= -1}

}

function showrect(){
  rect(xRect, yRect, Rectlarge, Rectheight)
}

function movementmyrect(){
  if (keyIsDown(UP_ARROW)){
    yRect -= 10
  }

 if (keyIsDown(DOWN_ARROW)){
    yRect += 10
 }

function verificaColisaoRaquete() {
    if (xCircle - ray < xRect + Rectlarge
        && yCircle - ray < yRect + Rectheight
        && yCircle + ray > yRect) {
        speedXCircle *= -1;
    }
}

  




    


}




















