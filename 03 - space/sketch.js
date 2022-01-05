// 03 Space

let stars = [];
let nstars=1000;

function setup() {
  createCanvas(1000, 1000);

  for (let i = 0; i < nstars; i++) {
    let sz = map(i, 0, width, 0, PI);
    stars[i] = new Star(0,0);
  }
}

function draw() {
  background(0);

  push();
  translate(width/2, height/2);
  //console.log(stars);

  for (let i = 0; i < nstars; i++) {
    stars[i].show();
    stars[i].update();
  }
  pop();
  //noLoop();

}

class Star {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }

  update() {
    //let mouse = createVector(mouseX, mouseY);
    //this.acc = p5.Vector.sub(mouse, this.pos);
    //this.acc.setMag(1);

    //this.vel.add(this.acc);
    this.vel.limit(5);

    this.pos.add(this.vel);
  }

  show() {
    let centre = createVector(0,0);

    noStroke();
    fill(255);
    let sz = map(this.pos.dist(centre), 0, 1.414*width, 0, 64);
    ellipse(this.pos.x, this.pos.y, sz);
  }
}
