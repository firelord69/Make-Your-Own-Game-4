

var score = 0;
var totalSprite = 69;
var spr;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < totalSprite; i++) {
      spr = createSprite(
      random(width), random(height),
      random(10, 50), random(10, 50));
      spr.shapeColor = random(255);
      spr.onMouseOver= removeAndScore;
  }
}
function draw() {
  background("lightblue");
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  
  if (score < totalSprite) {
    text(score, width/2, height/2);
  }
  else {
    text("You Win: " + score,width/2, height/2);
    text("Press Ctrl + R To Restart The Game",width/2,width/3)
  }
}
function removeAndScore() {
  score += 1;
  this.remove();
}
