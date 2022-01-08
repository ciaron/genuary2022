// 04 The next next Fidenza: https://tylerxhobbs.com/fidenza

// With help from Coding Train - Perlin Noise Flowfield.

let step=10;
//let noiseScale=0.02;
let inc = 0.0075;
var ncurves = 12345;
var num_steps = 1000;
var step_length = 1;
var opacity=32;

var cols, rows;
var flowfield;

var left_x;
var right_x;
var top_y;
var bottom_y;

// show the flow field vectors
var showfield=false;

function setup() {
  createCanvas(1000, 1000);

  var factor=0.5;
  left_x = int(width * (-1+factor));
  right_x = int(width * (1+factor));
  top_y = int(height *  (-1+factor));
  bottom_y = int(height * (1 + factor)); 
  
  noStroke();

  cols = (right_x - left_x) / step;
  rows = (bottom_y - top_y) / step;

  flowfield = new Array(cols * rows);
}

function draw() {
  background(255);
  
  // set up and draw the flowfield

  let yoff=0;

  for (y=0; y<rows; y++){
    let xoff=0; 
    for (x=0; x<cols; x++) {
      var index = x + y*cols;
      var angle = 2*(1-noise(xoff, yoff)) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
  
      if (showfield) {
        push();
        translate(x*step, y*step);
        rotate(v.heading());
        stroke(0, 50);
        line(0,0,step,0);
        pop();
      }

      xoff += inc;
    }
    yoff += inc;
  }

  for (n=0; n<ncurves; n++) {
    drawCurve(random(right_x - left_x), random(bottom_y - top_y));
  }

  noLoop();

}

function drawCurve(x, y) {
    // draw curves through the flowfield, as https://tylerxhobbs.com/essays/2020/flow-fields

    stroke(0,opacity);
    strokeWeight(2);
    strokeCap(SQUARE);
    noFill();

    beginShape();

    for (let n=0; n<num_steps; n++) {

      curveVertex(x, y);
      
      x_offset = x - left_x;
      y_offset = y - top_y;

      var col = int(x_offset / step);
      var row = int(y_offset / step);
      var index = col + row*cols;

      // do bounds checking here
      if (col < cols && row < rows && col >=0 && row >= 0) {
        var grid_angle = flowfield[index].heading();

        var x_step = step_length * cos(grid_angle);
        var y_step = step_length * sin(grid_angle);

        //console.log(x_step, y_step);

        x = x + x_step;
        y = y + y_step;
      }
    }

    endShape();
  }
  

