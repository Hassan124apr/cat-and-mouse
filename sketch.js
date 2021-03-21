var tom,jery;
var cat;
var bg;
var tomI,jerryI;

function preload() {
    //load the images here
    cat=loadAnimation("images/cat2.png","images/cat3.png");
    bg=loadImage("images/garden.png");
    tomI=loadAnimation("images/cat1.png");
    jerryI=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(900,700,50,50);
    tom.addAnimation("something",tomI);
    tom.addAnimation("a",cat);
    tom.scale=0.09;
    jery=createSprite(50,680,50,50);
    jery.addAnimation("b",jerryI);
    jery.scale=0.09;
    //jery.debug=true;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    tom.collide(jery);
    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        tom.velocityX=-5;
        tom.changeAnimation("a",cat);
    }

  //For moving and changing animation write code here


}
