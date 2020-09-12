
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundSprite = new Ground(width/2, height-35, width,10);

	box1 = new Box(460,590,20,100);
	box2 = new Box(640,590,20,100);
	box3 = new Box(550,650,200,20);
  
	paper1 = new paper(100,600,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  box3.display();
  box1.display();
  box2.display();
 
  paper1.display();

  groundSprite.display();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 

	Matter.Body.applyForce(paper1.body, paper1.body.position,{x:20,y:-20}); 
	
	}
}
