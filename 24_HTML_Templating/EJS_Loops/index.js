const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render("index");
})

app.get("/ejsLoops", (req, res) => {
  const pets = ["Loki", "Tootsie", "Blo'ke", "Sky", "Droopy", "Nina", "Janneke", "Jipke"]
  res.render("loops", {
    pets: pets
  })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})