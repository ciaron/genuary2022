let maxW=50;
let maxH=50;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  rectMode(CENTER);
  for (i=0; i<10000; i++) {
    fill(255, random(32));
    noStroke();
    rect(random(maxW, width-maxW), random(maxH, height-maxH), random(maxW), random(maxH));
  }
  noLoop();
}
