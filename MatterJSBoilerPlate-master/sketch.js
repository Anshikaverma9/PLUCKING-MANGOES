const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var mango1;
var boy1;
var stone;
var rope1;

var gameState = "onSling";

function preload()
{
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,370,1200,30);
	boy1 = new Boy(200,320);
	tree1 = new Tree(700,200);
	mango1 = new Mango(800,200);
	mango2 = new Mango(600,150);
	mango3 = new Mango(700,130);
	mango4 = new Mango(750,80);
	mango5 = new Mango(790,150);
	mango6 = new Mango(670,60);
	mango7 = new Mango(650,130);
	stone = new Stone(145,275);
	rope1 = new Rope(stone.body, { x: 145, y: 275 });

}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  ground.display();
  boy1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
 rope1.display();
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
  }

  function mouseReleased(){
    rope1.fly();
    gameState = "launched";
}
