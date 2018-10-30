var squares = [];
var fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
//1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393
var ord1 = [[1,-1],[1,1],[-1,1],[-1,-1]]; //start nach rechts, dann im uhrzeigersinn
var ord2 = [[1,1],[-1,1],[-1,-1],[1,-1]]; //start nach unten, dann im uhrzeigersinn
var ord3 = [[-1,1],[-1,-1],[1,-1],[1,1]]; //start nach links, dann im Uhrzeigersinn
var ord4 = [[-1,-1],[1,-1],[1,1],[-1,1]]; //start nach oben, dann im uhrzeigersinn
var canvasSize = {width:1920, height:1200};
var x_target;
var y_target;

function setup() {
  var canvas = createCanvas(canvasSize.width, canvasSize.height);
  x_target = canvasSize.width / 2;
  y_target = canvasSize.height / 2;
  translate(x_target, y_target);
  createSquares(ord1);
  createSquares(ord2);
  createSquares(ord3);
  createSquares(ord4);
}


function draw() {
  background(0);
  for (var i = 0; i < squares.length; i++) {
    squares[i].show();
  }
}

function createSquares(ord) {
	x_target = canvasSize.width / 2;
    y_target = canvasSize.height / 2;
	squares.push(new Square(x_target, y_target, fib[0], -fib[i]));
	squares.push(new Square(x_target+1, y_target-1, fib[1], fib[1]));
	x_target += 2;
	for (var i = 2; i < fib.length; i++) {
	  var w = ord[i%4][0]*fib[i];
	  var h = ord[i%4][1]*fib[i];
	  squares.push(new Square(x_target, y_target, w, h));
	  console.log(i, fib[i], ord[i%4], x_target, y_target, w, h);
	  x_target += ord[i%4][0]*fib[i];
	  y_target += ord[i%4][1]*fib[i];
	}
	
	//squares.push(new Square(50, 1000,100,100));
	//squares.push(new Square(100,1050,100,100));
	
}
