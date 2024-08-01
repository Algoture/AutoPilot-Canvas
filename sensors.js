class Sensor {
  constructor(car) {
    this.car = car;
    this.rayCount = 30;
    this.rayLength = 150;
    this.raySpread = Math.PI /2;
    this.rays = [];
    this.readings = []
  }
  update(roadBorders) {
    this.#castRay();
    this.readings=[]
    // for(let i =0;i<this.rays.length;i++ ){
    //   this.readings.push(
        
    //   )
    // }
  }
  // #getReading(ray,roadBorders){

  // }
  #castRay() {
    this.rays = [];
    for (let i = 0; i < this.rayCount; i++) {
      const rayAngle =
        lerp(this.raySpread / 2, -this.raySpread / 2, i / (this.rayCount - 1)) +
        this.car.angle;
      const start = { x: this.car.x, y: this.car.y };
      const end = {
        x: this.car.x - Math.sin(rayAngle) * this.rayLength,
        y: this.car.y - Math.cos(rayAngle) * this.rayLength,
      };
      this.rays.push([start, end]);
    }
  }
  draw(ctx) {
    for (let i = 0; i < this.rayCount; i++) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffd60a";
      ctx.moveTo(this.rays[i][0].x, this.rays[i][0].y);
      ctx.lineTo(this.rays[i][1].x, this.rays[i][1].y);
      ctx.stroke();
    }
  }
}
