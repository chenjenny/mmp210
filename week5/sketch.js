function setup() { 
	createCanvas(640, 360);
    noStroke();
}


//function draw() {
    //background("white");
    
    //if (mouseX > width/2) {
	//	fill("lightblue");
	//} else {
	//	fill("pink");
	//}

	//ellipse(mouseX, mouseY, 40, 40);
//}

//console.log(frameCount);
//if (framCount > 120 $$ frameCount <180) 

function draw() {
	background("lightblue");
    
 //quadrants lines
	strokeWeight(2);
	stroke(129, 153, 155);
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

	fill(129, 153, 155);
    
    if (mouseX > width/2 && mouseY > height/2) {
		rect(width/2, height/2, width, height);
  
    } else if (mouseX < width/2 && mouseY > height/2) {
		rect(0, height/2, width/2, height);

    } else if (mouseX > width/2 && mouseY < height/2) {
		rect(width/2, 0, width, height/2);
		
    } else {
		rect(0, 0, width/2, height/2);
        
	}
    
    
    //mouse lines
    strokeWeight(5);
    stroke(248, 246, 159);
    line(mouseY, mouseX, pmouseX, pmouseX);
    stroke(248, 159, 161);
    line(mouseX, mouseY, pmouseY, pmouseY);
    stroke(159, 248, 201);
    line(mouseX, mouseX, pmouseX, pmouseY);
    stroke(201, 159, 248);
    line(mouseY, mouseY, pmouseY, pmouseX);
    //stroke(17, 131, 234);
    //line(mouseY, mouseX, pmouseX, pmouseY);








    


  
    
     
}





