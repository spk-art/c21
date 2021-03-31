var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  c = createSprite(400, 100, 50, 80);
  c.shapeColor = "green";
  c.debug = true;
  d = createSprite(400, 800,80,30);
  d.shapeColor = "blue";
  d.debug = true;
  a = createSprite(100,400,100,100);
  a.shapeColor = "pink";
  b = createSprite(900,400,100,100);
  b.shapeColor = "red";
  a.velocityX = +5
  b.velocityX = -5
  c.velocityY = 5;
  d.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  bounceoff(a,b);
  
 
  drawSprites();
}
 function bounceoff(fixedRect,movingRect){

  if (movingRect.X - fixedRect.X < fixedRect.width/2 + movingRect.width/2
    && fixedRect.X - movingRect.X < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}
}