var x = 0;
var speed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
 triangle(x,30, 75, 20, 86, 75);
  
  if (x > width){
    speed =  -3;
    
  }
  x = x + speed;
 
}