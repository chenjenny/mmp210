var x = 10;
var speed;

function setup() { 
	createCanvas(640, 440);
}
function draw() {
    	if (mouseIsPressed) {
        }
	background("SteelBlue");
    
    fill("beige");
    ellipse(x, 120, 35, 35);
    rect(x,97,115,30);
    ellipse(x, 100, 35, 35);
    ellipse(x, 100, 35, 35);
    ellipse(x, 100, 35, 35);
    ellipse(x+125, 100, 35, 35);
    ellipse(x+125, 120, 35, 35);



    textSize(25);
    fill("black");
	text("Pet Shop", x, 90,200,200);


   x += 1;

  if (x >= width) {
    x = 0;
    }
    
   


    var name = "JENNY'S"
    var textheight = 100;
    var boxtext = textFont("Chalkboard");
    var dogcolor = color("tan");
    var dogear = "p";
    var dogear2 = "q";
    var doghand = "U";
    var dogfeet = "n";
    var dot = 405;
    var dogtail = "0";
    var dogx = 270;
    var dogeyey = 195;
    var dogeary = 110;
    var doghandy = 250;
    var dogfeety = 300;
    var hi = color(0,0,0);
    var ellipseheight = 15;
    var ellipsewidth = 10;
    var bodyheight = 75;
    var bodywidth = 115;
    

    //DOG//
    //BODY//
    fill(dogcolor)
    stroke(hi)
    strokeWeight(3);
    rect(dogx,170,bodywidth,bodyheight);
    rect(dogx,245,bodywidth,bodyheight);
    //EYES//
    noStroke();
    fill(255,255,179)
    ellipse(355,195,30,35);
    fill(hi)
    noStroke();
    ellipse(300,dogeyey,ellipsewidth,ellipseheight);
    ellipse(350,dogeyey,ellipsewidth,ellipseheight);
    //NOSE//
    fill(hi)
    noStroke();
    ellipse(325,220,20,ellipseheight);
    //EAR//
    textSize(50);
	fill(hi);
    strokeWeight(0.5);
    textFont(boxtext);
	text(dogear,360,dogeary,width,height);
    text(dogear2,280,dogeary,width,height)
    //HAND//
    textSize(30);
    textFont("Helvetica");
	text(doghand,365,doghandy,width,height);
    text(doghand,275,doghandy,width,height);
    //FEET//
    textSize(25);
	text(dogfeet,365,dogfeety,width,height);
    text(dogfeet,285,dogfeety,width,height);
    //TAIL//
    textSize(30);
    text(dogtail,385,280,width,height);
    // END OF DOG //
    
    //NAME//
    textSize(65);
	fill("snow");
	noStroke();
	textFont("Comic Sans MS");
	text(name,160,5, 20,textheight);
    // END OF NAME //
    


   
}