// self portrait
function setup() { 
	createCanvas(640, 480);
	background("aliceblue");
	
    
    //leg
    fill("gray");
    rect(350,360,30,90)
    rect(250,360,30,90)

    //arm
    line(220,190,170,165);   
    line(220,80,170,165);    
    line(500,220,255,160);
    line(500,220,570,165);


    //body
    fill("gainsboro");
	rect(210,160, 210, 220);
    
    
    //antenna
    fill("grey");
    rect(310,20,5,60)
    
    //atennaball
    fill("red")
    ellipse(313, 18, 15, 16);
    
    //neck
    fill("grey");
    rect(300,60,30,100)
	
	// head
	fill("gainsboro");
	rect(260, 60, 110, 80);
	
	// eyes
        
	fill("lightslategray");
	rect(280, 75, 25, 25);
    fill("deepskyblue")
    ellipse(295, 90, 15,16);
	rect(330, 75, 25, 25);
    fill("lightslategray");
    ellipse(345, 90, 15,16);


	// mouth
	fill("cornsilk");
    rect(280, 118, 10, 10);
    rect(290, 118, 10, 10);
    rect(300, 118, 10, 10);
    rect(310, 118, 10, 10);
    rect(320, 118, 10, 10);
    rect(330, 118, 10, 10);
    rect(340, 118, 10, 10);

	// nose
    fill("gold");
    triangle(320,100, 310, 100, 315, 90);

    
	// ear
   
    
   
    
    
  
    
    
    
   
}