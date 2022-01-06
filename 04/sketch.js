// 04 The next next Fidenza: https://tylerxhobbs.com/fidenza

// With help from Coding Train - Perlin Noise Flowfield.

let step=20;
//let noiseScale=0.02;
let inc = 0.0095;

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

  drawCurve(500,100);
  drawCurve(250,750);
  drawCurve(50,640);
  noLoop();

}

function drawCurve(x, y) {
    // draw curves through the flowfield, as https://tylerxhobbs.com/essays/2020/flow-fields

    // starting point
    //var x = 500;
    //var y = 100;
    var num_steps=100;

    var left_x = 0;
    var top_y = 0;

    stroke(255,0,0);
    noFill();

    beginShape();

    for (let n=0; n<num_steps; n++) {

      curveVertex(x, y);
      //ellipse(x,y,4,4);

      x_offset = x - left_x;
      y_offset = y - top_y;

      var col = int(x_offset / step);
      var row = int(y_offset / step);
      var index = col + row*cols;
      var step_length = 10;

      // do bounds checking here
      if (col < cols && row < rows && col >=0 && row >= 0) {
        //console.log(x_offset, y_offset, col, row, index);
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
  

