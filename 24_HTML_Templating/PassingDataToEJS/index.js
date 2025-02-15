const express = require("express");
const app = express();
const port = process.argv[2] || 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("index");
})

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10);
  res.render("random", {
    randomNumber: num
  })
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})