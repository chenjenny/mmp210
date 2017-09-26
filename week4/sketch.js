function setup() { 
	createCanvas(640, 480);
    background(102,205,170);       
}

function keyPressed() {
	background(640, 480);
}
var circleX=0;

function draw() {
    strokeWeight(2);
	stroke(84,153,199);
	fill(93,109,126);
    
    
//face//
    fill(245,251,112);
	ellipse(width/2, height/2, width - mouseX);
    
//eyes//
    stroke(0,0,0);
    fill(255,255,255);
    ellipse(185,155,80,125);
    ellipse(400,155,80,125);
    
 //pupil//
    fill("black");
    noStroke();
    ellipse(195,170,45,80);
    ellipse(410,170,45,80);

//moving ellipse//
    fill(241,243,200);
    ellipse(circleX,300,100,100);
    circleX = circleX + 1;      
}