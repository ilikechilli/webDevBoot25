console.log("Hello from our first file!");
function double(number){
  console.log(number*2);
}


// array random access
//create an array
let myArray = ["one", "two", "three", "four", "five", "six"];
function randomDye (array) {
  const myIndex = Math.floor(Math.random() * array.length);
  console.log(myIndex);
  return array[myIndex]
}

// The function below takes an array and returns a new arraw with reverse order, it also empties the original array so look out what you're doing! If you want to reverse the hardcoded array us myArray = reverseArray(myArray);

function reverseArray(array) {
  const reversedArray = [];
  for(i = array.length; i > 0; i--){
    reversedArray.push(array.pop());
  }
  return reversedArray;
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (let i = 0; i < people.length; i++){
    console.log(people[i].toUpperCase())
}