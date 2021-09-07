const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;

var a1 = [1,2,3,4,5]
console.log(a1)

var balls = []


var name = "laasya"
var a2 = [name,1,true,"rithika"]
console.log(a2)

var a3 = [[1,2],[3,4],[5,6]]
console.log(a3)
console.log(a3[0])
console.log(a3[0][0])
console.log(a3[0][1])

a2.push("string")
a2.pop()

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
  cannon = new Cannon(180, 110, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  
  for (let i = 0; i < balls.length; i++) {
    showCannonballs(balls[i],i);
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length-1].shoot();
  }
}

function keyPressed() {
  if (keyCode == DOWN_ARROW){
    var cannonball = new CannonBall(cannon.x,cannon.y)
    balls.push(cannonball)
  }
}

function showCannonballs(ball,i) {
  if (ball) {
    ball.display()
  }
}