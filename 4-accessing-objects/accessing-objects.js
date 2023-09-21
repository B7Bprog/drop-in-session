const person = {
  name: "Alice",
  job: "Web Developer",
  age: 25,
};
// Dot notation
console.log(_); // 'Alice'
console.log(_); // undefined

//Bracket notation

const keyToAccess = "job";

const personObj = {
  name: "Alice",
  job: "Web Developer",
  age: 25,
};

console.log(_); // 'Web Developer'
// Nested objects
const party = {
  location: "Beach House",
  host: {
    name: "Sophia",
    birthday: false,
  },
  invitees: ["Emma", "Liam", "Olivia"],
};

console.log(_); // 'Sophia'
console.log(_); // 'Emma'
//Trying to access properties using an index
const car = {
  colour: "yellow",
  type: "sports",
  doors: 2,
};
//Cannot access property x of undefined
const carColour = car[0]; // ❌

const puppy = {
  name: "Ruby",
  fleas: false,
  faveFood: ["biscuits", "trousers", "treats"],
};

console.log(puppy.vetAppointments[0]);
// TypeError: Cannot read property '0' of undefined
