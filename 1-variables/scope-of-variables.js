////// let

function example1() {
  if (true) {
    let num = 10; // x is block-scoped
  }
  console.log(num); // Error: x is not defined (outside the block)
}

example1();

/////// const

function example2() {
  if (true) {
    const num = 20; // y is block-scoped
  }
  console.log(num); // Error: y is not defined (outside the block)
}

example2();

/////// var

function example3() {
  if (true) {
    var num = 30; // z is function-scoped
  }
  console.log(num); // Outputs 30 (accessible within the function)
}

example3();
