var stars = [];
var speed = 10;
var gridSizeX = 100;
var gridSizeY = 100;
var nrOfSand = 1000;
var createStarStep = 1;
var speedSlider;
var gridSizeSlider;
var nrOfSandSlider;
var canvasSize = {width:640, height:640};
var colors = {
  0: [255,255,255],
  1: [0,255,0],
  2: [255,0,0],
  3: [0,0,255],
}
var sandpile = new Array(gridSizeY);

function setup() {
  var canvas = createCanvas(canvasSize.width, canvasSize.height);
  /*asure that the grid has odd length and height*/
  if (gridSizeX % 2 == 0) gridSizeX += 1;
  if (gridSizeY % 2 == 0) gridSizeY += 1;
  for (var row = 0; row < gridSizeY; row++){
	sandpile[row] = new Array(gridSizeX);
	//for (var col = 0; col < gridSizeX; col++){
	//	sandpile[row][col] = 0;
	//}
  }
  sandpile[Math.floor(row/2)][Math.floor(col/2)] = nrOfSand;
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  //fill(255);
  frameRate(speed);
  text("FPS: " + round(frameRate(), 2), 20, 20);
  for (var row = 0; row < gridSizeY; row++){
	for (var col = 0; col < gridSizeX; col++){
		x = sandpile[row][col];
		noStroke();
		fill(color(colors[x]));
		rect(col * width/gridSizeX, row * height/gridSizeY, width/gridSizeX, height/gridSizeY);
	}
  }
  noLoop();
}
	