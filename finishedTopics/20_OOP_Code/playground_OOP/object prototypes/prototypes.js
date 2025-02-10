// prototypes are templates of different objects
// For example, a String is a javaScript object and so is an array. Even an object is an object

// Let's see an example in the console.

const myArray = [];
console.dir(myArray);

//The above code will show the array object in the console which can be expanded and when doing so (expanding) we will see a [[Prototype]] property which includes all of the properties and objects that an array has!
//Even cooler is that we can manipulate the prototype.
//What's important to remember for now is that javascript objects have a prototype that is inherited when creating new object such as arrays, strings, numbers... etc. And we can even create our own prototypes

//Manipulating prototypes is easy
//Referencing the prototype and changing it is done as follows:

console.dir(String.prototype);
//The line above is also very usefull to expolore certain object types and what they can do. They are a bit like a built in reference.
//To add a method to the prototype:
String.prototype.yell = function() {
  return this.toUpperCase();
}

// Notice here the use of the "this" keyword. Which essentially passes the object itself into the method!!!!

const mySecondString = "Hello!!!"
console.log(mySecondString.yell());