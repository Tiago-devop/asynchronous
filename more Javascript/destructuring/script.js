const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

const { backgroundColor, color, margin } = btnStyles;

console.log(backgroundColor, color, margin);

let numberOne = 1;
let numberTwo = 2;

[numberOne, numberTwo] = [numberTwo, numberOne];

console.log(numberOne, numberTwo);

const cachorro = {
  name: "bob",
  race: "Labrador",
  color: "Yellow",
};

const { color: bobColor } = cachorro;
console.log(bobColor);