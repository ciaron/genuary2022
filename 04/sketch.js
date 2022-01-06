// 04 The next next Fidenza: https://tylerxhobbs.com/fidenza

// With help from Coding Train - Perlin Noise Flowfield.

let step=25;
let noiseScale=0.02;
let inc = 0.05;

var cols, rows;
var flowfield;

function setup() {
  createCanvas(1000, 1000);
  //rectMode(CENTER);
  noStroke();
  cols = floor(width / step);
  rows = floor(height / step);

  flowfield = new Array(cols * rows);
}

function draw() {
  background(255);
  
  let yoff=0;

  for (y=0; y<rows; y++){

    let xoff=0; 
    for (x=0; x<cols; x++) {
      var index = x + y*cols;
      var angle = noise(xoff, yoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;

      //let f=random(255);
      //let f = noise(xoff, yoff);
      //fill(f*255);
      //rect(x,y,step,step);
      
      push();
      translate(x*step, y*step);

      //stroke(0);
      //ellipse(0, 0, 2,2);

      rotate(v.heading());
      stroke(0, 50);
      line(0,0,step,0);
      pop();
      xoff += inc;
    }
    yoff += inc;
  }

  noLoop();
}
