class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.acceleration = 0.9;
    this.width = width;
    this.friction = 0.05;
    this.maxSpeed = 3;
    this.angle = 0;
    this.height = height;
    this.sensor = new Sensor(this);
    this.controls = new Controls();
  }
  update() {
    this.#move();
    this.sensor.update();
  }
  #move() {
    // controls:
    if (this.controls.up) {
      this.speed += this.acceleration;
    }
    if (this.controls.down) {
      this.speed -= this.acceleration;
    }
    if (this.speed != 0) {
      const flip = this.speed > 0 ? 1 : -1;
      if (this.controls.left) {
        this.angle += 0.02 * flip;
      }
      if (this.controls.right) {
        this.angle -= 0.02 * flip;
      }
    }
    // speed, acc, friction:
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2;
    }
    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }
    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }
    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }
  draw(ctx) {
    ctx.fillStyle = "#004bff";
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);
    ctx.beginPath();
    ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.fill();
    ctx.restore();
    this.sensor.draw(ctx);
  }
}
