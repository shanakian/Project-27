
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 100, 100, 20);

	bobObject1 = new Ball(360, 150);
	bobObject2 = new Ball(380, 150);
	bobObject3 = new Ball(400, 150);
	bobObject4 = new Ball(420, 150);
	bobObject5 = new Ball(440, 150);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}



