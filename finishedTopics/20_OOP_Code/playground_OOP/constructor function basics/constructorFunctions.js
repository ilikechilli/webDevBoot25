function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b){
  return `rgb(${r}, ${g}, ${b})`
}

//The two functions above are fine as is but it would be useful to have an object that could automatically switch between both of these functions and would store the RGB and hex values as a property of the object

console.log(hex(255, 100, 25));
console.log(rgb(255, 100, 25));

//We can use a factory function to do this
function makeColor(r, g, b){
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function(){
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  color.hex = function(){
    const {r, g, b} = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return color;
}
// Calling the function above will return the color object!
let myColor = makeColor(35, 255, 200);
console.log(myColor);

//Factory functions do work well to make objects but they are just one of multiple ways to do this and not the best way to create objects. Constructor functions will probably do a better job!
//The reason Factory function are not ideal is because for each object that is created with them, they will create and add all the methods of the object again. So the methods (functions) are duplicated over and over which is not efficient.
//Constructor functions address this shortcoming!

function Color(red, green, blue){
  this.r = red;
  this.g = green;
  this.b = blue;
  //console.log(this)
}

//The constructor function above is strange. It used the 'this' keyword to construct a function but if we are to log 'this' we would see that it refers to the 'Window' object which is not what we want. JavaScript handles this by pairing the constructor function with the keyword "new"
const notAColor = Color(255, 100, 150);
console.log(notAColor); //returns undefined because in this instance "this" refers to the Window object

const trueColor = new Color(255, 100, 150);
console.log(trueColor); //returns the trueColor object. Using "new" makes the function call behave differently.

//The same logic applies for adding functions to the constructor

function AnotherColor(r, g, b){
  this.r = r;
  this.g = g;
  this.b = b;
  this.rgb = function(){
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
}

// The problem with the code above is that the method is not going to be in the prototype so what should be done is this:

function FinalColor(r, g, b){
  this.r = r;
  this.g = g;
  this.b = b;
}

//And only after the function is created, we will add the prototype function like this:

FinalColor.prototype.rgb = function() {
  const {r, g, b} = this;
  return `rgb(${r}, ${g}, ${b})`;
}
FinalColor.prototype.hex = function() {
  const {r, g, b} = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
FinalColor.prototype.rgba = function(a = 1.0) {
  const {r, g, b} = this;
  return `grba(${r}, ${g}, ${b}, ${a})`;
}

// This is weird but it works. The weird part is that we are defining the constructorfunction and adding the prototype method after that which seems sloppy. No worry because we will soon see how Classes solve this issue as well!

let myFinalColor = new FinalColor(200, 67, 113);
console.log(myFinalColor.rgb());

