function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);
  for (var y = 0; y < height; y += 20) {
    for (var x = 0; x < width; x += 20) {
      if (random(1) > 0.5) {
        line(x, y, x + 20, y + 20);
      } else {
        line(x, y + 20, x + 20, y);
      }
    }
  }
  noLoop();
}var w = 16;
var h = 16;
var index = 0;

function setup() {
  createCanvas(640, 384);
  background('#0000ff');
  strokeWeight(3);
  stroke(224);
}

function draw() {
  var x1 = w*index;
  var x2 = x1 + w;
  var y1 = h*80;
  var y2 = h*24;
  if (random(2) < 1) {
    line(x2, y1, x1, y2);
  } 
  else {
    line(x1, y1, x2, y2);
  }
  
  index++;
  if (index == width/w) {
    var p = get(0, h, width, h*23);
    background('#0000ff');
    set(0, 0, p);
    index = 0;
  }
}
