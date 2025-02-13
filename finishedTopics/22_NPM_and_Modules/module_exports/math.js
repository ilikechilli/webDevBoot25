const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;

//how to export the above functions and variable
const math = {
  add: add,
  PI: PI,
  square: square
}

module.exports = math;