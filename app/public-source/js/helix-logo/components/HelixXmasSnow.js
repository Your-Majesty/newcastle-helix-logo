class HelixLogoSnow {
  constructor() {
    this.element = document.querySelector('.helix-logo-snow')
    let canvas = document.createElement('canvas');
    this.ctx = canvas.getContext('2d');
    this.counter = 0
    this.particles = []
    this.amount = 25
    this.running = false
    this.width = this.ctx.canvas.width
    this.height = this.ctx.canvas.height
    this.maxDiameter = 15
    this.startY = -this.maxDiameter * 0.5
    this.endY = this.height + this.maxDiameter * 0.5
    this.showPaths = false
    
    this.element.appendChild(canvas);
    window.addEventListener('resize', this.handleResize.bind(this));
    this.handleResize()
  }
  
  addParticle() {
    let x = this.rndIntBtwn(0, this.width);
    let y = this.startY;
    let diameter = this.rndIntBtwn(1, this.maxDiameter);
    let color = `rgba(255, 255, 255, ${this.rndFloatBtwn(0.8, 1)})`;
    let particle = new SnowParticle(this.ctx, x, y, diameter, color);
    this.particles.push(particle);
  }

  handleResize() {
    this.ctx.canvas.width = this.width = window.innerWidth;
    this.ctx.canvas.height = this.height = window.innerHeight;
    this.endY = this.height + this.maxDiameter * 0.5;
  }

  rndIntBtwn(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  rndFloatBtwn(min, max) {
    return Math.random() * (max - min) + min;
  }

  hide() {
    this.ctx.globalAlpha = 0
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  
  render(time) {
    if (this.running) {
      this.ctx.globalAlpha = 1
      let delta = time ? time : 0;
      if (this.counter > this.amount) {
        this.addParticle();
        this.counter = 0;
      }
      if (!this.showPaths) {
        this.ctx.clearRect(0, 0, this.width, this.height);
      }
      this.particles.forEach((p, i) => {
        p.x += Math.sin(delta * p.freqFactor) * p.ampFactor;
        p.y += p.speed;
        p.alpha = 1
        p.draw();
      });
      this.particles = this.particles.filter(p => p.y <= this.height);
      this.counter++;
    }
  }
}


