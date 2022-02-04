var diam = 100;
var inOut = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,220);
	ellipse(200,200,diam)
	
	if(diam > 200){
	inOut = false;
	}
	
	if(diam < 10){
	inOut = true;
	}
	
	if(inOut){
	diam++
	}
	
	if(!inOut){
	diam--
	}
}