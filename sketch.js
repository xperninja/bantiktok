function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");

  console.log(mouseX,mouseY);

  hr=hour();
  mn=minute();
  sc=second();
  
 angleMode(DEGREES);

 scAngle=map(sc,0,60,0,360);
 mnAngle=map(mn,0,60,0,360);
 hrAngle=map(hr%12,0,60,0,360);
/*
stroke(255,0,0);
strokeWeight(7);
//rotate(scAngle);
scLine=line(400,200,450,150);

stroke(139,48,176);
//rotate(mnAngle);
mnLine=line(400,200,360,170);

stroke(226, 255, 96);
//rotate(hrAngle);
hrLine=line(400,200,470,180);
*/
fill("white");
ellipse(400,400,450,450);


//second hand
  translate(400,400);
  rotate(-80);//-90
  push();
  rotate(scAngle);
  stroke("blue"); 
  strokeWeight(4);
  line(0,0,190,0);
  pop();


  //minute hand
  translate(0,0);
  rotate(-10);//-180
  push();
  rotate(mnAngle);
  stroke("red"); 
  strokeWeight(5);
  line(0,0,175,0);
  pop();

 //hour hand
  translate(0,0);
  rotate(180);//180
  push();
  rotate(hrAngle);
  stroke("green"); 
  strokeWeight(6);
  line(0,0,130,0);
  pop();
/*
  rotate(radians(scAngle));
  arc(0, 0, 220, 220, 0, radians(scAngle));
  rotate(radians(mnAngle));
  arc(0, 0, 230, 230, 0, radians(mnAngle));
 */

  drawSprites();
}
