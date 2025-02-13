//This requires the math.js module that is included in this project folder

const math = require("./math")
console.log(math.PI);


//The line below requires an entire directory.
//This is possible if the directory has an index.js files inside it!
//index.js is a special name that Node looks for inside a folder if it is required
const colors = require("./helperfiles");
console.log("Required a file: ", colors);