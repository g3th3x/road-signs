import { Signs } from "./Signs.js";

export class TrafficLight extends Signs {
  constructor() {
    super("Traffic Light");
  }
  draw() {
    this.position = {
      x: 550,
      y: 100,
    };
    trafficLight(this.ctx, this.position);
  }
}

function trafficLight(ctx, position) {
  // External circle
  ctx.beginPath();
  ctx.strokeStyle = "#000";
  ctx.arc(position.x, position.y + 100, 50, 0, Math.PI, false);
  ctx.lineTo(position.x - 50, position.y);
  ctx.moveTo(position.x + 50, position.y + 100);
  ctx.lineTo(position.x + 50, position.y);
  ctx.arc(position.x, position.y, 50, 0, Math.PI, true);
  ctx.stroke();
  // Internal circle
  ctx.beginPath();
  ctx.fillStyle = "#000";
  ctx.arc(position.x, position.y + 100, 40, 0, Math.PI, false);
  ctx.fillRect(position.x - 40, position.y, 80, 100);
  ctx.arc(position.x, position.y, 40, 0, Math.PI, true);
  ctx.fill();
  // Shapes
  for (let i = 0; i < 3; i++) {
    light(ctx, position, i, i);
  }
}

function light(ctx, position, color = 0, place = 0) {
  const lightColor = ["#ff0000", "#fff000", "#00ff00", "#5c5a5a"];
  ctx.beginPath();
  ctx.fillStyle = lightColor[color];
  let y = position.y + place * 50;
  ctx.arc(position.x, y, 20, 0, Math.PI * 2);
  ctx.fill();
}