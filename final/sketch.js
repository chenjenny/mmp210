var ball = {
x: 200,
y: 0,
    speedX:10,
    speedY:8,
}
    
var music;

function preload() {
	music =loadSound("background.mp3");
}

function drawEye(x, y,eyeSize,pupilSize) {

// pupil
    var pupil = createVector(ball.x, ball.y);
    pupil.sub(x,y);
    pupil.limit((eyeSize -pupilSize) / 2);
    pupil.add(x, y);

  
// eye and pupil
    stroke(1);
    fill(255);
    ellipse(x, y,eyeSize,eyeSize);
    fill(0)
    ellipse(pupil.x,pupil.y,pupilSize,pupilSize);
}
// background

function setup() {
    createCanvas(windowWidth, windowHeight);
    music.loop();
//    strokeWeight();
}
  
function draw() {
    background("#4682B4");
     
// Face
    fill("#FFFF00");
    strokeWeight(1);
    ellipse(width/2,height/2,500,500);
// Right eye
    strokeWeight(3);
    drawEye(width/2+100, height/2 - 50,125,50);
// Left eye
    drawEye(width/2 - 100,height/2 - 50,125,50);
// Mouth
    line(width/2+100, height/2+100, 500, 500);

//"fly"
    noStroke();
	fill("red");
	ellipse(ball.x, ball.y, 35);
    
	
	if (ball.x > width || ball.x < 0) {
		ball.speedX *= -1;
	}
	
	if (ball.y > height || ball.y < 0) {
		ball.speedY *= -1;
	}
	
	ball.x += ball.speedX;
	ball.y += ball.speedY;
	
}