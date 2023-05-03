import Builder from "./builder.js";

class IntBuilder extends Builder {
  constructor(value = 0) {
    super(value);
  }

  static random(from, to) {
    const min = Math.round(from);
    const max = Math.round(to);
    return Math.round(Math.random() * (max - min) + min);
  }

  mod(item) {
    this.value = this.value % item;
    return this;
  }
}

export default IntBuilder;
