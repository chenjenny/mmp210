function setup() {
	createCanvas(640, 640);
	background ("DarkCyan");
	noStroke();


}

function mouseClicked() {
//	design();
    
       var space = 5;        
    var column = width/10;
    var row = height/10;
    var r = random(0,255);
    var g = random(0,255);
    var b = random(0,255);
    
    background(r,g,b);
    
    
	for (var x = 25; x <= width; x += column) {
		for (var y = 30; y <= height; y += row) {
            
/// emoji 1 ///
//            //face
//            stroke("black");
//            strokeWeight(1);
//            fill("yellow");
//            ellipse(x, y-4 , 44, 44);
//            
//            //left-eye
//            stroke("black");
//            strokeWeight(1);
//            fill("black");
//            ellipse(x - 10 ,y - 10,6,6);
//            
//            //right-eye
//            stroke("black");
//            strokeWeight(1);
//            fill("black");
//            ellipse(x + 10, y - 10,6,6);
//            
//            //mouth
//            fill("red");
//            arc(x, y, 20, 20, 0,PI, CHORD);
//            
/// emoji 2 (eye)///
//            stroke("grey");
//            strokeWeight(2);
//            fill("GhostWhite");
//            ellipse(x + 10, y - 10,20,32);
//            ellipse(x - 10, y - 10,20,32);
//            stroke("DarkGoldenRod");
//            strokeWeight(1);
//            fill("Sienna");
//            ellipse(x + 8, y - 8,12,12);
//            ellipse(x - 8, y - 8,12,12);
//            noStroke();
//            fill("white");
//            ellipse(x + 4, y - 10,4,4);
//            ellipse(x - 4, y - 10,4,4);
            
/// emoji 3 (money) ///
            

            
            
            r = random(200,255);
            g = random(230,255);
            b = random(230,255);
            //ear
            stroke("tan");
            strokeWeight(2);
            fill(r, g, b,);
            ellipse(x + 20, y - 15,12,20);
            ellipse(x - 20, y - 15,12,20);
            //face
            stroke("tan");
            strokeWeight(1);
            fill("Tan");
            ellipse(x, y-4 , 44, 44);
            //inner face
            stroke("black");
            strokeWeight(0);
            fill("Wheat");
            ellipse(x - 6 ,y - 6,20,20);
            ellipse(x + 6, y - 6,20,20);
            ellipse(x + 1, y + 1,25,25);
            //eye
            fill("dimgrey");
            ellipse(x + 5, y - 5,6,12);
            ellipse(x - 5, y - 5,6,12);
            //mouth
            fill("darkred");
            arc(x + 1, y + 5, 10, 10, 0,PI, CHORD);
         






            
            
		}
    }
  
}
