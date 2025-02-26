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
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("rand", {
    num: num
  })
})

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
})
