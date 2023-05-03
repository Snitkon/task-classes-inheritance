import Builder from "./builder.js";

function extend(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}
function StringBuilder(value = "") {
  Builder.call(this, value);
}

extend(StringBuilder, Builder);

StringBuilder.prototype.remove = function (item) {
  const arr = [...this.value];
  const modifiedValue = arr.filter((el) => el != item).join("");
  this.value = modifiedValue;
  return this;
};

StringBuilder.prototype.sub = function (itemFrom, itemEnd) {
  this.value = this.value.slice(itemFrom, itemEnd + 1);
  return this;
};

export default StringBuilder;
