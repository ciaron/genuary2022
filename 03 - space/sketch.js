// 03 Space

let stars = [];

function setup() {
  createCanvas(1000, 1000);

  for (let i = 0; i < 100; i++) {
    let sz = map(i, 0, width, 0, PI);
    stars[i] = new Star(0,0);
  }
}

function draw() {
  background(0);
  push();
  translate(width/2, height/2);
  //console.log(stars);

  for (let i = 0; i < 100; i++) {
    stars[i].show();
    stars[i].update();
  }
  pop();
  //noLoop();

}

function update() {

}
class Star {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(1);

    this.vel.add(this.acc);
    this.vel.limit(5);

    this.pos.add(this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}
