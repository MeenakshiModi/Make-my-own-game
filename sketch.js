var football;
var complayer;
var player;
var goalpost1;
var goalpost2;
var footballImage;
var complayerImage;
var playerImage;
var edges;
var gameState = "serve";
var compScore = 0;
var playerScore = 0;

function preload(){
complayerImage = loadImage("complayer.png")
playerImage = loadImage("player3.png")
footballImage = loadImage("Football.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);
football = createSprite(windowWidth/2,windowHeight/2,40,40);
football.addImage("football",footballImage)
football.scale= 0.2
complayer = createSprite(width-200,height/2,35,80);
complayer.addImage("complayer",complayerImage)
complayer.scale=0.7
player = createSprite(300,200,10,70);
player.addImage("player3",playerImage)
player.scale=0.2
goalpost1 = createSprite(150,windowHeight/2,35,175);
goalpost2 = createSprite(width-100,windowHeight/2,35,175);
football.shapeColor = "grey"
complayer.shapeColor = "black"
player.shapeColor = "lightBlue"
goalpost1.shapeColor = "red"
goalpost2.shapeColor = "yellow"
}

function draw(){
  background ("green");
drawSprites ();

textSize(35);
if (gameState ==="serve"){
  text ("Press Spacekey to serve",600,200)
}
if (keyDown("DOWN_ARROW")&&player.y<windowHeight&&player.y>0){
  player.y=player.y+4
}
if (keyDown("UP_ARROW")&&player.y<windowHeight&&player.y>0){
  player.y=player.y-4
}
if (keyDown("RIGHT_ARROW")&&player.x<windowWidth/2&&player.x>0){
  player.x=player.x+ 4
}
if (keyDown("LEFT_ARROW")&&player.x<windowWidth/2&&player.x>0){
  player.x=player.x-4
}
if (keyDown("W")&&complayer.y<windowHeight&&complayer.y>0){
  complayer.y=complayer.y-4
}
if (keyDown("S")&&complayer.y<windowHeight&&complayer.y>0){
  complayer.y=complayer.y+4
}
if (keyDown("A")&&complayer.x>windowWidth/2&&complayer.x<windowWidth){
  complayer.x=complayer.x-4
}
if (keyDown("D")&&complayer.x>windowWidth/2&&complayer.x<windowWidth){
  complayer.x=complayer.x+4 
}
textSize(35);
text(compScore,width/2,80);
text(playerScore,width/3,80);

edges= createEdgeSprites(
);

if (keyDown("space") && gameState==="serve"){
  serve();
}

if (football.isTouching(edges[2])||football.isTouching(edges[3])){  
}

if (football.x>400 ||football.x <0){
}



if (playerScore ===7 || compScore === 7 ){
  gameState ==="over";
  
  text("Game Over!",170,160);
  text ("Pres 'R' to Restart", 150,180)

}
if (football.x>windowWidth||football.x<windowWidth){
  
  if (football.x>windowWidth){
    compScore = compScore+1
  }

  if (football.x<windowWidth){
     playerScore  = playerScore+1
  }
}

if (keyDown("r")&& gameState ==="over"){
  gameState= "serve";
  compScore = 0;
  
}
football.bounceOff(edges[2]);
football.bounceOff(edges[3]);
football.bounceOff(complayer);
football.bounceOff(player);

drawSprites ();
}
function serve(){
  football.velocityX=2;
  football.velocityY=3;
 
}

function reset (){
football.x=200;
football.y=200;
football.velocityX = 0;
football.velocityY = 0;
football.velocityX=0;
football.velocityY=0;
}