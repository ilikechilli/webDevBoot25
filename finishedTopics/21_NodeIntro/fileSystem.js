//This script is created to demonstrate how the filesystem module works in node

// This snippet will allow the user to create a new "project folder" that always contains 3 standard files for a web project

//1 Import the filesystem module
const fs = require("fs");
//You need to provide a filename as an argument
const folderName = process.argv[2] || ("Project" + (new Date().toDateString()));

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, '');
  fs.writeFileSync(`${folderName}/app.js`, '');
  fs.writeFileSync(`${folderName}/styles.css`, '');
} catch(e){
  console.log("Error: ", e);
}





