var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	//packageSprite.debug = true;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, height-20, width, 10 , {isStatic:true});
	World.add(world, ground);
	 
	Engine.run(engine);
  
	box1 = new Box(330,605,20,130);
	box2 = new Box(width/2,615,210,20);
	box3 = new Box(530,605,20,130);
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  
  packageSprite.x = packageBody.position.x; 
  packageSprite.y = packageBody.position.y; 

  pressed();

  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function pressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	Body.setStatic (packageBody,false);

	helicopterSprite.velocityX = 2;

  }
}



