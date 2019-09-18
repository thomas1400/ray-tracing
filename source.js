class Source {
  constructor(pos) {
    this.pos = pos;
    this.rays = [];

    for (let i = 0; i < 360; i += 1) {
      this.rays.push(new Ray(this.pos, radians(i)));
    }
  }

  update(pos, walls) {
    this.pos = pos;
    for (let ray of this.rays) {
      ray.pos = pos;
      ray.cast(walls);
    }
  }

  show() {
    stroke(255, 100);
    ellipse(this.pos.x, this.pos.y, 10);
    for (let ray of this.rays) {
      ray.show();
      line(ray.pos.x, ray.pos.y, ray.castpoint.x, ray.castpoint.y);
    }
  }
}