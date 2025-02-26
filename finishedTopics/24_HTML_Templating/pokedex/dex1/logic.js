const pokemonJson = require("./data/pokedex.json");

//console.log(pokemonJson[0].name);

function getPokemonByName(pokename, pokeList){
  const formattedName = pokename.slice(0, 1).toUpperCase() + pokename.slice(1);
  const result = pokeList.find((pokemon) => {
    return pokemon.name.english === formattedName;
  })
  return result;
}
