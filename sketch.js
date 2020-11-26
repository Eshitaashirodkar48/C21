var fixedRect, movingRect;
var gameObject1;
var rectObject1, rectObject2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  rectObject1=createSprite(250,100,50,20);
  rectObject1.shapeColor="green";
  rectObject1.velocityY = 5;
  rectObject2=createSprite(250,800,20,60);
  rectObject2.shapeColor="green";
  rectObject2.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1))
  {gameObject1.shapeColor="red";
  movingRect.shapeColor="red";

  }
  else{
    gameObject1.shapeColor="green";
    movingRect.shapeColor="green";
  }
  bounceOff(rectObject1,rectObject2);
  drawSprites();
}

