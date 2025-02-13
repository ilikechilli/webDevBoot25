const franc = require("franc");
const langs = require("langs");
const colors = require("colors")

const getInput = process.argv[2] || null;

if (getInput){
  try {
    const lan = franc(getInput);
    const res = langs.where("3", lan);
    console.log(`Our best guess is: ${res.name}`.green);
  } catch {
    console.log("Something went wrong or the language input was insufficient for detection".red)
  }
} else {
  console.log("No input argument detected")
}