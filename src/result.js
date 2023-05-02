import IntBuilder from "./int-builder_class.js";
import StringBuilder from "./string-builder_class.js";

//Example
console.log(IntBuilder.random(10,100))
const myInt = new IntBuilder(10);
console.log(
    myInt
    .plus(2, 3, 2) // 17
    .minus(1, 2) // 14
    .multiply(2) // 28
    .divider(4) // 7
    .mod(3) // 1
    .get() // 1
);


const myString = new StringBuilder("Hello");
console.log(
  myString
    .plus(" all", "!") // 'Hello all!'
    .minus(4) // 'Hello '
    .multiply(3) // 'Hello Hello Hello '
    .divider(4) // 'Hell'
    .remove("l") // 'He'
    .sub(1, 1) // 'e'
    .get() // 'e'
);

