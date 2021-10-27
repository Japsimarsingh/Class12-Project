var runner_1 ,runner
var path ,pathImage

function preload(){
  //pre-load images
runner=loadAnimation("Runner-1.png","Runner-2.png")
pathImage=loadImage("path.png")

}

function setup(){
  createCanvas(200,400);
  //create sprites here


path=createSprite(100,200)
path.addImage(pathImage)
path.scale=0.65
path.velocityY=4

runner_1=createSprite(100,330,30,30)
runner_1.addAnimation("runnerRunning",runner)
runner_1.scale=0.06

boundary1=createSprite(200,200,30,400)
boundary1.visible=false

boundary2=createSprite(0,200,30,400)
boundary2.visible=false
}
function draw() {
  background(0);
  if(path.y>330){
    path.y=height/2
  }
  runner_1.x=World.mouseX
  runner_1.collide(boundary1)
  runner_1.collide(boundary2)






  drawSprites()
}
