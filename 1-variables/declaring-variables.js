//Difference betweenx 'let' and 'const' (don't use 'var'!)

/////// let
let age = 30;
age = 31;

console.log(age, "<<<< age here");

/////// const
const pi = 3.14;

//pi = 2;
console.log(pi);

// const colours = ["red", "green", "blue"];

// console.log(colours);

// colours = ["yellow", "brown"];
// console.log(colours);

const coloursObj = {
  firstColour: "red",
  secondColour: "green",
  thirdColour: "brown",
};
coloursObj = {
  firstColour: "yellow",
  secondColour: "green",
  thirdColour: "brown",
};

console.log(coloursObj);

coloursObj.firstColour = "yellow";

console.log(coloursObj);
