import { getContext } from "./utils/context.js";
import { NoEntry } from "./entities/NoEntry.js";
import { NoEntryBrick } from "./entities/NoEntryBrick.js";
import { GoStraightAhead } from "./entities/GoStraightAhead.js";

export class RoadSigns {
  ctx = getContext();
  signs = [new NoEntry(), new NoEntryBrick(), new GoStraightAhead()];
  constructor() {
    this.entities = [...this.signs];
  }
  update() {}
  draw() {
    for (const entity of this.entities) {
      entity.draw();
    }
  }
}
