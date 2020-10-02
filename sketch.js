
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;


function setup(){
    angleMode(DEGREES);

    var canvas = createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(650,690,150,20);
    box2 = new Box(735,610,20,100);
    box3 = new Box(565,610,20,100);
    ground = new Ground(200,height,1700,30);
    paper= new Paper(165,300);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
    paper.display();
   // keyPressed(paperObject)
}

function keyPressed(){
    if (keyWentDown === UP_ARROW){
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
    }
}