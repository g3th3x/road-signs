import { getContext } from "../utils/context.js";

export class Signs {
  constructor(name) {
    this.name = name;
    this.ctx = getContext();
  }
  draw() {
    console.log(this.name);
  }
}
