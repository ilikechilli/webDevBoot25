//Create a working array with numbers from 1 to 10
let myArr = [...Array(11).keys()]
myArr.shift();
console.log(myArr);

//Create a function that will print whatever it is given as argument
function print(element) {
  console.log(element);
}

// forEach
// forEach is a function where every item in the iterable is passed to a callback function. In this case the callback function is the print function defined above.
//forEach proceeds to call the print() function for every element in the myArr array and passes every element as an argument for print()

myArr.forEach(print);

// It is not very common to pass a callback function that has been pre-defined. Instead it is much more common to create an anonymous function inside the method brackets.
// The code below does exactly the same thing as the line above but an anonymous function is created right inside the method argument.

myArr.forEach(function(element){
  console.log(element);
})

// The foreach function not only passes each element into the callback but also the index and the array itself! These can be accessed optionally by using a second and third argument respectively.

myArr.forEach(function(e, i, a) {
  console.log(e, i, a);
})

// if you run the code above, you will see that each element is printed first, followed by the index of that element and then followed by the whole array!

// The forEach method is an older method and is often replaced by the more modern for...of way of iterating over elements if only the elements are required.