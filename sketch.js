
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,stone1,mango1,mango2,mango3,tree1,ground1,launcher,treeimage;

function preload()
{

boy=loadImage("sprites/Plucking mangoes/boy.png")
treeimage=loadImage("sprites/Plucking mangoes/tree.png")
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   
  stone1 = new Stone(150,450,30);
 
	ground1= new Ground (500,600,1000,20)
  //tree1=new Tree(700,355,500,500);

  
  
  tree1=createSprite(700,350);
  tree1.scale=0.4
  tree1.addImage(treeimage);

	mango1=new Mango(700,400,25,25);
	mango2=new Mango(650,260,25,25);
  mango3=new Mango(750,250,25,25);
  
	launcher=new Launcher(stone1.body,{x:200,y:450});
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(42,214,51);

   
   drawSprites();
  stone1.display();
  image(boy,200,340,200,300);
  ground1.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  launcher.display(); 
  
  
  detectcollison(stone1,mango1);
  detectcollison(stone1,mango2);
  detectcollison(stone1,mango3);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(stone1.body,{x:150,y:500})
        launcher.attach(stone1.body);
    }

}

function  detectcollison(lstone,lmango){
  mangoBodyPosition =  lmango.body.position;
  stoneBodyPosition  =  lstone.body.position;

  var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false)
  }
}
