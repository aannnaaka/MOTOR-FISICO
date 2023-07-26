
const Motor = Matter.Engine;
const Mundo = Matter.World;
const Cuerpos = Matter.Bodies;
const Cuerpo = Matter.Body;

let universo_motor;
let tierra;
let pelota;

function setup()
{
  createCanvas(400,400);

  var ops_pelota= {
    restitution: 0.95,
    frictionAir:0.01
    }
    
  universo_motor = Motor.create();
  tierra = universo_motor.world;
  pelota = Cuerpos.circle(100,10,20,ops_pelota);
  Mundo.add(tierra,pelota);

 




}

function draw() 
{
  Motor.update(universo_motor);

  background(51);
 
  ellipse(pelota.position.x,pelota.position.y,20);
}

