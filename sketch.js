
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.  
	roof = new Roof(400,200,600,20);
	bobObject1 = new Bob(150,500,30,30); 
	bobObject2 = new Bob(210,500,30,30);  
	bobObject3 = new Bob(270,500,30,30); 
	bobObject4 = new Bob(330,500,30,30); 
	bobObject5 = new Bob(390,500,30,30); 
	rope1= new Rope(bobObject1.body,roof.body,-250,0);
	rope2 = new Rope(bobObject2.body,roof.body,-190,0);
	rope3 = new Rope(bobObject3.body,roof.body,-130,0); 
	rope4 = new Rope(bobObject4.body,roof.body,-70,0);
	rope5 = new Rope(bobObject5.body,roof.body,-10,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225); 
  roof.display(); 
  bobObject1.display(); 
  bobObject2.display(); 
  bobObject3.display();
  bobObject4.display();
  bobObject5.display(); 
  rope1.display(); 
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}


function keyPressed(){ 
    if (keyCode === UP_ARROW){ 
		console.log("working");
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); 
		

	} 
}
