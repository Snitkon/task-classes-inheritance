class Builder {
  constructor(item) {
    this.value = item;
  }

  plus(...items) {
    items.forEach((item) => {
      this.value += item;
    });
    return this.value;
  }

  minus(...items) {
    items.forEach((item) => {
      if (typeof this.value === "number") {
        this.value = this.value - item;
      } else if (typeof this.value === "string") {
        this.value = this.value.slice(0, -item);
      }
    });
    return this.value;
  }

  multiply(item) {
    if (typeof this.value === "number") {
      this.value = item * this.value;
    } else if (typeof this.value === "string") {
      this.value = this.value.repeat(item);
    }
    return this.value;
  }

  divider(item) {
    if (typeof this.value === "number") {
      this.value = Math.round(this.value / item);
    } else if (typeof this.value === "string") {
      let quantityFiestSimble = Math.floor(this.value.length / item);
      this.value = this.value.substring(0, quantityFiestSimble);
    }
    return this.value;
  }

  mod(item) {
    return (this.value = this.value % item);
  }

  sub(itemFrom, itemEnd) {
    return (this.value = this.value.slice(itemFrom, itemEnd + 1));
  }

  get() {
    return this.value;
  }
}
