var tom
var background
function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    tom_moving = loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 tom = createSprite(200,400,25,27);
 tom.addAnimation("moving",tom_moving);

 //background = createSprite(900,800,0,0);
 //background.addImage("garden",gardenImg)
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
