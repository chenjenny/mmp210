function setup() {
	createCanvas(640, 460);
}

function draw() {
	background("white");

	noStroke();
	fill("LightSteelBlue");
	ellipse(150, 150, 250, 300);

	fill(100);
	ellipse(100, 150, 50, 100);
	
	fill(100);
	ellipse(200, 150, 50, 100);

	stroke("red");
	line(180, 265, 65, 220)
}