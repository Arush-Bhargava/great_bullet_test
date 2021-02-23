var bullet,wall,thickness;
var speed,weight;
var deformation;

function preload(){

}

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83)
  speed = random(50,90);
  weight = random(400,1500);

  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = "80,80,80"
 
  deformation = speed*speed*weight/45000;

}

function draw() {
  background("pink");  

bullet.velocityX = speed;

textSize(50);
fill ("blue");

if (bullet.isTouching(wall)){
 
if (deformation<80){
  bullet.shapeColor =(" blue");
  text("Below Average",700,200);
} else if(deformation > 80 && deformation < 150){
  bullet.shapeColor =("yellow");
  fill("yellow");
  text("Average",700,200);
} else if(deformation > 150){
  bullet.shapeColor = ("red");
  fill("red");
  text("Lethal",700,200);
}
  bullet.velocityX = 0;
}

  drawSprites();
}