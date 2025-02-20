const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const pokemonJSON = require("./data/pokedex.json");
const logic = require("./logic");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
})

app.get("/dex/:pokemon", (req, res) => {
  const {pokemon} = req.params;
  const arrayId = parseInt(pokemon) - 1;
  console.log(arrayId);
  const data = pokemonJSON[arrayId];
  console.log(data);
  res.render("pokemon", {
    pokemon: data.name.english
  });
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})