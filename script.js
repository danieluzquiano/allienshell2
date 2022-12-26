let t=s=100000;
let mX, mY

function setup() {
  createCanvas(windowWidth, windowHeight);
  mX = windowWidth / 2;
  mY = windowHeight / 2;
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  scale(125);
  let mm = map(mX, 0, width, 1, 5);
  noStroke();
  for (let a = 0; a < 5.5; a += 0.0004) {
    fill(200/a);  
    let x = a*10000;
    let y = cos(a) / sin(t/x);
    let e = cos(x)/a;
    let f = 2*noise(tan(e));
    circle(sin(tan(cos(y))+mm)*f*e, sin(tan(sin(y))+t)*f,0.012);
  }
  t += 0.035;
  s +=0.003
}

function mousePressed() {
  mX = mouseX;
  mY = mouseY;
}

function mouseMoved() {
  mX = mouseX;
  mY = mouseY;
}

function touchStarted() {
  mX = mouseX;
  mY = mouseY;
}

function touchMoved() {
  mX = mouseX;
  mY = mouseY;
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
