let x = 100;
let y = 250;
let d = 200;
let clicks = 0;

function setup() {
	createCanvas(800, 800);
}
  
function draw() {
	background(9, 60, 183);
	ellipse(x, y, d, d);
	fill(255, 255, 255);
  	textSize(69);
  	text(clicks, 700, 100);
}

function mouseClicked() {
  if (mouseX > x-d && mouseX < x + d) {
  if (mouseY > y - d && mouseY < y+ d) {
    x = random(100,700);
    y =  random(100,700);
    d = random (50, 200);
    clicks = clicks + 1;
    }
  }
}