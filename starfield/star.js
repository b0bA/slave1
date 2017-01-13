var maxSize = 24;
var maxSpeed = 64;
function Star() {
	this.x = random(-width, width);
	this.y = random(-height, height);
	this.z = random(width);
	this.pz = this.z;
	this.color = color(random(200,255), random(200,255), random(200,255));
	this.helper = random(0,10);
	if (this.helper > 8) {
		this.size = random(0, maxSize);
	}
	else {
		this.size = random(0, maxSize/2);
	}
	this.speed = random(0, maxSpeed);
	
	this.update = function() {
		this.z = this.z - this.speed;
		if (this.z < 1) {
			this.z = width;
			this.x = random(-width, width);
			this.y = random(-height, height);
			this.pz = this.z;
		}
	}

	this.show = function() {
		fill(this.color);
		noStroke();
		var sx = map(this.x / this.z, 0, 1, 0, width);
		var sy = map(this.y / this.z, 0, 1, 0, height);
		var r = map(this.z, 0, width, this.size, 0);
		
		ellipse(sx, sy, r, r);

		var px = map(this.x / this.pz, 0, 1, 0, width);
		var py = map(this.y / this.pz, 0, 1, 0, height);
		this.pz = this.z;

		stroke(this.color);
		line(px, py, sx, sy);
	}
}