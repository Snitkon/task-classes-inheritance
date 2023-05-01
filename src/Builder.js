function Builder(value) {
  this.value = value;
}

Builder.prototype.plus = function (...items) {
  items.forEach((item) => {
    this.value += item;
  });
  return this.value;
};

Builder.prototype.minus = function (...items) {
  items.forEach((item) => {
    if (typeof this.value === "number") {
      this.value = this.value - item;
    } else if (typeof this.value === "string") {
      this.value = this.value.slice(0, -item);
    }
  });
  return this.value;
};

Builder.prototype.multiply = function (item) {
  if (typeof this.value === "number") {
    this.value = item * this.value;
  } else if (typeof this.value === "string") {
    this.value = this.value.repeat(item);
  }
  return this.value;
};

Builder.prototype.divider = function (item) {
  if (typeof this.value === "number") {
    this.value = Math.round(this.value / item);
  } else if (typeof this.value === "string") {
    let quantityFiestSimble = Math.floor(this.value.length / item);
    this.value = this.value.substring(0, quantityFiestSimble);
  }
  return this.value;
};

Builder.prototype.get = function () {
  return this.value;
};

export default Builder;
