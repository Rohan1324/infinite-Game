var PLAY = 1;
var gameState = PLAY;
var rocket,rocketImg
var backgroundImg
var obstacle1,obstacle2,obstaclesGroup,obstacleImg
var score=0;



function preload(){



backgroundImg = loadImage("background.png");
rocketImg = loadAnimation("rocket.gif");
obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");

}

function setup() {
    createCanvas(windowWidth,windowHeight)
 background = createSprite(width/2,height,width,2);
 background.addImage("background",backgroundImg);
 background.y = height/2
 background.velocityY = +3;

 rocket = createSprite(500,400,30,40)
 rocket.addAnimation("rocket",rocketImg);
 rocket.scale=0.5

 obstaclesGroup = new Group();
 score = 0;
}

function draw() {

  
  

  if (gameState===PLAY){
    rocket.x = World.mouseX;
    score = score + Math.round(getFrameRate()/60);
    background.velocityY = +(4 + 3* score/100)
    if (background.y>400){
      background.y = height/2
    }
  }

 spawnObstacles()
  

 drawSprites()
 textSize(20);
 fill(255);
 text("score: "+ score,10,30);
 }

 function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityY = +(6 + score/100);
    obstacle.setCollider('circle',0,0,45)
 obstacle.y=Math.round(random(100,300));
 obstacle.addImage(obstacleImg);

 var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      default: break;

    
 }
 obstaclesGroup.add(obstacle);
}
    
  
}
 
