for (let i = 0; i < 10; i++) {
  //console.log(i);
}
// what are the roles of the three parts of the for loop?

//what does i++ do?

// using a variable in the condition statement
const totalCars = 10;
for (let i = 1; i <= totalCars; i++) {
  console.log(i + " car(s) went by");
}

// using a length of a String / Array

const alphabet = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i]);
}

const beatlesSongs = ["Let It Be", "Hey Jude", "Yesterday", "Twist and Shout"];

for (let i = 0; i < beatlesSongs.length; i++) {
  console.log(`I can't stop singing ${beatlesSongs[i]}!`);
}

//Using for..of with Arrays and Strings

const snackBox = ["Doritos", "Pringles", "Pretzels", "Cheetos", "Popcorn"];

for (let snack of snackBox) {
  console.log(snack);
}

const carBrand = "Toyota";

for (let letter of carBrand) {
  console.log(letter);
}

const character = {
  characterName: "Alice",
  role: "Adventurer",
  level: 25,
};

// Using for..in with Objects

for (let trait in character) {
  console.log(trait); // 'characterName' .. 'role' .. 'level'
  console.log(character[trait]); // 'Alice' .. 'Adventurer' .. 25
}

//Common mistakes
//not using proper variable declaration
for (i = 0; i < 10; i++) {
  // i = 0 is creating a global variable!!
  // don't do this! 😭
  // use `let i = 0` instead!!
  console.log(i);
}

for (animal of jungle) {
  // use `let animal` instead!!
}

// unnecessary usage of .length
const timesToLoop = 5;

for (let i = 0; i < timesToLoop.length; i++) {
  // ❌ timesToLoop.length === undefined
}
//creating an infinite loop
for (let i = 0; i < 10; ) {
  // missing the increment means `i` will never reach 10
  console.log(i);
}

const array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
  array.push(i);
  // `i` will never match array.length
}
//incorrect usage of for..in vs for..of with Arrays
const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

for (let day in weekdays) {
  console.log(day); // '0' .. '1' .. '2' .. etc
  // for .. in will iterate over the indexes of an Array
  // note how the values are strings
  // for .. of would give 'monday' .. 'tuesday' .. etc
}

//forgetting to use {}
for (let i = 0; i < 10; i++) console.log(i);
console.log("this is not in the loop");
