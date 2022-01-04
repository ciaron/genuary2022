// Genuary 2022 - 02 Dithering

let img;
let cellsize = 5;
let threshold = 64;

function preload() {
  img = loadImage("source.jpg");

}

function setup() {
  createCanvas(1000, 1000);
  img.resize(width, height);
}

function draw() {
  background(255);
  //rectMode(CENTER);
  console.log("starting");
  noStroke();
  fill(0,127);

  for (x=0; x<width; x+=cellsize){
    for (y=0; y<height; y+=cellsize) {
      let px = img.get(x,y);
      //console.log(px[0]);
      //if (px[0] > threshold) {
        fill(px[0]);
        ellipse(x,y,4,4);
      //}
    }
  }
  //image(img, 0, 0);
  console.log("done");
  noLoop();

}
