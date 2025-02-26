const express = require("express");
const app = express();
const port = process.argv[2] || 3000;
const path = require("path");
const logic  = require("./logic")

app.set("view engine", "EJS");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("index");
})

app.get("/randomNumberGenerator", (req, res) => {
  res.render("randomGenerator");
})

app.get("/result", (req, res) => {
  const minrand = req.query.minValue;
  const maxrand = req.query.maxValue;
  const returnnumber = logic.getRandomBetween(minrand, maxrand);
  res.render("result", {
    minrand: minrand,
    maxrand: maxrand,
    result: returnnumber
  })
})

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
});