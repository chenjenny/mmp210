function setup() { 
	createCanvas(640, 360);
    background("darkred");
    fill(255);
    
    //brick building
    var space = 50;
    for (var x = 50; x < width; x += space) 
        
    var column = 40;
    var row = 20;
    
    //windows 
    var windowx = 150;
    var windowy = 50;
    var windowh = 90;
    var windowl = 60;
    var window2y = 130;

    
    
    //brick building
	rectMode(CENTER);
	for (var x = 0; x <= width; x += column) {
		line(x, 0, x, height);
		for (var y = 0; y <= height; y += row) {
			line(0, y, width, y);
		}
    }

    //windows 
    
    
    //outside
    noStroke();
	fill("grey");
	rect(40,100,80,550);
    rect(600,100,80,550);
    
    //windows
    stroke("black");
    strokeWeight(2);
    fill("ghostwhite");
    rect(windowx,windowy,windowh,windowl);
        //windowx = windowx +110;
    rect(windowx + 110,windowy,windowh,windowl);
    rect(windowx + 220,windowy,windowh,windowl);
    rect(windowx + 330,windowy,windowh,windowl);
    
    rect(windowx,130,windowh,windowl);
    rect(windowx + 110,window2y,windowh,windowl);
    rect(windowx + 220,window2y,windowh,windowl);
    rect(windowx + 330,window2y,windowh,windowl);


    

    
    
    



    
    
}





    
   
    







    


  






