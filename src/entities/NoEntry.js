import { Signs } from "./Signs.js";
import { getContext } from "../utils/context.js";

export class NoEntry extends Signs {
  constructor() {
    super("No entry");
    this.ctx = getContext();
  }
  draw() {
    this.position = {
      x: 100,
      y: 100,
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
    this.ctx.fillStyle = "#fff";
    this.ctx.arc(this.position.x, this.position.y, 47, 0, Math.PI * 2);
    this.ctx.fill();
  }
}
