var bg,bg2,form,system,code,security;
var score=0;
var backgroundImage;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  backgroundImage = loadImage("Background.png");
  background2Image = loadImage("Background2.png")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(backgroundImage);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(background2Image)
    fill("black")
    textSize(40);
    text("Great Job, You know have Bragging Rights",100, 200);
  }

  drawSprites()
}