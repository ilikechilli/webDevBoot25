//This script requires an argument to be passed when executing and will return a greeting for each argument provided.

const arguments = process.argv;
if (arguments.length > 2){
  for (let i = 2; i < arguments.length; i++){
    console.log(`Hello, ${arguments[i]}`);
  }
} else {
  console.log('Not enough arguments for greeting')
}

//An alternative code could be:
//1 Slice out the first two standard items in argv
const args = process.argv.slice(2)
for (let arg of args){
  console.log(`Hello there, ${arg}`);
}

