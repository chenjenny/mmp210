    function setup() { 
	createCanvas(640, 360);
    background("darkred");
    fill(255);
        
    var w = 50;
	for (var x = 150; x < width; x += w + column) {
		myWindow(x,, w, 50, 2);
	}
//	
//	myWindow(100, 100, 200, 300, 20);
//	myWindow(350, 10, 200, 300, 20);
//	
//}
//
//function myWindow(x, y, w, h, m) {
//	fill(0);
//	rect(x, y, w, h);
//	
//	/* window panes */
//	fill(255);
//	rect(x + m, y + m, w/2 - m/2, h/2 - m/2);
//	rect(x + m + w/2, y + m, w/2 - m/2, h/2 - m/2);
//	rect(x + m, y + m + h/2, w/2 - m/2, h/2 - m/2);
//	rect(x + m + w/2, y + m + h/2, w/2 - m/2, h/2 - m/2);
//}
 
    var column = width/4;
    var row = height/3;

    //brick building
	rectMode(CENTER);
	for (var x = 150; x <= width; x += column) {
//		line(x, 0, x, height);
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
            fill("saddlebrown");
            rect(x,y + 30,110,10)        
		}
    }

    //windows
    
//    //outside//
    noStroke();
	fill("grey");
	rect(40,100,80,550);
    rect(600,100,80,550);
    
}


    
   
    







    


  






