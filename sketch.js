
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800, 680, 1600, 20);
	paper = new Paper(200, 450, 40);
	dustbin = new Dustbin(1200, 620);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine)

  
  dustbin.display();
  paper.display();
  ground.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:65, y:-85})
	}
}

