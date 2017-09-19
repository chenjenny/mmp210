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
    var dogear = "p";
    var dogear2 = "q";
    var doghand = "U";
    var dogfeet = "n";
    var dogtail = "0";
    var catmouth = "w";
    var cattail = "S";
    var catwhisker = "=";
    var cathand = "V";
    var catfeet = "U";
    var catear = "^";


    // BUNNY //
    //FOOT//
    fill("pink")
    stroke("black")
    strokeWeight(1);
    ellipse(110,350,80,20);
    ellipse(190,350,80,20);
    line(70,350,100,350);
    line(200,350,230,350);
    //HAND//
    fill("pink")
    stroke("black")
    strokeWeight(1);
    ellipse(105,270,20,100);
    ellipse(195,270,20,100);
    //EAR//
    fill("pink")
    stroke("black")
    strokeWeight(1);
    ellipse(105,130,20,100);
    ellipse(195,130,20,100);
    fill("white")
    noStroke();
    ellipse(105,140,10,85);
    ellipse(195,140,10,85);
    //BODY//
    fill("pink")
    stroke("black")
    strokeWeight(1);
    ellipse(150,270,90,170);
    fill("white")
    noStroke();
    ellipse(150,280,70,115);
    //FACE//
    fill("pink")
    stroke("black")
    strokeWeight(1);
    ellipse(150,180, 90,110);
    //NOSE//
    
    //EYE//
    fill("black")
    noStroke();
    ellipse(135,170,20,30);
    ellipse(160,170,20,30);
    fill("white")
    ellipse(135,165,5,10);
    fill("white")
    ellipse(160,165,5,10);
    // END OF BUNNY //
    
    //DOG//
    //BODY//
    fill("tan")
    stroke("black")
    strokeWeight(3);
    rect(270,170,115,75);
    rect(270,245,115,75);
    //EYES//
    noStroke();
    fill(255,255,179)
    ellipse(355,195,30,35);
    fill("black")
    noStroke();
    ellipse(300,195,10,15);
    ellipse(350,195,10,15);
    //NOSE//
    fill("black")
    noStroke();
    ellipse(325,220,20,15);
    //EAR//
    textSize(50);
	fill("black");
    strokeWeight(0.5);
    textFont("Chalkboard");
	text(dogear,360,110, 300,100);
    text(dogear2,280,110, 300,100)
    //HAND//
    textSize(30);
    textFont("Helvetica");
	text(doghand,365,250,300,100);
    text(doghand,275,250,300,100);
    //FEET//
    textSize(25);
	text(dogfeet,365,300,300,100);
    text(dogfeet,285,300,300,100);
    //TAIL//
    textSize(30);
    text(dogtail,385,280,300,100);
    // END OF DOG //
    
    // CAT //
    //TAIL//
    textSize(65);
	fill(217,217,217);
	stroke("black");
    strokeWeight(5);
	textFont("Comic Sans MS");
	text(cattail,580,245, 20, 100);
    //BODY//
    fill(217,217,217)
    stroke("black")
    strokeWeight(3);
    rect(470,170,115,75);
    rect(470,245,115,75);
    //EYE//
    fill(255,255,102);
    noStroke();
    ellipse(550,195,10,15);
    ellipse(500,195,10,15);
    //WHISKER//
    textSize(20);
    fill("black");
    textFont("Arial")
    text(catwhisker,465,215,300,100);
    text(catwhisker,580,215,300,100);
    //NOSE//
    fill("deeppink");
    noStroke();
    ellipse(525,210,20,15);
    //MOUTH//
    fill("darkturquoise");
    textSize(25);
    textFont("Gillsans");
    text(catmouth,515,215,300,100);
    //HAND//
    fill("black");
    textFont("Arial")
    text(cathand,475,255,300,100);
    text(cathand,560,255,300,100);
    //FEET//
    textSize(25);
	text(catfeet,545,300,300,100);
    text(catfeet,495,300,300,100);
    //catear//
    textSize(45);
    text(catear,560,145, 300,100);
    text(catear,480,145, 300,100)
    // END OF CAT //
    

    
    


    //NAME//
    textSize(65);
	fill(148,0,211);
	noStroke();
	textFont("Comic Sans MS");
	text(name,160,5, 20, 100);

    // PET SHOP //

    // P > Pet Shop
    noStroke();
    fill(6,106,241);
    rect(530,390, 60, 55, 20);
    textSize(50);
	fill("white");
	noStroke();
	textFont("Chalkboard");
	text(box1,545,390, 300, 100);
    // O > Pet Shop
    noStroke();
    fill("red");
    rect(450,390, 60, 55, 20);
    // foot print 
    fill("black");
    noStroke();
	ellipse(460,405,10,15);
    ellipse(480,395,10,15);
    ellipse(500,405,10,15);  
    textSize(50);
	fill("black");
	noStroke();
	textFont("Chalkboard");
	text(box2,460,390, 300, 100);  
    // H > Pet Shop
    noStroke();
    fill(106,205,69);
    rect(370,390, 60, 55, 20);
    textSize(50);
	fill("white");
	noStroke();
	textFont("Chalkboard");
	text(box3,385,390, 300, 100);
    // S > Pet Shop
    noStroke();
    fill(67,201,240);
    rect(290,390, 60, 55, 20);
    textSize(50);
	fill("white");
	noStroke();
	textFont("Chalkboard");
	text(box4,300,390, 300, 100);
    // T > Pet Shop
    noStroke();
    fill(174,83,255);
    rect(210,390, 60, 55, 20);
    textSize(50);
	fill("white");
	noStroke();
	textFont("Chalkboard");
	text(box5,225,390, 300, 100);
    // E > Pet Shop
    noStroke();
    fill(46,218,54);
    rect(130,390, 60, 55, 20);
    textSize(50);
    fill("white");
    noStroke();
    textFont("Chalkboard");
    text(box6,145,390,300,100)
    // P > Pet Shop
    noStroke();
    fill("red");
    rect(050,390, 60, 55, 20);
    textSize(50);
    fill("white");
    noStroke();
    textFont("Chalkboard");
    text(box7,60,390,300,100)
    // END OF PET SHOP //

    
    
    // BORDERS //
    noFill();
    stroke("dodgerblue");
    strokeWeight(8);
	rect(2,2,630,470);


    
   
}