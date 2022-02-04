function setup() {
  createCanvas(450, 450);
}

function draw() {
  //This fills the background with colour
  background(128,0,23,255);
  //This adds colour in inside the shape
  fill(0,0,245);
  //Sets the color used to draw lines and borders around shapes
  noStroke(0);
  quad(38, 315, 86, 250, 69, 69, 30, 76);
  
  
  fill(162,0,255);
  strokeWeight(3);
  stroke(0,221,192);
  arc(250, 250, 80, 80, 0, PI + QUARTER_PI);
  
}