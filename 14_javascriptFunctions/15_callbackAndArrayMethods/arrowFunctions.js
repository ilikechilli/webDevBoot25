//Arrow function

//Arrow functions are a newer feature that is more compact to a regular function expression and allows the ommission of the function keyword.
// Arrow functions are used to create function expressions and need to be saved in a variable or needs to be passed as an argument. It can not be created on its own.

const myFunc = (x) => {
  console.log(`You wrote ${x}`)
}
myFunc("Hello!");

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1
}
console.log(rollDie());

//Sometimes arrow function can be made even more compact by using implicit returns. This allows ommitting the return keyword and implying the return on the same line (one line) as the arrow

const rollAnotherDie = () => Math.floor(Math.random() * 6) + 1
console.log(rollAnotherDie())

// Arrow functions are great when they are used as a callback function
//The code below created an array with 10 items but they are numbered beginning from zero. The map function created a new array with all the items with 1 added to them. Notice the arrow function in the callback.

let myArr = [...Array(10).keys()];
myArr = myArr.map((e) => {
  return e + 1
})
console.log(myArr);