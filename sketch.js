const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bola, solo;

function setup() {
  createCanvas(400,400);
  
  //motor e mundo
  engine = Engine.create();
  world = engine.world;
  
  //corpo da bola
  var bola_options = {
    restitution: 1,
    frictionAir: 0.005
  }
  bola = Bodies.circle(100,50,25, bola_options);
  World.add(world, bola);
  
  //corpo do solo
  var solo_options = {
    isStatic: true
  }
  solo = Bodies.rectangle(200,400,400,50, solo_options);
  World.add(world, solo);
}

function draw() {
  background(0);
  
  //atualizando motor
  Engine.update(engine);
  
  //desenho da bola
  ellipseMode(RADIUS);
  ellipse(bola.position.x,bola.position.y,25);
  
  //adicionando cor a tudo o que vem depois
  fill("dodgerblue")
  
  //desenho do solo
  rectMode(CENTER);
  rect(solo.position.x,solo.position.y,400,50);
}

