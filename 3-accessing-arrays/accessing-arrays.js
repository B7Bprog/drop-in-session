const colours = ["red", "green", "blue", "yellow"];

const firstColour = _;
const nonExistentColour = _;

console.log(firstColour); // 'red'
console.log(nonExistentColour); // undefined

const selectedIndex = 2;
const fruits = ["apple", "grape", "orange", "mango", "kiwi"];

const chosenFruit = _;
console.log(chosenFruit); // 'orange'

const dinnerMenu = [
  ["salad", "crackers"],
  ["steak", "potatoes"],
  ["ice cream", "chocolate sauce"],
];

const mainCourse = _;
console.log(mainCourse); // 'steak'

const people = [
  { name: "Alice", favoriteColour: "blue" },
  { name: "Bob", favoriteColour: "red" },
  { name: "Evie", favoriteColour: "green" },
];

const eviesFavoriteColour = _;
console.log(eviesFavoriteColour); // 'green'

////// Would this work?

const team = [
  { name: "Alice", favColour: "blue" },
  { name: "Bob", favColour: "red" },
  { name: "Grace", favColour: "green" },
];

const gracesFavColour = team.favColour;
//const gracesFavColour = team.favColour[3];
