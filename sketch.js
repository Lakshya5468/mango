const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, chain, mango1, mango2, mango3, mango4, mango5, tree, boy, stone;

function preload() {
	
}

function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    tree=createSprite(600,)

    ground = new Ground(600,height,1200,20);

    //stone = new Stone()

    //chain=new Slingshot(stone,{x:190,y:50});

}

function draw(){
    background(backgroundImg);
    drawSprites();
    Engine.update(engine);
    ground.display();
}

function mouseDragged(){
    //Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    //chain.fly();
}

function detectColision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if (distance<=lmango.r+stone.r) {
        Matter.Body.setStatic(lmango.body,false)
    }
}