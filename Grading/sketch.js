function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function student(marks){
  var marks=90

  if(marks<=90) {
    console.log("A")
  }
  else if(marks>=80) {
    console.log("B")
  }
  else if(marks>=60) {
    console.log("C")
  }
  else if(marks>=45) {
    console.log("D")
    
  }
  else if(marks>=20) {
    console.log("E")
  }
  else{
    console.log("The student marks missing")
    
  }
 }
student()