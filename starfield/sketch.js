var stars = [];
var speed;
var nrOfMinStars = 0;
var nrOfMaxStars = 2000;
var nrOfStars = nrOfMaxStars/2;
var createStarStep = 1;
var x_target;
var y_target;
var starSlider;
var overCanvas = false;
var canvasSize = {width:640, height:480};

function setup() {
  var canvas = createCanvas(canvasSize.width, canvasSize.height);
  canvas.mousePressed(setCenter);
  //canvas.touchMoved(moveCenter);
  x_target = width / 2;
  y_target = width / 2;
  starSlider = createSlider(nrOfMinStars, nrOfMaxStars, nrOfStars, createStarStep);
  starSlider.position(20, height+50);
  translate(x_target, y_target);
  createStars();
}


function draw() {
  //speed = map(mouseX, 0, width, 0, 50);
  background(0);
  noStroke();
  fill(255);
  text("FPS: " + round(frameRate(),2), 20, 20);
  text("Stars: " + stars.length, width - 80, 20);
  //fill(255,100,0);
  //text("Stars: " + starSlider.value(), starSlider.position().x, starSlider.position().y-10);
  //text(nrOfMinStars, starSlider.position().x - 10, starSlider.position().y);
  //text(nrOfMaxStars, starSlider.position().x + starSlider.width+10, starSlider.position().y);
  translate(x_target, y_target);
  if (stars.length != starSlider.value()) {
	createStars();
  }
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  if (mouseX >= 0 && mouseX < width && mouseY>= 0 && mouseY < height) {
	overCanvas = true;
	if (mouseIsPressed) moveCenter();
  }
  else overCanvas = false;
}

function createStars() {
  var x = stars.length - starSlider.value();
  if (x<0) {
	for (var i = stars.length; i < starSlider.value(); i++) {
	  stars[i] = new Star();
	}
  }
  else if (x>0) {
    stars.splice(starSlider.value(), x);
  }
}

function setCenter() {
	x_target = mouseX;
	y_target = mouseY;
}

function moveCenter() {
	x_target += ceil(mouseX - x_target) / 7.5;
	y_target += ceil(mouseY - y_target) / 7.5;
}
