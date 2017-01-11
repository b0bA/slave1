var angle;
var axiom = "F";
var sentence = axiom;
var len = 100;
var max_iter = 4;
var rules = [];


rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}

function reset() {
	clear();
	sentence = axiom;
	len = 100;
	turtle();
}

function generate() {
  len *= 0.5;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  //createP(sentence);
  //turtle();
}

function turtle() {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  stroke(255, 100);
  
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
	angle = radians(random(24.66, 25.33));
    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle)
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
}

function setup() {
  createCanvas(480, 480);
  angle = radians(25);
  background(51);
  //var inp = createInput('F');
  //axiom = inp.value;
  //turtle();
  //var button_generate = createButton("generate");
  //button_generate.mousePressed(generate);
  //var button_reset = createButton("reset");
  //button_reset.mousePressed(reset);
  //var button_rerun = createButton("run again");
  //button_rerun.mousePressed(draw);
  for (var i = 0; i < max_iter; i++) {
		generate();
  }
  var fps = frameRate();
  //fill(255);
  //stroke(0);
  text("FPS: " + fps, 10, height - 10);
}

function draw() {
	//reset();
	clear();
	turtle();
}