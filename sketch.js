var car,wall;
var speed,weight;
var l1,l2,l3;
var board;

function setup() {
  createCanvas(600,600);
  car = createSprite(30,300,50,30);
  wall = createSprite(450,300,40,100);
  l1 = createSprite(560,200,20,50);
  l2 = createSprite(560,300,20,50);
  l3 = createSprite(560,400,20,50);
  board = createSprite(600,300,60,300);

  speed = random(55,140);
  weight = random(400,1500);

  car.shapeColor = "blue";
  l1.shapeColor="white";
  l2.shapeColor="white";
  l3.shapeColor="white";
  board.shapeColor="black";
  wall.shapeColor="black";
}

function draw() {
  background("orange"); 
  car.velocityX=speed;

  Deformation = 0.5*weight*speed*speed/22500;
  


  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5*width*speed*speed/22509;
    if(deformation>180)
    {
      l3.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      l2.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      l1.shapeColor=color(0,255,0);
    }
  }


  drawSprites();
}