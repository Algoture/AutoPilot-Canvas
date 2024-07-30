class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.acceleration = 0.9;
    this.width = width;
    this.friction = 0.05;
    this.maxSpeed = 4;
    this.height = height;
    this.controls = new Controls();
  }
  update() {
    // controls:
    if (this.controls.up) {
      this.speed += this.acceleration;
    }
    if (this.controls.down) {
      this.speed -= this.acceleration;
    }
    if (this.controls.left) {
      this.x -= 2;
    }
    if (this.controls.right) {
      this.x += 2;
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
    this.y -= this.speed;
  }
  draw(ctx) {
    // ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.rect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    ctx.fill();
  }
}
