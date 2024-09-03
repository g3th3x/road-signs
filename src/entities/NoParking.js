import { Signs } from "./Signs.js";

export class NoParking extends Signs {
  constructor() {
    super("No parking");
  }
  draw() {
    this.position = {
      x: 100,
      y: 250,
    };
    // External circle
    this.ctx.beginPath();
    this.ctx.fillStyle = "#f00";
    this.ctx.arc(this.position.x, this.position.y, 60, 0, Math.PI * 2);
    this.ctx.fill();
    // Internal circle
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#fff";
    this.ctx.lineWidth = 3;
    this.ctx.arc(this.position.x, this.position.y, 57, 0, Math.PI * 2);
    this.ctx.stroke();
    // Circle
    this.ctx.beginPath();
    this.ctx.fillStyle = "#00f";
    this.ctx.arc(this.position.x, this.position.y, 47, 0, Math.PI * 2);
    this.ctx.fill();
    // Line 
    const x = 32
    const y = 34
    this.ctx.lineWidth = 8;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#f00";
    this.ctx.moveTo(this.position.x + x, this.position.y - y);
    this.ctx.lineTo(this.position.x - x, this.position.y + y);
    this.ctx.stroke();
  }
}
