function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0,0,143);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  
  if (mouseY > 300) {
    fill(0, 154, 0);
    
  }
  
  rect(300, 200, 155, 95);
  quad(38, 31, 86, 20, 169, 163, 30, 76);
}