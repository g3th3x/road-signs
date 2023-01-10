import { Signs } from "./Signs.js";

export class GoStraightAhead extends Signs {
  constructor() {
    super("Go straight ahead");
  }
  draw() {
    this.position = {
      x: 400,
      y: 100,
    };
    //this.ctx.scale(1, 1);
    // External circle
    this.ctx.beginPath();
    this.ctx.fillStyle = "#00f";
    this.ctx.arc(this.position.x, this.position.y, 60, 0, Math.PI * 2);
    this.ctx.fill();
    // Internal circle
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#fff";
    this.ctx.lineWidth = 2;
    this.ctx.arc(this.position.x, this.position.y, 57, 0, Math.PI * 2);
    this.ctx.stroke();
    // Arrow
    this.ctx.beginPath();
    this.ctx.fillStyle = "#fff";
    // this.ctx.moveTo(this.position.x, this.position.y - 40);
    // this.ctx.lineTo(this.position.x - 14, this.position.y - 20);
    // this.ctx.lineTo(this.position.x + 14, this.position.y - 20);
    // this.ctx.fill();
    // this.ctx.fillRect(this.position.x - 5, this.position.y - 30, 10, 86);
    this.ctx.moveTo(this.position.x + 14, this.position.y - 20);
    this.ctx.lineTo(this.position.x, this.position.y - 40);
    this.ctx.lineTo(this.position.x - 14, this.position.y - 20);
    this.ctx.lineTo(this.position.x - 5, this.position.y - 20);
    this.ctx.lineTo(this.position.x - 5, this.position.y + 56);
    this.ctx.lineTo(this.position.x + 5, this.position.y + 56);
    this.ctx.lineTo(this.position.x + 5, this.position.y - 20);
    this.ctx.closePath();
    this.ctx.fill();
  }
}
