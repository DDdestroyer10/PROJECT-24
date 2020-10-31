
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,b2,b3;
var gr;
var pa;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	b1 = new dustbin(650,670,200,20)
	b2 = new dustbin(550,620,20,100)
	b3 = new dustbin(750,620,20,100)
	gr = new ground(400,690,800,20)
	pa = new paper(200,670,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  

  b1.display();
  b2.display();
  b3.display();
  gr.display();
  pa.display();
  paperSprite.x= paperObject.position.x 
  paperSprite.y= paperObject.position.y 

  drawSprites();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW)

   Matter.Body.applyForce(pa.body,pa.body.position,{x:85,y:-85});

}
