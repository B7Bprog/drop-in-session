// Functions using if, else if, and else statements

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Function using the ternary operator

function isAdult(age) {
  return age >= 18 ? "Yes" : "No";
}

// Example usage of the functions

console.log(getGrade(85));
console.log(getGrade(92));
console.log(isAdult(20));
console.log(isAdult(15));
