import Builder from "./Builder.js";

class IntBuilder extends Builder {
  constructor(value = 0) {
    super(value);
  }

  static random(from, to) {
    let min = Math.round(from);
    let max = Math.round(to);
    return (this.value = Math.round(Math.random() * (max - min) + min));
  }

  mod(item) {
    return (this.value = this.value % item);
  }
}

export default IntBuilder;
