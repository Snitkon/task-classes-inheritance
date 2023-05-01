import IntBuilder from "./IntBuilder.js";
import StringBuilder from "./StringBuilder.js";

//Example
const myInt = new IntBuilder(10);
console.log(myInt.value);
console.log(myInt.plus(2, 3, 2));
console.log(myInt.minus(1, 2));
console.log(myInt.multiply(2));
console.log(myInt.divider(4));
console.log(myInt.mod(3));
console.log(myInt.get());
console.log(IntBuilder.random(10, 100));

const myString = new StringBuilder("Hello");
console.log(myString.value);
console.log(myString.plus(" all", "!"));
console.log(myString.minus(4));
console.log(myString.multiply(3));
console.log(myString.divider(4));
console.log(myString.remove("l"));
console.log(myString.sub(1, 1));
console.log(myString.get());
