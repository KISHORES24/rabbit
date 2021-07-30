var garden,rabbit;

var gardenImg,rabbitImg;
var apple,leaf,appleGroup,leafGroup,appleImage,leafImage;
var num;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
}

function setup() {
  
  createCanvas(400,400);
  
// Moving background
garden = createSprite(200,200);
garden.addImage(gardenImg);

//create apple
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleGroup = createGroup();
leafGroup = createGroup();


}


function draw() {
  background(0);

  rabbit.x = mouseX;
 
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 

  num = Math.round (random(1,2));
  if (num == 1) {
    createApples();
  }else{
    createLeaves();
  }



  drawSprites();
}

function createApples() {
  if (frameCount % 80 ==0) {
    var apple = createSprite(200,0,20,20);
    apple.velocityY = 8;
    apple.x = Math.round(random(20,380));
    apple.addImage(appleImage);
    appleGroup.add(apple);
    apple.scale = 0.05;
  }

  
}
function createLeaves() {
  if (frameCount % 80 ==0) {
    var leaf = createSprite(180,0,20,20);
    leaf.velocityY = 8;
    leaf.x = Math.round(random(20,380));
    leaf.addImage(leafImage);
    leafGroup.add(leaf);
    leaf.scale = 0.05;
  }
}




  

  
