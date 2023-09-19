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
