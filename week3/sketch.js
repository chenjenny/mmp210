// self portrait
function setup() { 
	createCanvas(640, 480);}
function draw() {
	background("Azure")
    
    
    var name = "JENNY'S"
    var box1 = "P";
    var box2 = "O";
    var box3 = "H";
    var box4 = "S";
    var box5 = "T";
    var box6 = "E";
    var box7 = "P";
    var round = 60;
    var round1 = 55;
    var round2 = 20;
    var boxy = 390;
    

    var textheight = 100;
    var boxtext = textFont ("Chalkboard");
    
    var dogcolor = color ("tan");
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
    
    
    var catmouth = "w";
    var cattail = "S";
    var catwhisker = "=";
    var cathand = "V";
    var cathandy = 255;
    var catfeet = "U";
    var catfeety = 300;
    var catear = "^";
    var cateary = 145;
    var catx =470;
    var cateyey = 195;
    var cateyecolor = color (255,255,102);
    var catwhiskery = 215;
    var cattalk = 560;
    var fillthecat = color(217,217,217);
    
    var pigbodyx = "75";
    var pigeye = "U";
    var pigtail = "@";
    var pigfeet = "W";
    var pighand = ">";
    var pighand2 = "<";
    var pigear = "v";
    var colorpig = color ("pink");
    var colorpignose = color ("deeppink");
    var pigtextheight = 75;
    var pigtextwidth = 115;
    var pigtexty = 195;
    var pignosey = 220;

  
    var hi = color (0,0,0);
    var bye = color (255, 255, 255);
    var height = 100;
    var width = 300;
    var ellipseheight = 15;
    var ellipsewidth = 10;
    var bodyheight = 75;
    var bodywidth = 115;
    var apple = color ("red");
    

    

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
    
    // CAT //
    //TAIL//
    textSize(65);
	fill(fillthecat);
	stroke(hi);
    strokeWeight(5);
	textFont("Comic Sans MS");
	text(cattail,580,245, 20,height);
    //BODY//
    fill(fillthecat)
    stroke(hi)
    strokeWeight(3);
    rect(catx,170,bodywidth,bodyheight);
    rect(catx,245,bodywidth,bodyheight);
    //EYE//
    fill(cateyecolor);
    noStroke();
    ellipse(550,cateyey,ellipsewidth,ellipseheight);
    ellipse(500,cateyey,ellipsewidth,ellipseheight);
    fill(hi);
    ellipse(550,cateyey,5,12);
    fill("green");
    ellipse(500,cateyey,5,12);
    //WHISKER//
    textSize(20);
    fill(hi);
    textFont("Arial")
    text(catwhisker,465,catwhiskery,width,height);
    text(catwhisker,580,catwhiskery,width,height);
    //NOSE//
    fill(colorpignose);
    noStroke();
    ellipse(525,210,20,15);
    //MOUTH//
    fill("darkturquoise");
    textSize(25);
    textFont("Gillsans");
    text(catmouth,515,215,width,height);
    //HAND//
    fill(hi);
    textFont("Arial")
    text(cathand,475,cathandy,width,height);
    text(cathand,cattalk,cathandy,width,height);
    //FEET//
    textSize(25);
	text(catfeet,545,catfeety,width,height);
    text(catfeet,495,catfeety,width,height);
    //catear//
    textSize(45);
    text(catear,cattalk,cateary, width,height);
    text(catear,480,cateary, width,height);
    // END OF CAT //
    
    //PIG//
    //BODY//
    fill(colorpig)
    stroke(hi)
    strokeWeight(3);
    rect(pigbodyx,170,bodywidth,bodyheight);
    rect(pigbodyx,245,bodywidth,bodyheight);
    //NOSE//
    fill(colorpignose)
    ellipse(130,pignosey,45,20);
    fill(hi);
    ellipse(125,pignosey,3,10);
    ellipse(135,pignosey,3,10);
    //EYE//
    textSize(15);
    noStroke();
    textFont("Helvetica")
    text(pigeye,95,pigtexty,pigtextwidth,pigtextheight);
    text(pigeye,155,pigtexty,pigtextwidth,pigtextheight);
    //TAIL//
    textSize(20);
    stroke(2);
    fill(colorpig)
    text(pigtail,54,290,pigtextwidth,pigtextheight)
    //FEET//
    noStroke();
    textSize(15);
    fill(hi)
    text(pigfeet,95,305,pigtextwidth,pigtextheight)
    text(pigfeet,150,305,pigtextwidth,pigtextheight)
    //HAND//
    textSize(25);
    textFont("Helvetica");
    text(pighand,95,260,width,height);
	text(pighand2,150,260,width,height);
    //EAR//
    textSize(35);
    text(pigear,85,160, width,height);
    text(pigear,155,160, width,height);
    //END OG PIG//
    
    
    //NAME//
    textSize(65);
	fill(148,0,211);
	noStroke();
	textFont("Comic Sans MS");
	text(name,160,5, 20,textheight);
    // END OF NAME //

    // PET SHOP //
    // P > Pet Shop
    noStroke();
    fill(6,106,241);
    rect(530,boxy,round,round1,round2);
    textSize(50);
	fill(bye);
	noStroke();
	textFont(boxtext);
	text(box1,545,boxy,width,textheight);
    // O > Pet Shop
    noStroke();
    fill(apple);
    rect(450,boxy,round,round1,round2);
    // foot print 
    fill(hi);
    noStroke();
	ellipse(460,dot,ellipsewidth,ellipseheight);
    ellipse(480,395,ellipsewidth,ellipseheight);
    ellipse(500,dot,ellipsewidth,ellipseheight);  
    textSize(50);
	fill(hi);
	noStroke();
	textFont(boxtext);
	text(box2,460,boxy, width, textheight);  
    // H > Pet Shop
    noStroke();
    fill(106,205,69);
    rect(370,boxy, round,round1,round2);
    textSize(50);
	fill(bye);
	noStroke();
	textFont(boxtext);
	text(box3,385,boxy, width, textheight);
    // S > Pet Shop
    noStroke();
    fill(67,201,240);
    rect(290,boxy,round,round1,round2);
    textSize(50);
	fill(bye);
	noStroke();
	textFont(boxtext);
	text(box4,300,boxy, width, textheight);
    // T > Pet Shop
    noStroke();
    fill(174,83,255);
    rect(210,boxy,round,round1,round2);
    textSize(50);
	fill(bye);
	noStroke();
	textFont(boxtext);
	text(box5,225,boxy, width, textheight);
    // E > Pet Shop
    noStroke();
    fill(46,218,54);
    rect(130,boxy,round,round1,round2);
    textSize(50);
    fill(bye);
    noStroke();
    textFont(boxtext);
    text(box6,145,boxy,width,textheight)
    // P > Pet Shop
    noStroke();
    fill(apple);
    rect(050,boxy,round,round1,round2);
    textSize(50);
    fill(bye);
    noStroke();
    textFont(boxtext);
    text(box7,60,boxy,width,textheight)
    // END OF PET SHOP //
 
    // BORDERS //
    noFill();
    stroke("dodgerblue");
    strokeWeight(8);
	rect(2,2,630,470);


    
   
}