import Builder from "./Builder.js";

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function StringBuilder(value = "") {
  Builder.call(this, value);
}

extend(StringBuilder, Builder);

StringBuilder.prototype.remove = function (item) {
  let arr = [...this.value];
  let modifiedValue = arr.filter((el) => el != item).join('');
  return (this.value = modifiedValue);
};

StringBuilder.prototype.sub = function (itemFrom, itemEnd) {
  return (this.value = this.value.slice(itemFrom, itemEnd + 1));
};

export default StringBuilder;
