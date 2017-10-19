function setup() { 
	createCanvas(640, 360);
    background("darkred");
    fill(255);
    
    //brick building
    var space = 50;
//    for (var x = 50; x < width; x += space) 
        

    
    //windows 
//    var windowx = 150;
//    var windowy = 50;
//    var windowh = 90;
//    var windowl = 60;
//    var window2y = 130;

    var column = width/4;
    var row = height/3;
    
    //brick building
	rectMode(CENTER);
	for (var x = 150; x <= width; x += column) {
		line(x, 0, x, height);
		for (var y = 50; y <= height; y += row) {
            
            // bricks
			//line(0, y, width, y);
            
            //windows
            stroke("black");
            strokeWeight(2);
            fill("powderblue");
            rect(x,y,90,60);
             noStroke();
            strokeWeight(2);
            fill("saddlebrown ");
            rect(x,y + 30,110,10)

            //face
            stroke("black");
            strokeWeight(1);
            fill("yellow");
            ellipse(x, y-4 , 44, 44);
            
            //left-eye
            stroke("black");
            strokeWeight(1);
            fill("black");
            ellipse(x - 10 ,y - 10,6,6);
            
            //right-eye
            stroke("black");
            strokeWeight(1);
            fill("black");
            ellipse(x + 10, y - 10,6,6);
            
            //mouth
            fill("red");
            arc(x, y, 20, 20, 0,PI, CHORD);
            
            
		}
    }

    //windows 
    
    
    //outside
    noStroke();
	fill("grey");
	rect(40,100,80,550);
    rect(600,100,80,550);
    
    
//        windowx = windowx +110;
//    rect(windowx + 110,windowy,windowh,windowl);
//    rect(windowx + 220,windowy,windowh,windowl);
//    rect(windowx + 330,windowy,windowh,windowl);
//    
//    rect(window6,130,windowh,windowl);
//    rect(windowx + 110,window2y,windowh,windowl);
//    rect(windowx + 220,window2y,windowh,windowl);
//    rect(windowx + 330,window2y,windowh,windowl);
   
   

    
    
}





    
   
    







    


  






