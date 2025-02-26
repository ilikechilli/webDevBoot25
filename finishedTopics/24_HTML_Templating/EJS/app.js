const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

//This is required
app.set('view engine', 'ejs');
//This needs to be set so that the server file can be run from outside the project directory using Node(mon)
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
  res.send("Hello");
})
//The render method below refers automatically to the views file that needs to be set.
app.get("/home", (req, res) => {
  res.render("home");
})

app.listen(port, () => {
  console.log("App is listening");
})