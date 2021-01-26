var canvas, music;
var block1, block2, block3, block4, boxSprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    block1= createSprite(100,750,90,60);
    block1.shapeColor="blue";

    block2= createSprite(150,750,90,60);
    block2.shapeColor="green";

    block3= createSprite(200,750,90,60);
    block3.shapeColor="yellow";

    block4= createSprite(250,750,90,60);
    block4.shapeColor="red";

    boxSprite= createSprite(random(20,750),50,50);
    boxSprite.shapeColor="white";
    boxSprite.velocityX= 5;
    boxSprite.velocityY= 5;
    

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();

    boxSprite.bounceOff(block1);
    boxSprite.bounceOff(block2);
    boxSprite.bounceOff(block3);
    boxSprite.bounceOff(block4);
    boxSprite.bounceOff("edges");

    if(block1.isTouching(boxSprite)&& boxSprite.bounceOff(block1)){
        boxSprite.shapeColor="blue";
        music.play();
    }

    if(block2.isTouching(boxSprite)&& boxSprite.bounceOff(block2)){
        boxSprite.shapeColor="green";
    }

    if(block3.isTouching(boxSprite)&& boxSprite.bounceOff(block3)){
        boxSprite.shapeColor="yellow";
        boxSprite.velocityX=0;
        boxSprite.velocityY=0;
        music.stop();
    }

    if(block4.isTouching(boxSprite)&& boxSprite.bounceOff(block4)){
        boxSprite.shapeColor="red";
    }


    drawSprites();
    
}
