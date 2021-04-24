const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){

  backgroundImg = loadImage("snow1.jpg")
  snowmanImg = loadImage("snowman.png")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  snowman = createSprite(400, 200, 50, 50);
  snowman.addImage(snowmanImg)
  snowman.scale = 0.5

  snowfall = new Snow(700, 50, 50)
  snowfall1 = new Snow(400, 100, 50)
  snowfall2 = new Snow(100, 75, 50)
  snowfall3 = new Snow(550, 25, 50)
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)

  snowfall.display()
  snowfall1.display()
  snowfall2.display()
  snowfall3.display()


  drawSprites();
}