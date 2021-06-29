var arrow;
var red;
var blue;
var green;
var pink;

var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
   pink_balloonImage = loadImage("pink_balloon0.png");
   blue_balloonImage = loadImage("blue_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  redB = new Group();
 blueB = new Group();
  pinkB = new Group();
 greenB = new Group();
  arrowGroup = new Group();
 
}

function draw() {
 background(0);
 
  if(arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score= score+2;
  }
  
  if(arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score= score+3;
  }
  
  if(arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score= score+1;
  }
  
  if(arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score= score+4;
  }
  
  
  
  
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space") ) {

    createArrow();  
  }
  
  
  
  //creating continous balloons
  
  var select_balloon = Math.round(random(1,4))
       
       if(World.frameCount % 100  == 0)
switch(select_balloon){
          case 1:  redBalloon();
          break;
          
          case 2: blueBalloon();
         break;
          
         case 3: pinkBalloon();
          break;
          
          case 4: greenBalloon();
          break;
      }

 
drawSprites();
  text("Score : "+ score, 270, 30);
}

// Creating  arrows for bow
 function createArrow() {
   arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
   arrowGroup.add(arrow);
}


function redBalloon() {
   red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
 red.addImage(red_balloonImage);
  redB.add(red);
  
  
}


 function blueBalloon() {
   blue = createSprite(0,Math.round(random(20, 370)), 10,10);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
    blue.addImage(blue_balloonImage);
   blueB.add(blue);
   
}

function greenBalloon() {
   green = createSprite(0,Math.round(random(20, 370)), 10,10);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  green.addImage(green_balloonImage);
  greenB.add(green);
  
}
function pinkBalloon() {
   pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.1;
  pink.addImage(pink_balloonImage);
  pinkB.add(pink);
}





       

