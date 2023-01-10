import { Signs } from "./Signs.js";

export class NoEntryBrick extends Signs {
  constructor() {
    super("No entry brick");
  }
  draw() {
    this.position = {
      x: 250,
      y: 100,
    };
    //this.ctx.scale(2, 2);
    // External circle
    this.ctx.beginPath();
    this.ctx.fillStyle = "#f00";
    this.ctx.arc(this.position.x, this.position.y, 60, 0, Math.PI * 2);
    this.ctx.fill();
    // Internal circle
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#fff";
    this.ctx.lineWidth = 2;
    this.ctx.arc(this.position.x, this.position.y, 57, 0, Math.PI * 2);
    this.ctx.stroke();
    // Brick
    this.ctx.beginPath();
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(this.position.x - 40, this.position.y - 10, 80, 20);
  }
}
