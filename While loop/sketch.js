function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  var x = 0;
  
  while (x < width)  {
  line(x, 200, 25, 25);
  x = x + 50;
   
  fill(0,200,255);
    }

for (var x = 0; x < width; x = x + 50) {
  line(x, 300, 25, 25);
   fill(0,262,0);
  
}
  
  
  
}