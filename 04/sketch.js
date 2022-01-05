// 04 The next next Fidenza: https://tylerxhobbs.com/fidenza

let step=25;
let noiseScale=0.02;
let inc = 0.05;

function setup() {
  createCanvas(1000, 1000);
  //rectMode(CENTER);
  noStroke();
}

function draw() {

  background(220);
  
  let yoff=0;

  for (y=0; y<height; y+=step){
    let xoff=0; 
    for (x=0; x<width; x+=step) {
      //let f=random(255);
      let f = noise(xoff, yoff);
      fill(f*255);
      rect(x,y,step,step);
      xoff += inc;
    }
    yoff += inc;
  }

  noLoop();
}
