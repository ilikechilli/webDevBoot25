//function expression: This allows a function to be declared in a variable.
//It is a way of storing a function inside a variable.
const add = function (x, y) {
  return x + y;
}
console.log(add(5, 8));

const square = function (num) {
  return Math.pow(num, 2);
}
console.log(square(14));

//Passing a function as an argument
//First we define a function that takes a function as an argument
//Then we define a function that we can pass as an argument
function callTwice(func) {
  func();
  func();
}

const rollDie = function () {
  console.log(Math.floor(Math.random() * 6) + 1);
}

callTwice(rollDie);

//Higher order function that returns a function
//
function makeMysteryFunc(){
  const rand = Math.random();
  if (rand > 0.5) {
    return function() {
      console.log("Congrats, I am a good function. You win a million dollars.")
    }
  } else {
    return function () {
      alert("You have been infected by a computer virus (not really though)")
    }
  }
}
makeMysteryFunc();

//More usefull return function
//Sometimes it's usefull to have a function that generates a function based on an input.
// The makeBetweenFunc below "created" a function that takes a number input and checks if that number is between the min and max values passed to the makeBetweenFunction! 
// This means the makeBetweenFunc can be used to create a mulitude of functions that checks if a number is between some value
function makeBetweenFunc(min, max){
    return function (num) {
      return (num >= min && num <= max);
    }
}
const betweenFiveAndTen = makeBetweenFunc(5,10)
console.log(betweenFiveAndTen(6));

//Defining Methods
//Methods are functions associated with object literals
// Every method is a function but not every function is a method

const myMath = {
  PI: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
  add(x, y) {
    return x + y; 
  }
}

// The mysterious keyword "this"
const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
      this.eggCount += 1;
      return "EGG";
  }
}

// try catch
// try catch anticipates that an error could happen

try {
  hi.toUpperCase(); //this will cause an unCaught error because hi is not defined
} catch {
  console.log("Error!!!")
}

// try catch with a function

function yell(msg) {
  console.log(msg.toUpperCase().repeat(3));
}
