var sz = 40;
	var rot  = PI/8;
	var rot2 = rot/2;
	var ellipseXY = 100;

function setup() {
	createCanvas(640, 360);
	background(100);
}
	
function draw() {
   push();
	translate(width/2, height/2);
	rotate(rot);
	rect(0, 0, sz, sz);
	rotate(rot);
	rect(0, 0, sz, sz);
	rotate(rot);
	rect(0, 0, sz, sz);
	pop();
	
	ellipse(ellipseXY, ellipseXY, sz);
	rotate(rot2);
	ellipse(ellipseXY, ellipseXY, sz);
	rotate(rot2);
	ellipse(ellipseXY, ellipseXY, sz);
    
    ellipse(ellipseXY, ellipseXY, sz);
    roate(rot2)
    ellipse(ellipseXY, ellipseXY, sz);
    roate (rot2);
}
