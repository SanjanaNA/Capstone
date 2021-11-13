
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

  bullet=loadImage("Bullet.png")
  battle=loadImage("Battlefeild.jpg")
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  

  battle = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, battle);

  bullet = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, bullet);

  
}


function draw() 
{
  background(189);
  image(battle, 0, 0, width, height);
  Engine.update(engine);
  
}

