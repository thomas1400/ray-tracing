class Ray {
  constructor(pos, angle) {
    this.pos = pos;
    this.dir = p5.Vector.fromAngle(angle);
    this.length = 10;
    this.castpoint = this.pos + this.dir; // Default value for safety
  }

  cast(walls) {
    let closest = Infinity;
    let closest_pt = this.pos;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;
    // x, y of ray
    for (let w of walls) {
      const x1 = w.a.x;
      const y1 = w.a.y;
      const x2 = w.b.x;
      const y2 = w.b.y;
      // x, y of wall

      let t = (((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) /
        ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)));
      let u = -(((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) /
        ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)));
      // t is for wall, u is for ray

      if (0.0 < t && t < 1.0 && 0.0 < u) {
        let pt = createVector(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
        if (pt.dist(this.pos) < closest) {
          closest_pt = pt;
          closest = pt.dist(this.pos);
        }
      }
    }
    this.castpoint = closest_pt;
  }

  show() {
    push();
    stroke(255);
    translate(this.pos.x, this.pos.y);
    line(0, 0, this.dir.x * this.length, this.dir.y * this.length);
    pop();
  }

}