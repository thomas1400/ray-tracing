const width = 400;
const height = 400;

let s;
let walls = [];

function setup() {
  createCanvas(width, height);

  s = new Source(300, 300);

  walls.push(new Wall(0, 0, width, 0));
  walls.push(new Wall(0, height, width, height));
  walls.push(new Wall(0, 0, 0, height));
  walls.push(new Wall(width, 0, width, height));

  for (let i = 0; i < 5; i++) {
    let x1 = int(random(0, width));
    let x2 = int(random(0, width));
    let y1 = int(random(0, height));
    let y2 = int(random(0, height));
    walls.push(new Wall(x1, y1, x2, y2));
  }
}

function draw() {
  background(0);

  s.update(createVector(mouseX, mouseY), walls);
  s.show();

  for (let wall of walls) {
    wall.show();
  }
}