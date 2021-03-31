
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;

function setup() {
	createCanvas(8000, 7000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("beige");
  
  bob1 = new Bob(900,1000,70,70);
  bob2 = new Bob(1100,1000,70,70);
  bob3 = new Bob(1300,1000,70,70);
  bob4 = new Bob(1500,1000,70,70);
  bob5 = new Bob(1700,1000,70,70);

  bob1.display();
  bob2.display();
  bob3.display();  
  bob4.display();
  bob5.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode===37){
bob1.setPosition(bob2)
}
if(keyCode===39){
bob5.setPosition(bob4)

}

}

