function Square(x, y, w, h) {
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	//this.color = color(250, 250, 250, 170);
	this.color = color(random(0,255), random(0,255), random(0,255), 170);

	this.show = function() {
		fill(this.color);
		//noFill();
		stroke(this.color);
		rect(this.x, this.y, this.w, this.h);
	}
}