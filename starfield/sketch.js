var stars = [];
var speed;
var nrOfStars = 1000;
var x_target;
var y_target;
var frDiv;
var starSlider;

function setup() {
  createCanvas(640, 480);
  x_target = width / 2;
  y_target = width / 2;
  starSlider = createSlider(0, 5000, nrOfStars, 1);
  translate(x_target, y_target);
  createStars();
  frDiv = createDiv('');
}


function draw() {
  //speed = map(mouseX, 0, width, 0, 50);
  background(0);
  text((frameRate(), 2), 20, 20);
  translate(x_target, y_target);
  if (stars.length != starSlider.value()) {
	createStars();
	//nrOfStars = starSlider.value();
  }
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  
  frDiv.html(floor(frameRate()));
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

/*
function mouseDragged() {
	x_target = mouseX;
	y_target = mouseY;
	return false;
}

function mousePressed() {
	x_target = mouseX;
	y_target = mouseY;
	return false;
}

function toggleFrameRate() {
}
*/