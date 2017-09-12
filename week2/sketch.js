// self portrait
function setup() { 
	createCanvas(640, 480);
	background("aliceblue");
    
    
    var mouthcolor = color(255, 248, 220);
    var bodycolor = color(220,220,220);
    var legcolor = color(128,128,128);
    var atennaballcolor = color(255,0,0);   
    var nosecolor = color(255,215,0);  
    var headcolor = color (220,220,220);
    var eyecolor1= color (119,136,153);    
    var eyecolor2 = color (0,191,255);
    var footcolor= color (0,0,0);

    
    
    //leg
    fill(legcolor);
    rect(350,360,30,90);
    rect(250,360,30,90);
    
    //arm
    line(220,190,170,165);   
    line(220,80,170,165);    
    line(500,220,255,160);
    line(500,220,570,165);

    //body
    fill(bodycolor);
	rect(210,160, 210, 220);
    
    //antenna
    fill(legcolor);
    rect(310,20,5,60)
    
    //atennaball
    fill(atennaballcolor)
    ellipse(313, 18, 15, 16);
    
    //neck
    fill(legcolor);
    rect(300,60,30,100)
	
	// head
	fill(headcolor);
	rect(260, 60, 110, 80);
	
	// eyes   
	fill(eyecolor1);
	rect(280, 75, 25, 25);
    fill(eyecolor2)
    ellipse(295, 90, 15,16);
	rect(330, 75, 25, 25);
    fill(eyecolor1);
    ellipse(345, 90, 15,16);

	// mouth
	fill(mouthcolor);
    rect(280, 118, 10, 10);
    rect(290, 118, 10, 10);
    rect(300, 118, 10, 10);
    rect(310, 118, 10, 10);
    rect(320, 118, 10, 10);
    rect(330, 118, 10, 10);
    rect(340, 118, 10, 10);

	// nose
    fill(nosecolor);
    triangle(320,100, 310, 100, 315, 90);

    //foot
    fill(footcolor)
    ellipse (255,445, 60, 20);
    ellipse (375,445, 60, 20);

    
	// ear
   
    
   
    
    
  
    
    
    
   
}