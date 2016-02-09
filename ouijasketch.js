//Moving sprites
var bats; 
var bat2;
var batCounter = 0;
var direction = 90; //circle initial direction moving down
var enterLink;

function setup() {
  createCanvas(windowWidth,windowHeight);
  //canvas.style("display","none");
  background(0,0,0,255);
  //create the sprites
  bats = createSprite(600, 200, 50, 100);
  bats.addAnimation("floating", "img/planchette.png");
  
  bat2 = createSprite(400, 200, 50, 100);
  bat2.addAnimation("floating", "img/batspng/Untitled-20000.png", "img/batspng/Untitled-20078.png");
  
    for(var i=0; i<allSprites.length; i++)
    {
    var mySprite = allSprites[i];

    }
  
}

function draw() {
  clear()
  background(0,0,0,batCounter*20);  
  
  //aside of setting the velocity directly you can move a sprite
  //by providing a speed and an angle
 // direction += 2;
  //speed, angle
  bat2.setSpeed(3, direction);
  
  //you can rotate the sprite according the directio it is moving
  //uncomment this
  //bat2.rotateToDirection = true;
  
  //or by applying a force toward a point
  //force (acceleration), pointx, pointy
  bats.attractionPoint(.2, mouseX, mouseY);
  //since the force keeps incrementing the speed you can 
  //set a limit to it with maxSpeed
  bats.maxSpeed = 8;
  
  //draw the sprite
  drawSprites();
  
  if (batCounter == 13){
  enterLink = createA ('jojihome/index.html'),("enter");
  enterLink.style("font-size", "72pt");
  enterLink.position(windowWidth/2,windowHeight/2);
  }
  
}

function mousePressed() {
//I create a sprite at mouse position
var newBat = createSprite(mouseX, mouseY);

//assign an animation
newBat.addAnimation("floating", "img/batspng/Untitled-20000.png", "img/batspng/Untitled-20078.png");


var f = round(random(0, newBat.animation.getLastFrame()));
newBat.animation.changeFrame(f);
batCounter++;
}

