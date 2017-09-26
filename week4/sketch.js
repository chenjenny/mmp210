function setup() { 
	createCanvas(640, 480);
    background(102,205,170);       
}

function keyPressed() {
	background(640, 480);
}
var circleX=0;
var text1 = "Draw";
var text2 = "some"
var text3 = "crazy"
var text4 = "hair"


function draw() {
    
   //text// 
    textSize(30);
	fill("Deeppink");
	noStroke();
	textFont("Comic Sans MS");
	text(text1, 5, 10, 20, 200);
    
    textSize(30);
	fill("Deeppink");
	noStroke();
	textFont("Comic Sans MS");
	text(text2, 90, 10, 20, 200);
    
    textSize(30);
	fill("Deeppink");
	noStroke();
	textFont("Comic Sans MS");
	text(text3, 174, 10, 20, 200);
    
    textSize(30);
	fill("Deeppink");
	noStroke();
	textFont("Comic Sans MS");
	text(text4, 260, 10, 20, 200);

//mouse//
    strokeWeight(6);
	stroke("red");
	fill("red");
	line(mouseX, mouseY, pmouseX, pmouseY)
//face
    //strokeWeight(2);
	//stroke(84,153,199);
	//fill(93,109,126);
    //fill(245,251,112);
	//ellipse(width/2, height/2, width - mouseX);
    
//face2
    stroke("MidnightBlue");
	fill("yellow");
	ellipse(width/2, height/2, frameCount, frameCount);
    
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

//mouth
    noStroke();
    fill("red");
    ellipse(300,350,200,50);

//moving ellipse
    fill(241,243,200);
    ellipse(circleX,150,20,20);
    circleX = circleX + .5;      
}