class SnowParticle {

  constructor(context, x, y, diameter, color, speed) {
    this.color = color;
    this.ctx = context;
    this.glow = this.rndIntBtwn(10, 30);
    this.radius = diameter * 0.5;
    this.x = x;
    this.y = y;
    this.speed = diameter * 0.1; // smaller particles will be slower
    this.freqFactor = this.rndFloatBtwn(5, 9) * .0001;
    this.ampFactor = this.rndFloatBtwn(2, 5) * .1;
  }

  rndIntBtwn(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  rndFloatBtwn(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  draw() {
    this.ctx.shadowBlur = this.glow;
    this.ctx.shadowOffset = 0;
    this.ctx.shadowColor = this.color;
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.closePath();
    this.ctx.fill();
  }
}