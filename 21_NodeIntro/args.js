//This script demonstrates how to use the process.argv object.
//This object will contain an array of any arguments passed to the command line when executing the script
//The first two arguments in this list are alwyas going to be the directory where node is installed and the current working directory

console.log("Hello from args file");

console.log(process.argv);