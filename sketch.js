var ball
var ground
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
	ground1 = new Ground(400,680,800,20)
	ground2 = new Ground(400,600,20,150);
	ground3 = new Ground (600,600,20,150);
	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
	    restitution:1
	}
	ball = Bodies.circle(15,10,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipse (ball.position.x,ball.position.y,20)
  ground1.display ()
  ground2.display ()
  ground3.display ()
  drawSprites();
 
}

function keyPressed (){
	Matter .Body.applyForce(ball,{x:0,y:0},{x:0.03,y:-0.003});
  }



