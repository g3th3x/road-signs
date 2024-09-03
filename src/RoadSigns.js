import { getContext } from "./utils/context.js";
import {
  GoStraightAhead,
  NoEntry,
  NoEntryBrick,
  TrafficLight,
  NoParking,
  NoStoppingOrStanding
} from "./entities/index.js";

export class RoadSigns {
  ctx = getContext();
  signs = [
    new NoEntry(),
    new NoEntryBrick(),
    new GoStraightAhead(),
    new TrafficLight(),
    new NoParking(),
    new NoStoppingOrStanding()
  ];
  constructor() {
    this.entities = [...this.signs];
  }
  update() {}
  draw() {
    for (const entity of this.entities) {
      entity.draw();
      entity.getName();
    }
  }
}
