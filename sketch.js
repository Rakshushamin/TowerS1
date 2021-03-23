const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground1,ground2;
var box1_11,box1_21,box1_22,box1_23,box1_31,box1_32,box1_33,box1_34,box1_35;
var box2_11,box2_21,box2_22,box2_23,box2_31,box2_32,box2_33,box2_34,box2_35;
var striker;
var slingshot;

function setup(){
    createCanvas(900,400);
    engine=Matter.Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(450,390,900,20);
    ground1=new Ground(710,200,250,20);
    ground2=new Ground(450,325,250,20);

    //ground1,box line3 
    box1_35=new Box(765,165,30,50);
    box1_34=new Box(740,165,30,50);
    box1_33=new Box(710,165,30,50);
    box1_32=new Box(680,165,30,50);
    box1_31=new Box(650,165,30,50);

    //ground1,box line2
    box1_23=new Box(740,115,30,50);
    box1_22=new Box(710,115,30,50);
    box1_21=new Box(680,115,30,50);
 
    //ground1,box line1
    box1_11=new Box(710,65,30,50);

    //ground2,box line3
    box2_35=new Box(505,290,30,50);
    box2_34=new Box(475,290,30,50);
    box2_33=new Box(445,290,30,50);
    box2_32=new Box(415,290,30,50);
    box2_31=new Box(385,290,30,50);

    //ground2,box line2
    box2_23=new Box(475,240,30,50);
    box2_22=new Box(445,240,30,50);
    box2_21=new Box(415,240,30,50);

    //ground2,box line1
    box2_11=new Box(445,190,30,50);

    striker=new Polygon(100,200,55,55);

    slingshot = new SlingShot(striker.body,{x:100, y:200});

}
function draw(){
    //Engine.update(engine);
    background("blue");
    ground.display();
    ground1.display();
    ground2.display();

    box1_35.display();
    box1_34.display(); 
    box1_33.display(); 
    box1_32.display();
    box1_31.display();

    box1_23.display();
    box1_22.display();
    box1_21.display();

    box1_11.display();

    box2_35.display();
    box2_34.display();
    box2_33.display();
    box2_32.display();
    box2_31.display();

    box2_23.display();
    box2_22.display();
    box2_21.display();

    box2_11.display();

    striker.display();

    slingshot.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(striker.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}